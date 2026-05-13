'use client';

import { Check, Zap, MonitorCheck, Tablet, Users, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const categoryIcons = [Tablet, Zap, BarChart3];
const categoryImages = ["/menuItems.png", "/ordersDashboard.png", "/analyticsDashboard.png"];
const highlightIcons = [Zap, ShieldCheck, MonitorCheck, Users];

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useLanguage()
    const fp = t.featuresPage

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="features-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">{fp.label}</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        {fp.title}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {fp.subtitle}
                    </p>
                </div>
            </div>

            {/* Highlights Bar */}
            <div className="bg-secondary p-8" id="highlights">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {fp.highlights.map((h, i) => {
                        const Icon = highlightIcons[i]
                        return (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-primary rounded-full p-3">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg text-white">{h.title}</h3>
                                    <p className="text-white text-sm">{h.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Feature Navigation Tabs */}
            <div className="p-8 md:p-16" id="all-features">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">
                        {fp.exploreLabel}
                    </h1>
                    <h2 className="text-5xl font-heading py-6">
                        {fp.exploreTitle}
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
                        {fp.categories.map((cat, i) => {
                            const Icon = categoryIcons[i]
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(i)}
                                    className={`flex items-center gap-2 px-5 py-3 font-medium transition-colors border-b-2 ${
                                        activeTab === i
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-black/60 hover:text-black'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span>{cat.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Active Feature Detail */}
                    {fp.categories.map((cat, i) => {
                        const Icon = categoryIcons[i]
                        return (
                            <div
                                key={cat.id}
                                id={cat.id}
                                className={`${activeTab === i ? 'block' : 'hidden'}`}
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/10 rounded-full p-3">
                                                <Icon size={28} className="text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-heading">{cat.title}</h3>
                                                <p className="text-primary font-medium">{cat.subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-xl text-black/70 leading-relaxed">
                                            {cat.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {cat.benefits.map((benefit, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                                                        <Check size={16} className="text-primary" />
                                                    </div>
                                                    <span className="text-black/80">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex-1 max-h-[400px] bg-gray-50 overflow-hidden">
                                        <Image
                                            src={categoryImages[i]}
                                            alt={cat.title}
                                            width={600}
                                            height={400}
                                            className="w-full mt-[60px] border-4 border-black h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* All Features Grid */}
            <div className="py-8 md:py-16" id="features-overview">
                <div className="max-w-6xl mx-auto">
                    <div className="px-8 md-p-0">
                        <h1 className="text-primary text-xl font-mono border-b w-max">
                            {fp.overviewLabel}
                        </h1>
                        <h2 className="text-5xl font-heading py-6">
                            {fp.overviewTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {fp.categories.map((cat, i) => {
                            const Icon = categoryIcons[i]
                            return (
                                <div
                                    key={cat.id}
                                    className="bg-white even:bg-gray-100 border-gray-200 p-6 hover:border-primary/30 transition-all cursor-pointer"
                                    onClick={() => {
                                        setActiveTab(i);
                                        document.getElementById('all-features')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                        <Icon size={24} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-heading mb-2">{cat.title}</h3>
                                    <p className="text-black/60 mb-4">{cat.subtitle}</p>
                                    <ul className="space-y-2">
                                        {cat.benefits.slice(0, 3).map((benefit, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm">
                                                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                                                <span className="text-black/70">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="features-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        {fp.ctaTitle}
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        {fp.ctaSubtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                            href="/sign-up"
                        >
                            <span>{fp.startTrial}</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/pricing"
                        >
                            <span>{fp.viewPricing}</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
