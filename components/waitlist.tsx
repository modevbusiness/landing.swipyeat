import { X } from "lucide-react";
import React from "react";

export default function WaitlistForm({onClose, onSubmit}: {onClose?: () => void, onSubmit?: () => void}) {
    const [submitted, setSubmitted] = React.useState(false);
    const [email, setEmail] = React.useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setSubmitted(true);
        await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        setTimeout(() => {
            if (onSubmit) onSubmit();
        }, 2000);
    }

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30">
            <div className="p-8 flex bg-white flex-col items-center text-center md:gap-4 gap-2 max-w-2xl mx-4 relative">
                <button onClick={() => onClose && onClose()} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>
                
                {submitted ? (
                    <div className="py-8">
                        <h1 className="text-primary text-2xl font-mono mb-4">Thank You! 🎉</h1>
                        <p className="text-lg text-black/70">You're on the waitlist! Check your email for updates.</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-primary text-xl font-mono border-b w-max">Join the Waitlist</h1>
                        <h2 className="md:text-5xl text-2xl font-heading md:py-6">Be the first to experience SwipyEat & get 14 days free trial</h2>
                        <p className="md:text-lg text-sm text-black/70 max-w-2xl">Sign up for our waitlist to get early access to SwipyEat, the all-in-one restaurant management system that streamlines operations and enhances customer experience. Join now and be among the first to revolutionize your restaurant with SwipyEat!</p>
                        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder="Enter your email" className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition">Join Waitlist</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}