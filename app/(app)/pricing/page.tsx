'use client';

import Link from "next/link";
import { Check, ArrowRight, X, HelpCircle } from "lucide-react";
import { useState } from "react";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";

interface PricingTier {
    name: string;
    monthlyPrice: number;
    description: string;
    features: string[];
    highlighted?: boolean;
    buttonText: string;
    buttonLink: string;
}

export default function PricingPage() {
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

    const compareFeatures = [
        {
            category: "Core Features",
            features: [
                { name: "Digital Menu Builder", standard: "Basic", premium: "Advanced", unlimited: "Enterprise" },
                { name: "POS System", standard: true, premium: true, unlimited: true },
                { name: "KDS System", standard: false, premium: true, unlimited: true },
                { name: "Online Ordering", standard: false, premium: true, unlimited: true },
                { name: "Table Reservations", standard: false, premium: true, unlimited: true },
            ]
        },
        {
            category: "Management",
            features: [
                { name: "Locations", standard: "1", premium: "Up to 3", unlimited: "Unlimited" },
                { name: "Devices", standard: "Up to 5", premium: "Up to 15", unlimited: "Unlimited" },
                { name: "Staff Accounts", standard: "5", premium: "25", unlimited: "Unlimited" },
                { name: "Inventory Management", standard: false, premium: true, unlimited: true },
                { name: "Staff Management Tools", standard: false, premium: true, unlimited: true },
            ]
        },
        {
            category: "Analytics & Reports",
            features: [
                { name: "Sales Dashboard", standard: "Basic", premium: "Advanced", unlimited: "Custom" },
                { name: "Revenue Reports", standard: true, premium: true, unlimited: true },
                { name: "Customer Insights", standard: false, premium: true, unlimited: true },
                { name: "Staff Performance", standard: false, premium: true, unlimited: true },
                { name: "API Access", standard: false, premium: false, unlimited: true },
            ]
        },
        {
            category: "Customer Engagement",
            features: [
                { name: "Loyalty Program", standard: false, premium: "Basic", unlimited: "Advanced" },
                { name: "Customer Feedback", standard: false, premium: true, unlimited: true },
                { name: "Email Marketing", standard: false, premium: false, unlimited: true },
                { name: "SMS Notifications", standard: false, premium: false, unlimited: true },
            ]
        },
        {
            category: "Support & Extras",
            features: [
                { name: "Support", standard: "Email", premium: "Priority", unlimited: "24/7 Dedicated" },
                { name: "Onboarding", standard: "Self-serve", premium: "Guided", unlimited: "Dedicated Manager" },
                { name: "Custom Integrations", standard: false, premium: false, unlimited: true },
                { name: "White-label Options", standard: false, premium: false, unlimited: true },
                { name: "SLA Guarantee", standard: false, premium: false, unlimited: true },
            ]
        },
    ];

    

    const calculatePrice = (monthlyPrice: number) => {
        if (isYearly) {
            const yearlyPrice = monthlyPrice * 12 * 0.9;
            return Math.round(yearlyPrice / 12);
        }
        return monthlyPrice;
    };

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
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Pricing</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Simple, transparent pricing <br /> for every restaurant
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required. Scale as you grow.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <Pricing />

            {/* Compare Plans Table */}
            <div className="p-8 md:p-16 bg-gray-50" id="compare-plans">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">
                        Compare Plans
                    </h1>
                    <h2 className="text-5xl font-heading py-6">
                        Find the right plan <br /> for your restaurant
                    </h2>
                    <p className="text-xl text-black/70 max-w-2xl mb-12">
                        Compare all features side by side to find the perfect fit for your business.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left p-4 text-lg font-heading w-1/4">Feature</th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4">
                                        <div>Standard</div>
                                        <div className="text-primary text-2xl font-heading">${calculatePrice(49)}/mo</div>
                                    </th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4 bg-primary/5 ">
                                        <div className="text-primary">Premium</div>
                                        <div className="text-primary text-2xl font-heading">${calculatePrice(99)}/mo</div>
                                        <span className="bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">POPULAR</span>
                                    </th>
                                    <th className="text-center p-4 text-lg font-heading w-1/4">
                                        <div>Unlimited</div>
                                        <div className="text-primary text-2xl font-heading">${calculatePrice(199)}/mo</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareFeatures.map((category) => (
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

                    <div className="flex justify-center gap-6 mt-12">
                        {pricingTiers.map((tier) => (
                            <Link
                                key={tier.name}
                                href={`${tier.buttonLink}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                                className={`flex items-center gap-2 hover:gap-4 py-3 px-8 font-semibold transition-all ${
                                    tier.highlighted
                                        ? 'bg-primary text-white hover:bg-primary/90'
                                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                                }`}
                            >
                                <span>{tier.name} — ${calculatePrice(tier.monthlyPrice)}/mo</span>
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
                        Ready to get started?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Start your 14-day free trial today. No credit card required.
                    </p>
                    <Link
                        className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-16 text-xl hover:bg-gray-100 transition-all"
                        href="/sign-up"
                    >
                        <span>Start Free Trial</span>
                        <ArrowRight size={24} />
                    </Link>
                    <p className="text-white/60 mt-6">
                        Need a custom plan?{" "}
                        <Link href="#" className="text-white font-semibold hover:underline">
                            Contact Sales
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
