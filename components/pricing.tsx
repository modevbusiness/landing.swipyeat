'use client';

import Link from "next/link";
import { Check, ArrowRight, Sliders } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const tierMonthlyPrices = [499, 899, 1399];
const tierYearlyTotals = [4999, 8999, 13990];
const tierYearlySavings = [989, 1789, 2798];
const tierHighlighted = [false, true, false];
const tierButtonLinks = ["/sign-up?plan=starter", "/sign-up?plan=premium", "/sign-up?plan=unlimited"];
const YEARLY_DISCOUNT = 0.20;

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);
    const { t } = useLanguage();
    const tiers = t.pricing.tiers;
    const cp = t.pricing.customPlan;

    const [selected, setSelected] = useState<boolean[]>(
        () => cp.services.map(() => false)
    );

    const toggleService = (i: number) => {
        setSelected(prev => prev.map((v, idx) => idx === i ? !v : v));
    };

    const monthlyTotal = cp.services.reduce(
        (sum, svc, i) => sum + (selected[i] ? svc.price : 0), 0
    );
    const yearlyTotal = Math.round(monthlyTotal * 12 * (1 - YEARLY_DISCOUNT));
    const yearlyMonthly = Math.round(monthlyTotal * (1 - YEARLY_DISCOUNT));
    const hasSelection = monthlyTotal > 0;

    const calculatePrice = (index: number) => {
        if (isYearly) return Math.round(tierYearlyTotals[index] / 12);
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

                {/* Billing toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-lg font-semibold ${!isYearly ? 'text-primary' : 'text-black/60'}`}>
                        {t.pricing.monthly}
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-16 h-8 rounded-full transition-colors ${isYearly ? 'bg-primary' : 'bg-gray-300'}`}
                        aria-label="Toggle billing period"
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-9' : 'translate-x-1'}`} />
                    </button>
                    <span className={`text-lg font-semibold ${isYearly ? 'text-primary' : 'text-black/60'}`}>
                        {t.pricing.yearly}
                    </span>
                    <span className="bg-primary hidden md:block text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {t.pricing.saveUpTo}
                    </span>
                </div>

                {/* Standard tiers */}
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

                            <h3 className={`text-2xl font-heading mb-2 ${tierHighlighted[index] ? 'text-white' : 'text-black'}`}>
                                {tier.name}
                            </h3>

                            <div className="mb-4">
                                <span className={`text-5xl font-heading ${tierHighlighted[index] ? 'text-white' : 'text-[#5e9d01]'}`}>
                                    {calculatePrice(index)}<sub className="text-2xl">Dh</sub>
                                </span>
                                <span className={`text-lg ml-2 ${tierHighlighted[index] ? 'text-white/70' : 'text-black/60'}`}>
                                    {t.pricing.perMonth}
                                </span>
                                {isYearly && (
                                    <div className={`text-sm mt-1 ${tierHighlighted[index] ? 'text-white/60' : 'text-black/50'}`}>
                                        {t.pricing.billedYearly(tierYearlyTotals[index], tierYearlySavings[index])}
                                    </div>
                                )}
                            </div>

                            <p className={`mb-6 ${tierHighlighted[index] ? 'text-white/80' : 'text-black/70'}`}>
                                {tier.description}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`rounded-full p-1 mt-0.5 ${tierHighlighted[index] ? 'bg-white/20' : 'bg-[#5e9d01]/10'}`}>
                                            <Check size={16} className={tierHighlighted[index] ? 'text-white' : 'text-[#5e9d01]'} />
                                        </div>
                                        <span className={tierHighlighted[index] ? 'text-white/90' : 'text-black/80'}>
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

                {/* Custom plan */}
                <div className="mt-8 rounded-lg border-2 border-dashed border-primary/40 bg-white overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary/5 border-b border-primary/20 px-8 py-6 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                                <Sliders size={20} className="text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-primary tracking-widest uppercase">{cp.badge}</span>
                                <h3 className="text-2xl font-heading text-black">{cp.name}</h3>
                            </div>
                        </div>
                        <p className="text-black/60 md:ml-4 md:max-w-lg text-[15px]">{cp.description}</p>
                    </div>

                    <div className="p-8 flex flex-col lg:flex-row gap-10">
                        {/* Service checkboxes */}
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-4">
                                {cp.selectLabel}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {cp.services.map((svc, i) => (
                                    <button
                                        key={i}
                                        onClick={() => toggleService(i)}
                                        className={`flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all ${
                                            selected[i]
                                                ? 'border-primary bg-primary/5'
                                                : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                                            selected[i] ? 'bg-primary border-primary' : 'border-gray-300'
                                        }`}>
                                            {selected[i] && <Check size={12} className="text-white" strokeWidth={3} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className={`font-semibold text-sm ${selected[i] ? 'text-primary' : 'text-black'}`}>
                                                    {svc.name}
                                                </span>
                                                <span className="text-sm font-mono font-bold text-black/70 shrink-0">
                                                    {svc.price} Dh
                                                </span>
                                            </div>
                                            <p className="text-xs text-black/50 mt-0.5 truncate">{svc.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Summary + CTA */}
                        <div className="lg:w-72 flex flex-col">
                            <p className="text-sm font-semibold text-black/50 uppercase tracking-wider mb-4">
                                {cp.summaryLabel}
                            </p>

                            {!hasSelection ? (
                                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-6">
                                    <p className="text-black/40 text-sm text-center">{cp.emptyState}</p>
                                </div>
                            ) : (
                                <div className="flex-1 space-y-2 mb-4">
                                    {cp.services.map((svc, i) =>
                                        selected[i] ? (
                                            <div key={i} className="flex items-center justify-between text-sm">
                                                <span className="text-black/70">{svc.name}</span>
                                                <span className="font-semibold text-black">{svc.price} Dh</span>
                                            </div>
                                        ) : null
                                    )}
                                    <div className="border-t border-gray-200 pt-3 mt-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-black">
                                                {isYearly ? cp.totalYearly : cp.totalMonthly}
                                            </span>
                                            <div className="text-right">
                                                <span className="text-3xl font-heading text-[#5e9d01]">
                                                    {isYearly ? yearlyMonthly : monthlyTotal}
                                                    <sub className="text-base">Dh</sub>
                                                </span>
                                                <span className="text-black/50 text-sm ml-1">{t.pricing.perMonth}</span>
                                                {isYearly && (
                                                    <p className="text-xs text-black/40 mt-0.5">
                                                        {yearlyTotal} Dh / year · {cp.saveLabel(20)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Link
                                href={hasSelection ? `/sign-up?plan=custom&services=${cp.services.filter((_, i) => selected[i]).map(s => s.name).join(',')}&billing=${isYearly ? 'yearly' : 'monthly'}` : '#pricing'}
                                className={`flex items-center justify-center gap-2 hover:gap-4 py-3 px-6 font-semibold transition-all mt-auto ${
                                    hasSelection
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'bg-gray-100 text-black/40 cursor-not-allowed pointer-events-none'
                                }`}
                            >
                                <span>{hasSelection ? cp.buttonText : cp.buttonEmpty}</span>
                                {hasSelection && <ArrowRight size={20} />}
                            </Link>
                        </div>
                    </div>
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
