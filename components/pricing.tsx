'use client';

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const tierMonthlyPrices = [499, 899, 1399];
const tierYearlyTotals = [4999, 8999, 13990];
const tierYearlySavings = [989, 1789, 2798];
const tierHighlighted = [false, true, false];
const tierButtonLinks = ["/sign-up?plan=starter", "/sign-up?plan=premium", "/sign-up?plan=unlimited"];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);
    const { t } = useLanguage()
    const tiers = t.pricing.tiers

    const calculatePrice = (index: number) => {
        if (isYearly) {
            return Math.round(tierYearlyTotals[index] / 12);
        }
        return tierMonthlyPrices[index];
    };

    return (
        <div className="p-8 md:p-16" id="pricing">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    {t.pricing.label}
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    {t.pricing.title}
                </h2>
                <p className="text-xl text-black/70 max-w-2xl mb-8">
                    {t.pricing.subtitle}
                </p>

                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-lg font-semibold ${!isYearly ? 'text-primary' : 'text-black/60'}`}>
                        {t.pricing.monthly}
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
                        {t.pricing.yearly}
                    </span>
                    <span className="bg-primary hidden md:block text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {t.pricing.saveUpTo}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={`rounded-lg p-8 flex flex-col ${
                                tierHighlighted[index]
                                    ? 'bg-primary text-white shadow-2xl scale-105 border-4 border-primary'
                                    : 'bg-white border-2 border-gray-200'
                            }`}
                        >
                            {tierHighlighted[index] && (
                                <div className="bg-white text-primary text-sm font-semibold px-4 py-1 rounded-full w-max mb-4">
                                    {t.pricing.mostPopular}
                                </div>
                            )}

                            <h3 className={`text-2xl font-heading mb-2 ${
                                tierHighlighted[index] ? 'text-white' : 'text-black'
                            }`}>
                                {tier.name}
                            </h3>

                            <div className="mb-4">
                                <span className={`text-5xl font-heading ${
                                    tierHighlighted[index] ? 'text-white' : 'text-[#5e9d01]'
                                }`}>
                                    {calculatePrice(index)}<sub className='text-2xl'>Dh</sub>
                                </span>
                                <span className={`text-lg ml-2 ${
                                    tierHighlighted[index] ? 'text-white/70' : 'text-black/60'
                                }`}>
                                    {t.pricing.perMonth}
                                </span>
                                {isYearly && (
                                    <div className={`text-sm mt-1 ${
                                        tierHighlighted[index] ? 'text-white/60' : 'text-black/50'
                                    }`}>
                                        {t.pricing.billedYearly(tierYearlyTotals[index], tierYearlySavings[index])}
                                    </div>
                                )}
                            </div>

                            <p className={`mb-6 ${
                                tierHighlighted[index] ? 'text-white/80' : 'text-black/70'
                            }`}>
                                {tier.description}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`rounded-full p-1 mt-0.5 ${
                                            tierHighlighted[index] ? 'bg-white/20' : 'bg-[#5e9d01]/10'
                                        }`}>
                                            <Check
                                                size={16}
                                                className={tierHighlighted[index] ? 'text-white' : 'text-[#5e9d01]'}
                                            />
                                        </div>
                                        <span className={
                                            tierHighlighted[index] ? 'text-white/90' : 'text-black/80'
                                        }>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`${tierButtonLinks[index]}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                                className={`flex items-center justify-center gap-2 hover:gap-4 py-3 px-6 font-semibold transition-all ${
                                    tierHighlighted[index]
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
                        {t.pricing.notSure}{" "}
                        <Link href="/pricing#compare-plans" className="text-primary font-semibold hover:underline">
                            {t.pricing.compareAll}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
