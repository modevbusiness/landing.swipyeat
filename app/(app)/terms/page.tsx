import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TermsOfServicePage() {
    const lastUpdated = "January 15, 2026";

    const sections = [
        {
            id: "acceptance",
            title: "1. Acceptance of Terms",
            content: [
                {
                    subtitle: "Agreement",
                    text: "By accessing or using SwipyEat's platform, website, mobile applications, or any related services (collectively, \"the Service\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service."
                },
                {
                    subtitle: "Eligibility",
                    text: "You must be at least 18 years old and have the legal authority to enter into these terms on behalf of yourself or your organization. By creating an account, you represent that you meet these requirements."
                },
            ]
        },
        {
            id: "account",
            title: "2. Account & Registration",
            content: [
                {
                    subtitle: "Account Creation",
                    text: "To use SwipyEat, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
                },
                {
                    subtitle: "Account Security",
                    text: "You must notify us immediately of any unauthorized access to or use of your account. SwipyEat will not be liable for any loss or damage arising from your failure to maintain the security of your account."
                },
                {
                    subtitle: "Account Termination",
                    text: "You may close your account at any time. We reserve the right to suspend or terminate accounts that violate these terms, with or without notice."
                },
            ]
        },
        {
            id: "service-usage",
            title: "3. Use of the Service",
            content: [
                {
                    subtitle: "Permitted Use",
                    text: "SwipyEat grants you a non-exclusive, non-transferable, revocable license to access and use the Service for your restaurant management operations in accordance with these terms and your subscription plan."
                },
                {
                    subtitle: "Prohibited Use",
                    text: "You may not: (a) reverse engineer, decompile, or disassemble the Service; (b) use the Service for any illegal purpose; (c) attempt to gain unauthorized access to our systems; (d) resell or redistribute the Service without written consent; (e) use automated bots or scrapers to extract data from the Service."
                },
                {
                    subtitle: "Data Accuracy",
                    text: "You are responsible for the accuracy and legality of all data you input into the Service, including menu items, pricing, tax information, and customer data."
                },
            ]
        },
        {
            id: "subscriptions",
            title: "4. Subscriptions & Billing",
            content: [
                {
                    subtitle: "Plans & Pricing",
                    text: "SwipyEat offers multiple subscription plans with different features and pricing. Current pricing is available on our Pricing page. We reserve the right to modify pricing with 30 days' notice."
                },
                {
                    subtitle: "Billing Cycle",
                    text: "Subscriptions are billed monthly or annually based on your chosen billing cycle. Payments are due at the beginning of each billing period and are processed automatically via your selected payment method."
                },
                {
                    subtitle: "Free Trial",
                    text: "New accounts may be eligible for a 14-day free trial. At the end of the trial period, you will be charged for your selected plan unless you cancel before the trial expires."
                },
                {
                    subtitle: "Refunds",
                    text: "Monthly subscriptions are non-refundable. Annual subscriptions may be eligible for a prorated refund within the first 30 days. Contact our support team for refund requests."
                },
            ]
        },
        {
            id: "intellectual-property",
            title: "5. Intellectual Property",
            content: [
                {
                    subtitle: "Our Property",
                    text: "The SwipyEat platform, including all software, designs, logos, trademarks, and content, is owned by SwipyEat and protected by intellectual property laws. Nothing in these terms grants you ownership rights to our intellectual property."
                },
                {
                    subtitle: "Your Content",
                    text: "You retain ownership of all data and content you upload to SwipyEat (menus, images, etc.). By uploading content, you grant us a limited license to use, store, and process it as necessary to provide the Service."
                },
                {
                    subtitle: "Feedback",
                    text: "Any feedback, suggestions, or ideas you provide about the Service may be used by SwipyEat without obligation to you. We may incorporate your feedback into our products without compensation."
                },
            ]
        },
        {
            id: "liability",
            title: "6. Limitation of Liability",
            content: [
                {
                    subtitle: "Service Availability",
                    text: "We strive for 99.9% uptime but do not guarantee uninterrupted access. SwipyEat is not liable for losses resulting from service interruptions, data loss, or technical failures beyond our reasonable control."
                },
                {
                    subtitle: "Damages Cap",
                    text: "To the maximum extent permitted by law, SwipyEat's total liability to you for any claims arising from these terms or the Service shall not exceed the total fees you paid to SwipyEat in the 12 months preceding the claim."
                },
                {
                    subtitle: "Indirect Damages",
                    text: "SwipyEat shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of revenue, profits, data, or business opportunities."
                },
            ]
        },
        {
            id: "termination",
            title: "7. Termination",
            content: [
                {
                    subtitle: "By You",
                    text: "You may cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period."
                },
                {
                    subtitle: "By Us",
                    text: "We may suspend or terminate your account if you violate these terms, fail to pay fees, or if we reasonably believe your use poses a risk to our platform or other users. We will provide 30 days' notice for terminations not related to violations."
                },
                {
                    subtitle: "Effect of Termination",
                    text: "Upon termination, your right to use the Service ceases immediately. You may request a data export within 30 days of termination. After 30 days, your data may be permanently deleted."
                },
            ]
        },
        {
            id: "governing-law",
            title: "8. Governing Law & Disputes",
            content: [
                {
                    subtitle: "Governing Law",
                    text: "These terms shall be governed by and construed in accordance with the laws of France, without regard to conflict of law provisions."
                },
                {
                    subtitle: "Dispute Resolution",
                    text: "Any disputes arising from these terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Paris, France."
                },
            ]
        },
        {
            id: "changes",
            title: "9. Changes to These Terms",
            content: [
                {
                    subtitle: "Modifications",
                    text: "We may update these Terms of Service from time to time. Material changes will be communicated via email or a prominent notice on the platform at least 30 days before they take effect. Continued use of the Service after changes constitutes acceptance."
                },
            ]
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="terms-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Legal</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">Terms of Service</h2>
                    <p className="text-xl text-white/80">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </div>

            {/* Quick Nav */}
            <div className="bg-gray-50 p-8" id="terms-nav">
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
                        Welcome to SwipyEat. These Terms of Service govern your access to and use of our restaurant management platform. Please read them carefully before using our services.
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
                        <h3 className="text-2xl font-heading mb-4">Questions about these terms?</h3>
                        <p className="text-black/70 mb-6">
                            If you have any questions about these Terms of Service, please contact our legal team.
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
                                href="mailto:legal@swipyeat.com"
                                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold py-3 px-8 hover:bg-primary hover:text-white transition-all"
                            >
                                legal@swipyeat.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
