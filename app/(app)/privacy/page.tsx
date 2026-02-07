import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 15, 2026";

    const sections = [
        {
            id: "information-we-collect",
            title: "1. Information We Collect",
            content: [
                {
                    subtitle: "Account Information",
                    text: "When you create a SwipyEat account, we collect your name, email address, phone number, restaurant name, and billing information. This information is necessary to provide our services and process payments."
                },
                {
                    subtitle: "Usage Data",
                    text: "We automatically collect information about how you interact with our platform, including pages visited, features used, order volumes, device information, IP addresses, and browser type. This helps us improve our products and provide better support."
                },
                {
                    subtitle: "Restaurant Data",
                    text: "We store menu items, pricing, order history, customer transactions, staff information, and inventory data that you input into our system. This data is essential for the operation of our services."
                },
                {
                    subtitle: "Customer Data",
                    text: "When your restaurant's customers place orders or make reservations through SwipyEat, we may collect their names, contact information, order preferences, and payment details on your behalf."
                },
            ]
        },
        {
            id: "how-we-use",
            title: "2. How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to operate and maintain the SwipyEat platform, process orders and payments, provide customer support, and deliver the features you've subscribed to."
                },
                {
                    subtitle: "Improvement & Analytics",
                    text: "We analyze usage patterns to improve our products, develop new features, optimize performance, and provide you with insights and analytics about your restaurant's operations."
                },
                {
                    subtitle: "Communication",
                    text: "We may send you service updates, security alerts, billing information, and marketing communications (which you can opt out of at any time). We will never sell your email address to third parties."
                },
            ]
        },
        {
            id: "data-sharing",
            title: "3. Data Sharing & Third Parties",
            content: [
                {
                    subtitle: "Service Providers",
                    text: "We share data with trusted third-party providers who help us operate our platform, including payment processors (Stripe), cloud infrastructure (AWS), email services, and analytics tools. These providers are contractually obligated to protect your data."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose your information if required by law, regulation, legal process, or governmental request. We will notify you of such requests unless prohibited by law."
                },
                {
                    subtitle: "No Selling of Data",
                    text: "We do not sell, rent, or trade your personal information to third parties for their marketing purposes. Your data is yours — we simply help you manage it."
                },
            ]
        },
        {
            id: "data-security",
            title: "4. Data Security",
            content: [
                {
                    subtitle: "Encryption",
                    text: "All data transmitted between your devices and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256 encryption. Payment information is processed in PCI DSS Level 1 compliant environments."
                },
                {
                    subtitle: "Access Controls",
                    text: "We implement strict access controls, multi-factor authentication, and role-based permissions to ensure that only authorized personnel can access your data."
                },
            ]
        },
        {
            id: "your-rights",
            title: "5. Your Rights",
            content: [
                {
                    subtitle: "Access & Portability",
                    text: "You have the right to access, download, and export your data at any time through your account settings or by contacting our support team."
                },
                {
                    subtitle: "Correction & Deletion",
                    text: "You can update your personal information at any time. You may also request deletion of your account and associated data, which we will process within 30 days."
                },
                {
                    subtitle: "Consent Withdrawal",
                    text: "You can withdraw consent for marketing communications at any time. For EU residents, you have additional rights under GDPR including the right to object to processing and the right to lodge a complaint with a supervisory authority."
                },
            ]
        },
        {
            id: "data-retention",
            title: "6. Data Retention",
            content: [
                {
                    subtitle: "Active Accounts",
                    text: "We retain your data for as long as your account is active and as needed to provide our services. Transaction data is retained for a minimum of 7 years for tax and legal compliance."
                },
                {
                    subtitle: "Deleted Accounts",
                    text: "When you delete your account, we will remove your personal data within 30 days. Some data may be retained in anonymized form for analytics or as required by law."
                },
            ]
        },
        {
            id: "cookies",
            title: "7. Cookies",
            content: [
                {
                    subtitle: "Cookie Usage",
                    text: "We use cookies and similar technologies for authentication, preferences, analytics, and security. For detailed information about our cookie practices, please see our Cookie Policy."
                },
            ]
        },
        {
            id: "changes",
            title: "8. Changes to This Policy",
            content: [
                {
                    subtitle: "Updates",
                    text: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through a notice on our platform. Your continued use of SwipyEat after changes constitutes acceptance of the updated policy."
                },
            ]
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="privacy-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Legal</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">Privacy Policy</h2>
                    <p className="text-xl text-white/80">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Quick Nav */}
            <div className="bg-gray-50 p-8" id="privacy-nav">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-heading text-lg mb-4">On this page</h3>
                    <div className="flex flex-wrap gap-2">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="text-sm px-4 py-2 border-2 border-gray-200 rounded-full hover:border-primary/30 hover:text-primary transition-colors"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-16">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-black/70 mb-12">
                        At SwipyEat, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your information when you use our restaurant management platform. By using SwipyEat, you agree to the practices described in this policy.
                    </p>

                    <div className="space-y-12">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id}>
                                <h2 className="text-3xl font-heading mb-6">{section.title}</h2>
                                <div className="space-y-6">
                                    {section.content.map((item, j) => (
                                        <div key={j} className="border-l-4 border-primary/20 pl-6">
                                            <h3 className="font-heading text-xl mb-2">{item.subtitle}</h3>
                                            <p className="text-black/70 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="mt-16 border-2 border-gray-200 rounded-lg p-8">
                        <h3 className="text-2xl font-heading mb-4">Questions about your privacy?</h3>
                        <p className="text-black/70 mb-6">
                            If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
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
