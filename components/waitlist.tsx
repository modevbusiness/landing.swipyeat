'use client'

import { X } from "lucide-react";
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WaitlistForm({onClose, onSubmit}: {onClose?: () => void, onSubmit?: () => void}) {
    const [submitted, setSubmitted] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const { t } = useLanguage()

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
                        <h1 className="text-primary text-2xl font-mono mb-4">{t.waitlist.thankYou}</h1>
                        <p className="text-lg text-black/70">{t.waitlist.thankYouMsg}</p>
                    </div>
                ) : (
                    <>
                        <h1 className="text-primary text-xl font-mono border-b w-max">{t.waitlist.label}</h1>
                        <h2 className="md:text-5xl text-2xl font-heading md:py-6">{t.waitlist.title}</h2>
                        <p className="md:text-lg text-sm text-black/70 max-w-2xl">{t.waitlist.subtitle}</p>
                        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder={t.waitlist.placeholder} className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition">{t.waitlist.button}</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
