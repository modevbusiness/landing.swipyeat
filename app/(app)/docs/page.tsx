'use client';

import { ArrowRight, Book, Code, Zap, Settings, Database, Shield, Monitor, Tablet, CookingPot, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DocsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const gettingStarted = [
        {
            title: "Quick Start Guide",
            description: "Get your restaurant up and running with SwipyEat in under 10 minutes.",
            icon: Zap,
            time: "10 min read",
        },
        {
            title: "Account Setup",
            description: "Create your account, configure your restaurant profile, and invite your team.",
            icon: Settings,
            time: "5 min read",
        },
        {
            title: "First Menu",
            description: "Build your first digital menu with categories, items, modifiers, and images.",
            icon: Book,
            time: "8 min read",
        },
    ];

    const docCategories = [
        {
            id: "menu-builder",
            icon: Tablet,
            title: "Menu Builder",
            description: "Learn how to create, customize, and manage your digital menus.",
            articles: [
                { title: "Creating your first menu", time: "5 min" },
                { title: "Adding categories and items", time: "4 min" },
                { title: "Setting up modifiers and extras", time: "6 min" },
                { title: "Adding images and descriptions", time: "3 min" },
                { title: "Multi-language menus", time: "5 min" },
                { title: "QR code generation", time: "3 min" },
                { title: "Dietary labels and allergens", time: "4 min" },
                { title: "Menu scheduling and availability", time: "5 min" },
            ]
        },
        {
            id: "pos-system",
            icon: Monitor,
            title: "POS System",
            description: "Everything about order processing, payments, and sales management.",
            articles: [
                { title: "POS interface overview", time: "6 min" },
                { title: "Taking orders", time: "4 min" },
                { title: "Processing payments", time: "5 min" },
                { title: "Split bills and tips", time: "4 min" },
                { title: "Refunds and voids", time: "3 min" },
                { title: "End-of-day reports", time: "5 min" },
                { title: "Connecting payment terminals", time: "7 min" },
                { title: "Offline mode", time: "4 min" },
            ]
        },
        {
            id: "kds-system",
            icon: CookingPot,
            title: "KDS System",
            description: "Configure and optimize your kitchen display for maximum efficiency.",
            articles: [
                { title: "KDS setup and configuration", time: "8 min" },
                { title: "Station routing", time: "5 min" },
                { title: "Order priority and color coding", time: "4 min" },
                { title: "Course firing", time: "5 min" },
                { title: "Prep time tracking", time: "3 min" },
                { title: "Customizing the display layout", time: "6 min" },
                { title: "Kitchen printer integration", time: "5 min" },
                { title: "Performance analytics", time: "4 min" },
            ]
        },
        {
            id: "management",
            icon: Database,
            title: "Management & Analytics",
            description: "Reports, inventory, staff management, and business insights.",
            articles: [
                { title: "Dashboard overview", time: "5 min" },
                { title: "Sales reports and exports", time: "6 min" },
                { title: "Inventory management", time: "7 min" },
                { title: "Staff accounts and permissions", time: "5 min" },
                { title: "Multi-location management", time: "6 min" },
                { title: "Customer insights", time: "4 min" },
                { title: "Loyalty program setup", time: "5 min" },
                { title: "Tax configuration", time: "4 min" },
            ]
        },
        {
            id: "integrations",
            icon: Code,
            title: "API & Integrations",
            description: "Connect SwipyEat with your existing tools and build custom integrations.",
            articles: [
                { title: "API overview and authentication", time: "8 min" },
                { title: "REST API reference", time: "15 min" },
                { title: "Webhooks", time: "6 min" },
                { title: "Third-party integrations", time: "5 min" },
                { title: "Zapier integration", time: "4 min" },
                { title: "Delivery platform connections", time: "6 min" },
                { title: "Accounting software sync", time: "5 min" },
                { title: "Rate limits and best practices", time: "4 min" },
            ]
        },
        {
            id: "security-docs",
            icon: Shield,
            title: "Security & Compliance",
            description: "Data protection, user permissions, and compliance documentation.",
            articles: [
                { title: "Security overview", time: "5 min" },
                { title: "Two-factor authentication", time: "3 min" },
                { title: "Role-based access control", time: "5 min" },
                { title: "Data export and portability", time: "4 min" },
                { title: "GDPR compliance", time: "6 min" },
                { title: "PCI DSS compliance", time: "5 min" },
                { title: "Audit logs", time: "4 min" },
                { title: "SSO configuration (Enterprise)", time: "8 min" },
            ]
        },
    ];

    const filteredCategories = searchQuery
        ? docCategories.map(cat => ({
            ...cat,
            articles: cat.articles.filter(a =>
                a.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(cat => cat.articles.length > 0 || cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : docCategories;

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="docs-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Documentation</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Learn how to use <br /> every feature
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Comprehensive guides, tutorials, and API references to help you get the most out of SwipyEat.
                    </p>

                    {/* Search */}
                    <div className="max-w-xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-4 flex items-center gap-3 border border-white/20">
                            <Search size={20} className="text-white/50" />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Getting Started */}
            <div className="p-8 md:p-16 bg-gray-50" id="getting-started">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Getting Started</h1>
                    <h2 className="text-5xl font-heading py-6">
                        New to SwipyEat?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {gettingStarted.map((guide, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-primary/10 rounded-full p-3">
                                        <guide.icon size={24} className="text-primary" />
                                    </div>
                                    <span className="text-sm text-black/40">{guide.time}</span>
                                </div>
                                <h3 className="text-xl font-heading mb-2">{guide.title}</h3>
                                <p className="text-black/60 mb-4">{guide.description}</p>
                                <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-3 transition-all">
                                    Read guide <ArrowRight size={16} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Doc Categories */}
            <div className="p-8 md:p-16" id="all-docs">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">All Documentation</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Browse by product
                    </h2>

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-2xl text-black/40 mb-2">No results found</p>
                            <p className="text-black/30">Try a different search term</p>
                        </div>
                    )}

                    <div className="space-y-10 mt-4">
                        {filteredCategories.map((cat) => (
                            <div key={cat.id} id={cat.id} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary/20 transition-colors">
                                <div className="p-6 bg-gray-50 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 rounded-full p-2">
                                            <cat.icon size={22} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-heading">{cat.title}</h3>
                                            <p className="text-black/50">{cat.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {cat.articles.map((article, j) => (
                                        <div
                                            key={j}
                                            className="p-5 border-b border-r border-gray-100 hover:bg-gray-50 cursor-pointer group flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Book size={16} className="text-primary/40" />
                                                <span className="text-black/80 group-hover:text-primary transition-colors">{article.title}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-black/30">{article.time}</span>
                                                <ArrowRight size={14} className="text-black/20 group-hover:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="docs-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Can't find what you need?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Our support team is here to help. Reach out and we'll get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                            href="/help"
                        >
                            <span>Visit Help Center</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/company/contact"
                        >
                            <span>Contact Support</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
