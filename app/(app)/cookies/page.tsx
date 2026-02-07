'use client';

import Link from "next/link";
import { ArrowRight, Cookie, BarChart3, Shield, Settings } from "lucide-react";

export default function CookiePolicyPage() {
    const lastUpdated = "January 15, 2026";

    const cookieTypes = [
        {
            id: "essential",
            icon: Shield,
            title: "Essential Cookies",
            required: true,
            description: "These cookies are strictly necessary for the operation of SwipyEat. They enable core functionality such as authentication, security, and session management. Without these cookies, the platform cannot function properly.",
            cookies: [
                { name: "__session", purpose: "Maintains your login session", duration: "Session", provider: "SwipyEat" },
                { name: "__csrf", purpose: "Protects against cross-site request forgery", duration: "Session", provider: "SwipyEat" },
                { name: "clerk_session", purpose: "Authentication via Clerk", duration: "7 days", provider: "Clerk" },
                { name: "device_id", purpose: "Identifies your device for security", duration: "1 year", provider: "SwipyEat" },
            ]
        },
        {
            id: "functional",
            icon: Settings,
            title: "Functional Cookies",
            required: false,
            description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and display configurations. They are not strictly necessary but improve your experience.",
            cookies: [
                { name: "locale", purpose: "Remembers your language preference", duration: "1 year", provider: "SwipyEat" },
                { name: "theme", purpose: "Stores your theme preference (light/dark)", duration: "1 year", provider: "SwipyEat" },
                { name: "sidebar_state", purpose: "Remembers sidebar open/closed state", duration: "30 days", provider: "SwipyEat" },
                { name: "recent_views", purpose: "Tracks recently viewed pages for quick access", duration: "30 days", provider: "SwipyEat" },
            ]
        },
        {
            id: "analytics",
            icon: BarChart3,
            title: "Analytics Cookies",
            required: false,
            description: "These cookies help us understand how visitors interact with our website and platform. They collect information about page views, traffic sources, and user behavior in an anonymized form to help us improve our service.",
            cookies: [
                { name: "_ga", purpose: "Google Analytics — distinguishes users", duration: "2 years", provider: "Google" },
                { name: "_ga_*", purpose: "Google Analytics — maintains session state", duration: "2 years", provider: "Google" },
                { name: "_gid", purpose: "Google Analytics — distinguishes users", duration: "24 hours", provider: "Google" },
                { name: "ph_*", purpose: "PostHog — product analytics", duration: "1 year", provider: "PostHog" },
            ]
        },
        {
            id: "marketing",
            icon: Cookie,
            title: "Marketing Cookies",
            required: false,
            description: "These cookies are used to track visitors across websites to display ads that are relevant and engaging. We use a minimal number of marketing cookies and only on our public website, not within the application.",
            cookies: [
                { name: "_fbp", purpose: "Facebook Pixel — ad measurement", duration: "3 months", provider: "Meta" },
                { name: "_gcl_au", purpose: "Google Ads — conversion tracking", duration: "3 months", provider: "Google" },
            ]
        },
    ];

    const sections = [
        {
            id: "what-are-cookies",
            title: "What Are Cookies?",
            text: "Cookies are small text files that are placed on your device when you visit a website or use an application. They are widely used to make websites work more efficiently, provide information to site owners, and enable certain features. Cookies can be \"persistent\" (remaining on your device for a set period) or \"session\" cookies (deleted when you close your browser)."
        },
        {
            id: "how-we-use",
            title: "How We Use Cookies",
            text: "SwipyEat uses cookies to authenticate users, maintain sessions, remember preferences, analyze usage patterns, and improve our platform. We categorize our cookies into four types: Essential, Functional, Analytics, and Marketing. You can manage your cookie preferences at any time."
        },
        {
            id: "third-party",
            title: "Third-Party Cookies",
            text: "Some cookies on our platform are set by third-party services that appear on our pages. We do not control these third-party cookies. The third parties include authentication providers (Clerk), analytics services (Google Analytics, PostHog), and advertising platforms (Meta, Google Ads). Each third party has its own privacy policy governing their use of cookies."
        },
        {
            id: "managing-cookies",
            title: "Managing Your Cookie Preferences",
            text: "You can control and manage cookies in several ways. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. You can also manage your preferences through our cookie consent banner. Note that disabling essential cookies may prevent you from using certain features of SwipyEat."
        },
        {
            id: "updates",
            title: "Updates to This Policy",
            text: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of significant changes by posting a notice on our platform. We encourage you to review this page periodically."
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="cookies-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Legal</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">Cookie Policy</h2>
                    <p className="text-xl text-white/80">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Intro Sections */}
            <div className="p-8 md:p-16" id="cookie-overview">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-black/70 mb-12">
                        This Cookie Policy explains how SwipyEat uses cookies and similar tracking technologies when you visit our website or use our platform. It describes what cookies are, why we use them, and your choices regarding their use.
                    </p>

                    <div className="space-y-10">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id}>
                                <h2 className="text-3xl font-heading mb-4">{section.title}</h2>
                                <p className="text-black/70 leading-relaxed">{section.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cookie Details */}
            <div className="p-8 md:p-16 bg-gray-50" id="cookie-details">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Cookie Details</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Cookies we use
                    </h2>

                    <div className="space-y-10">
                        {cookieTypes.map((type) => (
                            <div key={type.id} id={type.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="p-6 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/10 rounded-full p-2">
                                                <type.icon size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-heading">{type.title}</h3>
                                                {type.required && (
                                                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">Always Active</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-black/60 mt-3">{type.description}</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50 text-left">
                                                <th className="p-4 font-heading text-sm">Cookie Name</th>
                                                <th className="p-4 font-heading text-sm">Purpose</th>
                                                <th className="p-4 font-heading text-sm">Duration</th>
                                                <th className="p-4 font-heading text-sm">Provider</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {type.cookies.map((cookie, j) => (
                                                <tr key={j} className="border-t border-gray-100">
                                                    <td className="p-4 font-mono text-sm text-primary">{cookie.name}</td>
                                                    <td className="p-4 text-sm text-black/70">{cookie.purpose}</td>
                                                    <td className="p-4 text-sm text-black/50">{cookie.duration}</td>
                                                    <td className="p-4 text-sm text-black/50">{cookie.provider}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="p-8 md:p-16">
                <div className="max-w-4xl mx-auto">
                    <div className="border-2 border-gray-200 rounded-lg p-8">
                        <h3 className="text-2xl font-heading mb-4">Questions about cookies?</h3>
                        <p className="text-black/70 mb-6">
                            If you have any questions about how we use cookies, please contact our privacy team.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link
                                href="/company/contact"
                                className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 transition-all"
                            >
                                <span>Contact Us</span>
                                <ArrowRight size={20} />
                            </Link>
                            <a
                                href="mailto:privacy@swipyeat.com"
                                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold py-3 px-8 hover:bg-primary hover:text-white transition-all"
                            >
                                privacy@swipyeat.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
