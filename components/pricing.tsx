'use client';

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PricingTier {
    name: string;
    monthlyPrice: number;
    description: string;
    features: string[];
    highlighted?: boolean;
    buttonText: string;
    buttonLink: string;
}

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);
    const pricingTiers: PricingTier[] = [
        {
            name: "Standard",
            monthlyPrice: 49,
            description: "Perfect for small restaurants and cafes just getting started",
            features: [
                "Up to 5 devices",
                "Basic menu builder",
                "POS system",
                "Email support",
                "Basic analytics",
                "1 location",
                "Standard updates"
            ],
            buttonText: "Get Started",
            buttonLink: "/sign-up?plan=standard"
        },
        {
            name: "Premium",
            monthlyPrice: 99,
            description: "Ideal for growing restaurants with multiple staff members",
            features: [
                "Up to 15 devices",
                "Advanced menu builder",
                "POS + KDS system",
                "Priority support",
                "Advanced analytics & reports",
                "Up to 3 locations",
                "Customer loyalty program",
                "Inventory management",
                "Staff management tools"
            ],
            highlighted: true,
            buttonText: "Start Free Trial",
            buttonLink: "/sign-up?plan=premium"
        },
        {
            name: "Unlimited",
            monthlyPrice: 199,
            description: "For restaurant chains and enterprises with extensive needs",
            features: [
                "Unlimited devices",
                "Enterprise menu builder",
                "Full system suite",
                "24/7 dedicated support",
                "Custom analytics & API access",
                "Unlimited locations",
                "Advanced loyalty program",
                "Full inventory management",
                "Advanced staff tools",
                "Custom integrations",
                "White-label options",
                "Dedicated account manager"
            ],
            buttonText: "Get Started",
            buttonLink: "/sign-up?plan=unlimited"
        }
    ];

    const calculatePrice = (monthlyPrice: number) => {
        if (isYearly) {
            const yearlyPrice = monthlyPrice * 12 * 0.9; // 10% discount
            return Math.round(yearlyPrice / 12);
        }
        return monthlyPrice;
    };

    const calculateYearlySavings = (monthlyPrice: number) => {
        return Math.round(monthlyPrice * 12 * 0.1);
    };

    return (
        <div className="p-8 md:p-16" id="pricing">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    Pricing
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    Simple, transparent pricing <br /> for every restaurant
                </h2>
                <p className="text-xl text-black/70 max-w-2xl mb-8">
                    Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-lg font-semibold ${!isYearly ? 'text-primary' : 'text-black/60'}`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-16 h-8 rounded-full transition-colors ${
                            isYearly ? 'bg-primary' : 'bg-gray-300'
                        }`}
                        aria-label="Toggle billing period"
                    >
                        <div
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                                isYearly ? 'translate-x-9' : 'translate-x-1'
                            }`}
                        />
                    </button>
                    <span className={`text-lg font-semibold ${isYearly ? 'text-primary' : 'text-black/60'}`}>
                        Yearly
                    </span>
                    {isYearly && (
                        <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                            Save 10%
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`rounded-lg p-8 flex flex-col ${
                                tier.highlighted
                                    ? 'bg-primary text-white shadow-2xl scale-105 border-4 border-primary'
                                    : 'bg-white border-2 border-gray-200'
                            }`}
                        >
                            {tier.highlighted && (
                                <div className="bg-white text-primary text-sm font-semibold px-4 py-1 rounded-full w-max mb-4">
                                    MOST POPULAR
                                </div>
                            )}
                            
                            <h3 className={`text-2xl font-heading mb-2 ${
                                tier.highlighted ? 'text-white' : 'text-black'
                            }`}>
                                {tier.name}
                            </h3>
                            
                            <div className="mb-4">
                                <span className={`text-5xl font-heading ${
                                    tier.highlighted ? 'text-white' : 'text-primary'
                                }`}>
                                    ${calculatePrice(tier.monthlyPrice)}
                                </span>
                                <span className={`text-lg ml-2 ${
                                    tier.highlighted ? 'text-white/70' : 'text-black/60'
                                }`}>
                                    per month
                                </span>
                                {isYearly && (
                                    <div className={`text-sm mt-1 ${
                                        tier.highlighted ? 'text-white/60' : 'text-black/50'
                                    }`}>
                                        Billed ${calculatePrice(tier.monthlyPrice) * 12 }/year · Save ${calculateYearlySavings(tier.monthlyPrice)}/year
                                    </div>
                                )}
                            </div>

                            <p className={`mb-6 ${
                                tier.highlighted ? 'text-white/80' : 'text-black/70'
                            }`}>
                                {tier.description}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className={`rounded-full p-1 mt-0.5 ${
                                            tier.highlighted ? 'bg-white/20' : 'bg-primary/10'
                                        }`}>
                                            <Check 
                                                size={16} 
                                                className={tier.highlighted ? 'text-white' : 'text-primary'}
                                            />
                                        </div>
                                        <span className={
                                            tier.highlighted ? 'text-white/90' : 'text-black/80'
                                        }>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`${tier.buttonLink}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                                className={`flex items-center justify-center gap-2 hover:gap-4 py-3 px-6 font-semibold transition-all ${
                                    tier.highlighted
                                        ? 'bg-white text-primary hover:bg-gray-100'
                                        : 'bg-primary text-white hover:bg-primary/90'
                                }`}
                            >
                                <span>{tier.buttonText}</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-black/60">
                        Not sure which plan is right for you?{" "}
                        <Link href="/pricing#compare-plans" className="text-primary font-semibold hover:underline">
                            Compare all features
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
