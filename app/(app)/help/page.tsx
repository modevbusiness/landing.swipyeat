'use client';

import { ArrowRight, Search, HelpCircle, MessageSquare, Book, CreditCard, Settings, Users, Monitor, Tablet, CookingPot, BarChart3, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const popularArticles = [
        { title: "How to reset my password", category: "Account", views: "12.4k" },
        { title: "Setting up your first menu", category: "Menu Builder", views: "9.8k" },
        { title: "Processing a refund", category: "Payments", views: "8.2k" },
        { title: "Adding staff members", category: "Team", views: "7.5k" },
        { title: "Connecting a payment terminal", category: "POS", views: "6.9k" },
        { title: "Enabling two-factor authentication", category: "Security", views: "5.3k" },
    ];

    const categories = [
        {
            icon: Settings,
            title: "Account & Billing",
            description: "Manage your account, subscription, invoices, and payment methods.",
            articleCount: 24,
            topArticles: [
                "How to change your subscription plan",
                "Updating billing information",
                "Downloading invoices",
                "Canceling your subscription",
            ]
        },
        {
            icon: Tablet,
            title: "Menu Builder",
            description: "Create, edit, and manage your digital menus across all channels.",
            articleCount: 32,
            topArticles: [
                "Creating menu categories",
                "Adding modifier groups",
                "Uploading menu images",
                "Setting up seasonal menus",
            ]
        },
        {
            icon: Monitor,
            title: "POS System",
            description: "Order taking, payment processing, and sales management.",
            articleCount: 28,
            topArticles: [
                "Taking your first order",
                "Split bill and tip management",
                "End-of-day cash reconciliation",
                "POS device requirements",
            ]
        },
        {
            icon: CookingPot,
            title: "Kitchen Display (KDS)",
            description: "Kitchen workflow, order routing, and preparation tracking.",
            articleCount: 18,
            topArticles: [
                "Setting up kitchen stations",
                "Customizing order display",
                "Using course firing",
                "KDS troubleshooting",
            ]
        },
        {
            icon: Users,
            title: "Team Management",
            description: "Staff accounts, roles, permissions, and scheduling.",
            articleCount: 15,
            topArticles: [
                "Inviting team members",
                "Setting up role permissions",
                "Clock-in and clock-out",
                "Staff performance reports",
            ]
        },
        {
            icon: CreditCard,
            title: "Payments",
            description: "Payment methods, terminals, refunds, and payouts.",
            articleCount: 20,
            topArticles: [
                "Supported payment methods",
                "Connecting card readers",
                "Processing refunds",
                "Payout schedules",
            ]
        },
        {
            icon: BarChart3,
            title: "Reports & Analytics",
            description: "Sales data, insights, exports, and business intelligence.",
            articleCount: 16,
            topArticles: [
                "Understanding your dashboard",
                "Exporting sales reports",
                "Revenue by time period",
                "Best-selling items report",
            ]
        },
        {
            icon: ShieldCheck,
            title: "Security & Privacy",
            description: "Account security, data protection, and compliance.",
            articleCount: 12,
            topArticles: [
                "Enabling two-factor authentication",
                "Managing API keys",
                "Data export requests",
                "GDPR compliance FAQ",
            ]
        },
    ];

    const filteredCategories = searchQuery
        ? categories.filter(cat =>
            cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.topArticles.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : categories;

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="help-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Help Center</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        How can we <br /> help you?
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Search our knowledge base or browse by category to find answers to your questions.
                    </p>

                    {/* Search */}
                    <div className="max-w-xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-4 flex items-center gap-3 border border-white/20">
                            <Search size={20} className="text-white/50" />
                            <input
                                type="text"
                                placeholder="Search for help articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Articles */}
            <div className="p-8 md:p-16 bg-gray-50" id="popular">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Popular Articles</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Most viewed
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {popularArticles.map((article, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <HelpCircle size={18} className="text-primary mt-0.5 shrink-0" />
                                        <div>
                                            <h3 className="font-heading group-hover:text-primary transition-colors">{article.title}</h3>
                                            <p className="text-sm text-black/40 mt-1">{article.category}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-black/30 shrink-0">{article.views} views</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="p-8 md:p-16" id="categories">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Browse by Category</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Find what you need
                    </h2>

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-2xl text-black/40 mb-2">No results found</p>
                            <p className="text-black/30">Try a different search term</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {filteredCategories.map((cat, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary/10 rounded-full p-3">
                                        <cat.icon size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading">{cat.title}</h3>
                                        <p className="text-sm text-black/40">{cat.articleCount} articles</p>
                                    </div>
                                </div>
                                <p className="text-black/60 mb-4">{cat.description}</p>
                                <ul className="space-y-2">
                                    {cat.topArticles.map((article, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-black/70 hover:text-primary cursor-pointer transition-colors">
                                            <Book size={14} className="shrink-0" />
                                            <span>{article}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-primary font-medium text-sm mt-4 flex items-center gap-1">
                                    View all {cat.articleCount} articles <ArrowRight size={14} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Support */}
            <div className="p-8 md:p-16 bg-gray-50" id="support-options">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Still Need Help?</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Talk to our team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-4 w-max mx-auto mb-4">
                                <MessageSquare size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">Live Chat</h3>
                            <p className="text-black/60 mb-4">Chat with our support team in real-time. Available Mon–Fri, 9AM–6PM CET.</p>
                            <button className="bg-primary text-white font-semibold py-3 px-6 hover:bg-primary/90 transition-colors w-full">
                                Start Chat
                            </button>
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-4 w-max mx-auto mb-4">
                                <Zap size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">Email Support</h3>
                            <p className="text-black/60 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                            <a href="mailto:support@swipyeat.com" className="block bg-primary text-white font-semibold py-3 px-6 hover:bg-primary/90 transition-colors w-full text-center">
                                Email Us
                            </a>
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                            <div className="bg-primary/10 rounded-full p-4 w-max mx-auto mb-4">
                                <Book size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-heading mb-2">Documentation</h3>
                            <p className="text-black/60 mb-4">Browse our comprehensive docs with step-by-step guides and tutorials.</p>
                            <Link href="/docs" className="block bg-primary text-white font-semibold py-3 px-6 hover:bg-primary/90 transition-colors w-full text-center">
                                View Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
