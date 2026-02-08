'use client';

import { Check, Zap, MonitorCheck, Tablet, CreditCard, Users, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState(0);

    const featureCategories = [
        {
            id: "digital-menu",
            icon: Tablet,
            title: "Digital Menu",
            subtitle: "Create stunning digital menus in minutes",
            description: "Transform your paper menus into beautiful, interactive digital experiences. Update items, prices, and descriptions in real-time across all your locations.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Drag-and-drop menu builder with categories and modifiers",
                "Real-time updates — change prices and items instantly",
                "Multimedia support with dish photos and videos",
                "Multi-language support for international customers",
                "QR code generation for tableside ordering",
                "Allergen and dietary labels (vegan, gluten-free, etc.)",
            ]
        },
        {
            id: "online-ordering",
            icon: Zap,
            title: "Online Ordering",
            subtitle: "Accept orders from anywhere, anytime",
            description: "Give your customers a seamless ordering experience with a branded online storefront. Accept takeaway, delivery, and dine-in orders all from one platform.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Branded ordering page with your logo and colors",
                "Real-time order tracking for customers",
                "Multiple payment gateways (Stripe, PayPal, etc.)",
                "Scheduled orders and pre-ordering",
                "Delivery zone management and fee calculation",
                "Automatic order confirmation via SMS and email",
            ]
        },
        {
            id: "table-reservation",
            icon: Users,
            title: "Table Reservation",
            subtitle: "Fill every seat, reduce no-shows",
            description: "Manage reservations effortlessly with real-time availability, automated confirmations, and integrated waitlist management to maximize your seating capacity.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Real-time table availability and floor plan view",
                "Automated SMS/email confirmations and reminders",
                "Waitlist management with estimated wait times",
                "Customer preference tracking (seating, allergies)",
                "Integration with Google Maps and social media",
                "No-show tracking and analytics",
            ]
        },
        {
            id: "order-management",
            icon: MonitorCheck,
            title: "Real-Time Order Management",
            subtitle: "From table to kitchen in milliseconds",
            description: "Eliminate communication gaps between front-of-house and kitchen. Orders flow instantly from the waiter's device to the kitchen display, reducing errors and speeding up service.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Instant order transmission — no more paper tickets",
                "Order modification and special instructions support",
                "Course-by-course firing for multi-course meals",
                "Split bills and shared orders support",
                "Order history and repeat order functionality",
                "Real-time status updates for waitstaff",
            ]
        },
        {
            id: "payment-processing",
            icon: CreditCard,
            title: "Payment Processing",
            subtitle: "Fast, secure, and flexible payments",
            description: "Accept any payment method your customers prefer. From credit cards to digital wallets, process payments securely with built-in fraud protection and detailed transaction reports.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Accept cards, digital wallets, and contactless payments",
                "Automatic tip calculation and split bill support",
                "End-to-end encryption and PCI compliance",
                "Detailed transaction reports and reconciliation",
                "Multi-currency support for international guests",
                "Automated tax calculation per region",
            ]
        },
        {
            id: "analytics",
            icon: BarChart3,
            title: "Analytics & Insights",
            subtitle: "Data-driven decisions for growth",
            description: "Understand your business like never before. Track sales trends, popular dishes, peak hours, and staff performance — all in one powerful dashboard.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            benefits: [
                "Real-time sales dashboard with trends and forecasts",
                "Best-selling items and menu performance analysis",
                "Peak hours and day-of-week traffic insights",
                "Staff productivity and performance metrics",
                "Customer behavior and retention analytics",
                "Exportable reports for accounting and tax",
            ]
        },
    ];

    const highlights = [
        { icon: Zap, title: "Lightning Fast", description: "Orders reach the kitchen in under 2 seconds" },
        { icon: ShieldCheck, title: "Bank-Grade Security", description: "PCI compliant with end-to-end encryption" },
        { icon: MonitorCheck, title: "99.9% Uptime", description: "Reliable cloud infrastructure you can count on" },
        { icon: Users, title: "Loved by Teams", description: "Designed for waiters, chefs, and managers alike" },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="features-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Features</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Everything you need to run <br /> a modern restaurant
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        From digital menus to real-time kitchen displays, SwipyEat gives you all the tools to streamline operations, delight customers, and grow your business.
                    </p>
                </div>
            </div>

            {/* Highlights Bar */}
            <div className="bg-secondary p-8" id="highlights">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="bg-primary rounded-full p-3">
                                <h.icon size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-heading text-lg">{h.title}</h3>
                                <p className="text-black/60 text-sm">{h.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature Navigation Tabs */}
            <div className="p-8 md:p-16" id="all-features">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">
                        Explore Features
                    </h1>
                    <h2 className="text-5xl font-heading py-6">
                        Deep dive into <br /> what SwipyEat offers
                    </h2>

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
                        {featureCategories.map((cat, i) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-2 px-5 py-3 font-medium transition-colors border-b-2 ${
                                    activeTab === i
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-black/60 hover:text-black'
                                }`}
                            >
                                <cat.icon size={18} />
                                <span>{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active Feature Detail */}
                    {featureCategories.map((cat, i) => (
                        <div
                            key={cat.id}
                            id={cat.id}
                            className={`${activeTab === i ? 'block' : 'hidden'}`}
                        >
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <cat.icon size={28} className="text-primary" />
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
                                <div className="flex-1">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Features Grid */}
            <div className="py-8 md:py-16" id="features-overview">
                <div className="max-w-6xl mx-auto">
                    <div className="px-8 md-p-0">
                        <h1 className="text-primary text-xl font-mono border-b w-max">
                            Overview
                        </h1>
                        <h2 className="text-5xl font-heading py-6">
                            All features at a glance
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {featureCategories.map((cat) => (
                            <div
                                key={cat.id}
                                className="bg-white even:bg-gray-100 border-gray-200 p-6 hover:border-primary/30 transition-all cursor-pointer"
                                onClick={() => {
                                    setActiveTab(featureCategories.indexOf(cat));
                                    document.getElementById('all-features')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <cat.icon size={24} className="text-primary" />
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
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="features-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        See it all in action
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Start your 14-day free trial and experience every feature for yourself. No credit card required.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                            href="/sign-up"
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/pricing"
                        >
                            <span>View Pricing</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
