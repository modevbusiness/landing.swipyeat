import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function FinalCTA() {
    return (
        <div className="bg-secondary p-8 md:p-16" id="get-started">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-primary text-xl font-mono border-b border-primary w-max mx-auto">
                    Ready to Transform?
                </h1>
                <h2 className="text-5xl md:text-6xl font-heading py-6 text-black">
                    Start streamlining your restaurant today
                </h2>
                <p className="text-xl text-black/70 max-w-2xl mx-auto mb-8">
                    Join over 1,000 restaurants worldwide that have already improved their operations with SwipeEat. Set up takes less than 10 minutes.
                </p>
                <Link 
                    className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-4 px-16 text-xl hover:bg-primary/90 transition-all"
                    href="/sign-up"
                >
                    <span>Start Free Trial</span>
                    <ArrowRight size={24} />
                </Link>

                <p className="text-black/60 mt-6">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-primary font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
