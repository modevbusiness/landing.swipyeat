import Link from "next/link";
import { ArrowRight, Shield, Lock, Server, Eye, Key, RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";

export default function SecurityPage() {
    const lastUpdated = "January 15, 2026";

    const securityFeatures = [
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "All data transmitted between your devices and our servers is protected with TLS 1.3 encryption. Data at rest is encrypted using AES-256, the same standard used by banks and government agencies."
        },
        {
            icon: Key,
            title: "Authentication & Access Control",
            description: "Multi-factor authentication (MFA), role-based access controls (RBAC), and session management ensure that only authorized users can access your data. Support for SSO via SAML 2.0 for enterprise customers."
        },
        {
            icon: Server,
            title: "Infrastructure Security",
            description: "Our platform runs on AWS with redundant infrastructure across multiple availability zones. We maintain 99.9% uptime with automated failover, DDoS protection, and real-time monitoring."
        },
        {
            icon: Eye,
            title: "Monitoring & Detection",
            description: "24/7 security monitoring with automated threat detection. Our security team investigates alerts in real-time and responds to incidents within minutes, not hours."
        },
        {
            icon: RefreshCw,
            title: "Backups & Recovery",
            description: "Automated daily backups with point-in-time recovery capability. Your data is replicated across multiple geographic regions to ensure durability and availability."
        },
        {
            icon: AlertTriangle,
            title: "Vulnerability Management",
            description: "Regular penetration testing by independent security firms, automated vulnerability scanning, and a responsible disclosure program. We patch critical vulnerabilities within 24 hours."
        },
    ];

    const compliance = [
        {
            title: "PCI DSS Level 1",
            description: "Our payment processing meets the highest level of PCI DSS compliance, ensuring that all cardholder data is processed, stored, and transmitted securely.",
            status: "Certified"
        },
        {
            title: "GDPR Compliant",
            description: "Full compliance with the General Data Protection Regulation, including data minimization, right to erasure, data portability, and breach notification within 72 hours.",
            status: "Compliant"
        },
        {
            title: "SOC 2 Type II",
            description: "Our systems and processes have been audited by an independent firm against the Trust Services Criteria for security, availability, processing integrity, and confidentiality.",
            status: "Audited"
        },
        {
            title: "ISO 27001",
            description: "Our information security management system (ISMS) is certified against the ISO 27001 international standard, demonstrating our commitment to systematic security practices.",
            status: "Certified"
        },
    ];

    const practices = [
        {
            id: "data-protection",
            title: "Data Protection",
            items: [
                "AES-256 encryption for all data at rest",
                "TLS 1.3 for all data in transit",
                "Customer data isolation — your data is never mixed with other customers",
                "Automated key rotation and certificate management",
                "Secure data deletion when accounts are closed",
            ]
        },
        {
            id: "application-security",
            title: "Application Security",
            items: [
                "Secure development lifecycle (SDLC) with security reviews at every stage",
                "Automated code scanning and static analysis (SAST)",
                "Dynamic application security testing (DAST)",
                "Dependency scanning for known vulnerabilities",
                "Regular third-party penetration testing",
            ]
        },
        {
            id: "operational-security",
            title: "Operational Security",
            items: [
                "24/7 security operations center (SOC) monitoring",
                "Incident response plan with defined escalation procedures",
                "Regular security awareness training for all employees",
                "Background checks for all employees with data access",
                "Strict least-privilege access policies",
            ]
        },
        {
            id: "network-security",
            title: "Network Security",
            items: [
                "Web Application Firewall (WAF) protection",
                "DDoS mitigation with automatic traffic filtering",
                "Network segmentation and micro-segmentation",
                "Intrusion detection and prevention systems (IDS/IPS)",
                "VPN access required for all internal systems",
            ]
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="security-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Security</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Your data security <br /> is our top priority
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        SwipyEat is built with security at its core. We use industry-leading practices to protect your restaurant data, transactions, and customer information.
                    </p>
                </div>
            </div>

            {/* Security Features */}
            <div className="p-0 md:p-16" id="security-features">
                <div className="max-w-6xl mx-auto">
                    <div className="p-8 md:p-0">
                        <h1 className="text-primary text-xl font-mono border-b w-max">Security Infrastructure</h1>
                        <h2 className="text-5xl font-heading py-6">
                            Enterprise-grade security <br /> for every restaurant
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {securityFeatures.map((feature, i) => (
                            <div key={i} className="p-6 hover:border-primary/30 even:bg-gray-100 transition-all">
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <feature.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
                                <p className="text-black/60">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Compliance */}
            <div className="p-8 md:p-16 bg-gray-50" id="compliance">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Compliance</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Trusted certifications <br /> and standards
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {compliance.map((item, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 transition-all">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-heading">{item.title}</h3>
                                    <span className="flex items-center gap-1 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                                        <CheckCircle size={14} />
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-black/60">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Security Practices */}
            <div className="p-8 md:p-16" id="practices">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Security Practices</h1>
                    <h2 className="text-5xl font-heading py-6">
                        How we protect <br /> your data every day
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
                        {practices.map((practice) => (
                            <div key={practice.id} id={practice.id}>
                                <h3 className="text-2xl font-heading mb-4">{practice.title}</h3>
                                <ul className="space-y-3">
                                    {practice.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                                                <Shield size={14} className="text-primary" />
                                            </div>
                                            <span className="text-black/70">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Report a Vulnerability */}
            <div className="bg-primary p-8 md:p-16" id="report">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Found a vulnerability?
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        We take security reports seriously. If you've discovered a security vulnerability, please report it responsibly. We offer a bug bounty program for qualifying reports.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="mailto:security@swipyeat.com"
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                        >
                            <span>Report a Vulnerability</span>
                            <ArrowRight size={24} />
                        </a>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/company/contact"
                        >
                            <span>Contact Security Team</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                    <p className="text-white/60 mt-6 text-sm">
                        security@swipyeat.com · PGP key available upon request
                    </p>
                </div>
            </div>
        </div>
    );
}
