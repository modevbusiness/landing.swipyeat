"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Store, Users, MapPin, Building2, Phone, Mail, Link as LinkIcon, Loader2, ArrowRight, ArrowLeft, Image as ImageIcon, Upload, XCircle, CreditCard, Check, Sparkles, Crown, Zap } from "lucide-react";
import { useEffect } from "react";
import { checkInviteAction, clearInviteCookie } from "@/app/actions/invite";
import { createClient } from "@/lib/supabase/client";

type UserRole = "restaurant_admin" | "staff";

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();
  const supabase = createClient();
  
  const [step, setStep] = useState(1);
  const [lastStepTime, setLastStepTime] = useState(Date.now());
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  // Plan selection (Step 4)
  const [selectedPlan, setSelectedPlan] = useState<'free_trial' | 'pro' | 'unlimited'>('free_trial');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [dbPlans, setDbPlans] = useState<any[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(false);
  
  // Restaurant fields (Step 2)
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  
  // Restaurant fields (Step 3)
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  // Logo
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  // Staff fields
  const [invitationLink, setInvitationLink] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [inviteData, setInviteData] = useState<any>(null);
  const [isCheckingInvite, setIsCheckingInvite] = useState(true);

  useEffect(() => {
    const checkInvite = async () => {
      try {
        const data = await checkInviteAction();
        if (data) {
          setInviteData(data);
          if (data.emailMatch) {
            setSelectedRole("staff");
            setStep(2); // Skip role selection
          } else {
            setError(`This invitation was sent to ${data.email}, but you are signed in as ${data.userEmail}. Please sign in with the correct email.`);
          }
        }
      } catch (err) {
        console.error("Failed to check invite:", err);
      } finally {
        setIsCheckingInvite(false);
      }
    };
    checkInvite();
  }, []);

  // Fetch plans from DB when reaching step 4
  useEffect(() => {
    if (step === 4 && dbPlans.length === 0) {
      fetchPlans();
    }
  }, [step]);

  const fetchPlans = async () => {
    setIsLoadingPlans(true);
    try {
      const { data: plans, error: planError } = await supabase
        .from("subscription_plans")
        .select("*")
        .eq("is_active", true)
        .order("price_monthly", { ascending: true });

      if (plans && !planError) {
        setDbPlans(plans);
      }
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    } finally {
      setIsLoadingPlans(false);
    }
  };

  const roles = [
    {
      id: "restaurant_admin" as UserRole,
      title: "Restaurant Owner",
      description: "Set up and manage your restaurant workspace, menu, and staff.",
      icon: <Store className="w-6 h-6" />,
    },
    {
      id: "staff" as UserRole,
      title: "Restaurant Staff",
      description: "Join an existing restaurant workspace using an invitation link.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadLogoToCloudinary = async (): Promise<string | null> => {
    if (!logoFile) return null;
    
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      console.warn("Cloudinary configuration missing. Logo will not be uploaded.");
      return null;
    }
    
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", logoFile);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        return data.secure_url;
      }
      return null;
    } catch (err) {
      console.error("Failed to upload logo:", err);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleNext = () => {
    if (step === 1 && !selectedRole) {
      setError("Please select a role to continue.");
      return;
    }
    
    if (step === 2 && selectedRole === "restaurant_admin") {
      if (!restaurantName.trim() || !address.trim() || !city.trim()) {
        setError("Please fill in all required restaurant details.");
        return;
      }
    }

    if (step === 2 && selectedRole === "staff") {
      if (!invitationLink.trim()) {
        setError("Please enter your invitation link.");
        return;
      }
    }

    setError("");
    setStep((prev) => prev + 1);
    setLastStepTime(Date.now());
  };

  const handleBack = () => {
    setError("");
    setStep((prev) => prev - 1);
    setLastStepTime(Date.now());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent accidental double clicks or enter-hold from skipping the final step
    if (Date.now() - lastStepTime < 700) {
      return;
    }

    setError("");
    
    if (selectedRole === "staff" && !invitationLink.trim() && !inviteData?.token) {
      setError("Please enter your invitation link.");
      return;
    }

    if (inviteData && !inviteData.emailMatch) {
      setError(`Email mismatch. This invite is for ${inviteData.email}.`);
      return;
    }

    setIsLoading(true);

    try {
      // 1. Upload logo if provided
      let logoUrl = null;
      if (selectedRole === "restaurant_admin" && logoFile) {
        logoUrl = await uploadLogoToCloudinary();
      }

      // 2. Update Clerk user metadata
      await user?.update({
        unsafeMetadata: {
          role: selectedRole,
          onboardingCompleted: true,
        },
      });

      // 3. Prepare payload for the database
      const payload = {
        role: selectedRole,
        restaurantName: selectedRole === "restaurant_admin" ? restaurantName : null,
        address: selectedRole === "restaurant_admin" ? address : null,
        city: selectedRole === "restaurant_admin" ? city : null,
        phone: selectedRole === "restaurant_admin" ? phone : null,
        email: selectedRole === "restaurant_admin" ? email : null,
        logo_url: logoUrl,
        userId: user?.id,
        name: user?.fullName || user?.firstName || "User",
        inviteToken: inviteData?.token || null,
        selectedPlan: selectedRole === "restaurant_admin" ? selectedPlan : "free_trial",
        billingCycle: selectedRole === "restaurant_admin" ? billingCycle : "monthly",
      };

      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to complete onboarding.");
      }

      const data = await response.json();

      // 4. Clear invite cookie if successful
      if (inviteData?.token) {
        await clearInviteCookie();
      }

      // 5. If paid plan selected, redirect to Stripe Checkout
      if (selectedRole === "restaurant_admin" && selectedPlan !== "free_trial" && data.restaurantId) {
        const stripeRes = await fetch("/api/stripe/create-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            restaurantId: data.restaurantId,
            planType: selectedPlan,
            billingCycle,
            email: email || user?.primaryEmailAddress?.emailAddress,
          }),
        });

        if (!stripeRes.ok) {
          throw new Error("Failed to create payment session.");
        }

        const { url } = await stripeRes.json();
        if (url) {
          window.location.href = url;
          return;
        }
      }

      // 6. For free trial or staff, redirect normally
      router.push("/redirect");
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
      setIsLoading(false);
    }
  };

  // Determine Max Steps
  const maxSteps = selectedRole === "staff" ? 2 : 4;

  return (
    <div className="min-h-screen bg-gray-50/50 flex py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="w-full max-w-3xl mx-auto my-auto space-y-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-12 relative overflow-hidden">
        
        {/* Step Indicator */}
        {selectedRole && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out" 
              style={{ width: `${(step / maxSteps) * 100}%` }}
            />
          </div>
        )}

        {isCheckingInvite && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-sm font-medium text-muted-foreground italic">Verifying your invitation...</p>
          </div>
        )}

        <div className="text-center pt-4">
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl mb-2 font-heading">
            {step === 1 && "Welcome to SwipyEat"}
            {step === 2 && selectedRole === "restaurant_admin" && "Restaurant Info"}
            {step === 3 && selectedRole === "restaurant_admin" && "Contact & Branding"}
            {step === 4 && selectedRole === "restaurant_admin" && "Choose Your Plan"}
            {step === 2 && selectedRole === "staff" && "Join Workspace"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {step === 1 && "Tell us how you'll be using the platform."}
            {step === 2 && selectedRole === "restaurant_admin" && "Let's set up the basics for your restaurant."}
            {step === 3 && selectedRole === "restaurant_admin" && "Add how customers can reach you and upload your logo."}
            {step === 4 && selectedRole === "restaurant_admin" && "Select a subscription plan to get started."}
            {step === 2 && selectedRole === "staff" && "Paste the invitation link provided by your manager."}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center animate-in fade-in zoom-in-95 flex items-center justify-center gap-2">
            <XCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={(e) => {
           e.preventDefault();
           if (step === maxSteps) {
             handleSubmit(e);
           } else {
             handleNext();
           }
        }} className="space-y-10">
          
          {/* STEP 1: ROLE SELECTION */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500">
              {roles.map((role) => {
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => { setSelectedRole(role.id); setError(""); }}
                    className={`relative flex flex-col p-6 border-2 rounded-2xl transition-all duration-200 text-left ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-1 ring-primary/10 shadow-sm"
                        : "border-gray-200 hover:border-primary/30 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${
                        isSelected ? "bg-primary text-white" : "bg-gray-100 text-muted-foreground"
                      }`}
                    >
                      {role.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{role.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{role.description}</p>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 2: RESTAURANT ADMIN (Basics) */}
          {step === 2 && selectedRole === "restaurant_admin" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="restaurantName" className="block text-sm font-semibold text-foreground mb-1.5">
                    Restaurant Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Store className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="restaurantName"
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      placeholder="E.g. The Golden Fork"
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-1.5">
                    Street Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Main St, Suite 100"
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-1.5">
                    City <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="New York"
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: RESTAURANT ADMIN (Contact & Logo) */}
          {step === 3 && selectedRole === "restaurant_admin" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                    Business Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@restaurant.com"
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    Restaurant Logo <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-input border-dashed rounded-xl bg-background hover:bg-gray-50 transition-colors">
                    <div className="space-y-1 text-center">
                      {logoPreview ? (
                        <div className="relative w-32 h-32 mx-auto flex items-center justify-center bg-gray-100 rounded-full border shadow-sm overflow-hidden mb-4">
                          <img src={logoPreview} alt="Logo preview" className="object-cover w-full h-full" />
                        </div>
                      ) : (
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-300" />
                      )}
                      
                      <div className="flex text-sm text-foreground justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary p-1"
                        >
                          <span className="flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            {logoPreview ? "Change Logo" : "Upload a file"}
                          </span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleLogoChange} />
                        </label>
                      </div>
                      <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PLAN SELECTION (Restaurant Admin Only) */}
          {step === 4 && selectedRole === "restaurant_admin" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
              {/* Billing Cycle Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                <button
                  type="button"
                  onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <span className={`text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly <span className="text-green-600 text-xs font-bold ml-1 bg-green-50 px-1.5 py-0.5 rounded-full">Save 17%</span>
                </span>
              </div>

              {/* Plan Cards - Dynamic from DB */}
              {isLoadingPlans ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className={`grid grid-cols-1 ${dbPlans.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                  {dbPlans.map((plan) => {
                    const isSelected = selectedPlan === plan.plan_type;
                    const isFree = plan.plan_type === 'free_trial';
                    const isPro = plan.plan_type === 'pro';
                    const isUnlimited = plan.plan_type === 'unlimited';

                    // Plan icon mapping
                    const PlanIcon = isFree ? Sparkles : isUnlimited ? Zap : Crown;
                    
                    // Price display
                    const displayPrice = isFree 
                      ? '0' 
                      : billingCycle === 'yearly' 
                        ? Math.round(plan.price_yearly / 12) 
                        : plan.price_monthly;

                    // Features: try to parse from DB or use defaults
                    let features: string[] = [];
                    if (plan.features) {
                      try {
                        const parsed = typeof plan.features === 'string' ? JSON.parse(plan.features) : plan.features;
                        if (Array.isArray(parsed)) {
                          features = parsed;
                        }
                      } catch {
                        features = [];
                      }
                    }
                    
                    // Fallback features based on plan limits
                    if (!features || features.length === 0) {
                      if (isFree) {
                        features = [
                          `Up to ${plan.max_tables || 10} tables`,
                          'Basic menu management',
                          'Order management',
                          `Up to ${plan.max_staff || 3} staff members`,
                        ];
                      } else if (isPro) {
                        features = [
                          `Up to ${plan.max_tables || 50} tables`,
                          'Full menu management',
                          'Advanced analytics & reports',
                          `Up to ${plan.max_staff || 50} staff members`,
                          'Priority support',
                          'QR code generation',
                        ];
                      } else if (isUnlimited) {
                        features = [
                          'Unlimited tables',
                          'Full menu management',
                          'Advanced analytics & reports',
                          'Unlimited staff members',
                          'Priority support',
                          'QR code generation',
                          'Custom branding',
                          'API access',
                        ];
                      }
                    }

                    // Determine recommended plan
                    const isRecommended = isPro || (isUnlimited && dbPlans.length <= 2);

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan.plan_type)}
                        className={`relative flex flex-col p-6 border-2 rounded-2xl transition-all duration-200 text-left ${
                          isSelected
                            ? 'border-primary bg-primary/5 ring-1 ring-primary/10 shadow-sm'
                            : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                        }`}
                      >
                        {isRecommended && (
                          <div className="absolute -top-3 right-4">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                              {isUnlimited ? 'Best Value' : 'Recommended'}
                            </span>
                          </div>
                        )}
                        <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-muted-foreground'}`}>
                          <PlanIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                        <div className="mb-3">
                          <span className="text-3xl font-extrabold text-foreground">{displayPrice} MAD</span>
                          <span className="text-muted-foreground text-sm ml-1">
                            {isFree ? `/ ${plan.trial_days || 14} days` : '/ month'}
                          </span>
                        </div>
                        {!isFree && billingCycle === 'yearly' && (
                          <p className="text-xs text-green-600 font-semibold mb-2">
                            Billed {plan.price_yearly} MAD/year (save {Math.round((plan.price_monthly * 12) - plan.price_yearly)} MAD)
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mb-4">
                          {plan.description || (isFree 
                            ? 'Try everything free. No credit card required.' 
                            : `Everything you need to run your restaurant digitally.`
                          )}
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                          {features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500 shrink-0" /> {feature}
                            </li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              )}

              {selectedPlan !== 'free_trial' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 animate-in fade-in zoom-in-95 duration-300">
                  <CreditCard className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800">Secure Payment via Stripe</p>
                    <p className="text-xs text-blue-600 mt-0.5">You&apos;ll be redirected to Stripe&apos;s secure checkout to complete your payment.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: STAFF (Join Workspace) */}
          {step === 2 && selectedRole === "staff" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
              {inviteData?.emailMatch ? (
                <div className="space-y-4">
                   <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-lg">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Invitation Validated!</h4>
                      <p className="text-xs text-green-600 opacity-90 mt-0.5">
                        You've been invited to join a restaurant. Click "Complete Setup" below to join your team.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-white flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary font-bold">
                       {inviteData.role?.[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Role Assigned</p>
                      <p className="text-lg font-bold text-foreground capitalize">{inviteData.role}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label htmlFor="invitationLink" className="block text-sm font-semibold text-foreground mb-1.5">
                    Invitation Link <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="invitationLink"
                      value={invitationLink}
                      onChange={(e) => setInvitationLink(e.target.value)}
                      placeholder="https://swipyeat.com/join/..."
                      className="block w-full pl-10 pr-3 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground sm:text-sm bg-background transition-colors"
                      required
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Note: This is a demo field and won't be validated rigorously right now.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isLoading}
                className="inline-flex items-center px-4 py-3 border border-input rounded-xl text-foreground bg-background hover:bg-gray-50 font-semibold transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            ) : (
              <div /> // Placeholder for space-between
            )}

            {step < maxSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedRole}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next Step
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading || isUploading}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading || isUploading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {isUploading ? "Uploading..." : "Setting up..."}
                  </>
                ) : (
                  <>
                    {selectedRole === "restaurant_admin" && selectedPlan !== "free_trial" ? "Proceed to Payment" : "Complete Setup"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
