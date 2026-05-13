'use client';

import Link from "next/link";
import { Check, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const tierMonthlyPrices = [499, 899, 1790];
const tierButtonLinks = ["/sign-up?plan=standard", "/sign-up?plan=premium", "/sign-up?plan=unlimited"];
const tierHighlighted = [false, true, false];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(true);
    const { t } = useLanguage()
    const pp = t.pricingPage

    const renderCellValue = (value: boolean | string) => {
        if (value === true) return <Check size={20} className="text-primary mx-auto" />;
        if (value === false) return <X size={20} className="text-black/30 mx-auto" />;
        return <span className="text-sm font-medium">{value}</span>;
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary p-8 md:p-16 text-white" id="pricing-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">{pp.heroLabel}</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        {pp.heroTitle}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {pp.heroSubtitle}
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <Pricing />

            {/* Compare Plans Table */}
            <div className="p-8 md:p-16 bg-gray-50" id="compare-plans">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">
                        {pp.compareLabel}
                    </h1>
                    <h2 className="text-5xl font-heading py-6">
                        {pp.compareTitle}
                    </h2>
                    <p className="text-xl text-black/70 max-w-2xl mb-12">
                        {pp.compareSubtitle}
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left p-4 text-lg font-heading w-1/4">{pp.featureCol}</th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4">
                                        <div>{pp.tiers[0].name}</div>
                                        <div className="text-primary text-2xl font-heading">{tierMonthlyPrices[0]}Dh/mo</div>
                                    </th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4 bg-primary/5">
                                        <div className="text-primary">{pp.tiers[1].name}</div>
                                        <div className="text-primary text-2xl font-heading">{tierMonthlyPrices[1]}Dh/mo</div>
                                        <span className="bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">POPULAR</span>
                                    </th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4">
                                        <div>{pp.tiers[2].name}</div>
                                        <div className="text-primary text-2xl font-heading">{tierMonthlyPrices[2]}Dh/mo</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pp.compareFeatures.map((category) => (
                                    <>
                                        {category.features.map((feature) => (
                                            <tr key={feature.name} className="border-b border-gray-300 hover:bg-gray-50">
                                                <td className="p-4 text-black/80">{feature.name}</td>
                                                <td className="p-4 text-center">{renderCellValue(feature.standard)}</td>
                                                <td className="p-4 text-center bg-primary/5">{renderCellValue(feature.premium)}</td>
                                                <td className="p-4 text-center">{renderCellValue(feature.unlimited)}</td>
                                            </tr>
                                        ))}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
                        {pp.tiers.map((tier, i) => (
                            <Link
                                key={tier.name}
                                href={`${tierButtonLinks[i]}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                                className={`flex items-center gap-2 hover:gap-4 py-3 px-8 font-semibold transition-all ${
                                    tierHighlighted[i]
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                                }`}
                            >
                                <span>{tier.name} — {tierMonthlyPrices[i]}Dh/mo</span>
                                <ArrowRight size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <FAQ />

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="pricing-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        {pp.ctaTitle}
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        {pp.ctaSubtitle}
                    </p>
                    <Link
                        className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-16 text-xl hover:bg-gray-100 transition-all"
                        href="/sign-up"
                    >
                        <span>{pp.startTrial}</span>
                        <ArrowRight size={24} />
                    </Link>
                    <p className="text-white/60 mt-6">
                        {pp.needCustom}{" "}
                        <Link href="#" className="text-white font-semibold hover:underline">
                            {pp.contactSales}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
