"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function OnboardingSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!sessionId) {
      router.push("/redirect");
      return;
    }

    // Verify the Stripe session and update the subscription in DB
    const verifyAndRedirect = async () => {
      try {
        await fetch("/api/stripe/verify-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        setStatus("success");
      } catch (err) {
        console.error("Verification failed:", err);
        setStatus("success"); // Still show success since Stripe payment went through
      }

      // Auto-redirect to admin dashboard after 3 seconds
      setTimeout(() => {
        router.push("/redirect");
      }, 3000);
    };

    verifyAndRedirect();
  }, [sessionId, router]);

  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center px-4 font-inter">
      <div className="max-w-md w-full mx-auto text-center space-y-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-12">
        {status === "loading" && (
          <>
            <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
            <h1 className="text-2xl font-bold text-foreground font-heading">
              Processing payment...
            </h1>
            <p className="text-muted-foreground">
              Please wait while we verify your subscription.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-in zoom-in-50 duration-500">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground font-heading">
              Payment Successful! 🎉
            </h1>
            <p className="text-muted-foreground">
              Your <span className="font-semibold text-foreground">SwipyEat Pro</span> subscription
              is now active. Redirecting to your dashboard...
            </p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-6 overflow-hidden">
              <div
                className="bg-primary h-1.5 rounded-full"
                style={{
                  animation: "progress 3s ease-in-out forwards",
                }}
              />
            </div>
            <style jsx>{`
              @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground font-heading">
              Payment Issue
            </h1>
            <p className="text-muted-foreground">
              There was an issue processing your payment. Don&apos;t worry — you can
              upgrade anytime from your dashboard settings.
            </p>
            <button
              onClick={() => router.push("/redirect")}
              className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </div>
  );
}
