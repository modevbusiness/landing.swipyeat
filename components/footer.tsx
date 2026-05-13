'use client'

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
    const { t } = useLanguage()
    const fl = t.footer.links

    const footerLinks = {
        [t.footer.categories.Product]: [
            { name: fl.menuBuilder, href: "/products#menu-builder" },
            { name: fl.posSystem, href: "/products#pos-system" },
            { name: fl.kdsSystem, href: "/products#kds-system" },
            { name: fl.pricing, href: "/pricing" },
            { name: fl.features, href: "/features" }
        ],
        [t.footer.categories.Company]: [
            { name: fl.aboutUs, href: "/company/about" },
            { name: fl.contact, href: "/company/contact" }
        ],
        [t.footer.categories.Resources]: [
            { name: fl.community, href: "/community" },
            { name: fl.status, href: "/status" }
        ],
        [t.footer.categories.Legal]: [
            { name: fl.privacyPolicy, href: "/privacy" },
            { name: fl.termsOfService, href: "/terms" },
            { name: fl.cookiePolicy, href: "/cookies" },
            { name: fl.security, href: "/security" }
        ]
    };

    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com/swipy.eat", label: "Instagram" },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="p-8 md:p-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <Link href="/" className='flex mb-5 flex-1 items-center gap-1'>
                                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                                <span className='font-heading text-xl'>SwipyEat</span>
                            </Link>
                            <p className="text-white/80 mb-6 max-w-sm">
                                {t.footer.tagline}
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-heading text-lg mb-4">{category}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-white/70 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-white/20 pt-8 mb-8">
                        <div className="max-w-md">
                            <h3 className="font-heading text-xl mb-2">{t.footer.newsletter.title}</h3>
                            <p className="text-white/70 mb-4">
                                {t.footer.newsletter.subtitle}
                            </p>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-white/10 rounded px-4 py-3 flex items-center gap-2">
                                    <Mail size={20} className="text-white/50" />
                                    <input
                                        type="email"
                                        placeholder={t.footer.newsletter.placeholder}
                                        className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full"
                                    />
                                </div>
                                <button className="bg-white text-primary px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
                                    {t.footer.newsletter.button}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} SwipyEat. {t.footer.copyright}
                        </p>
                        <p className="text-white/60 text-sm font-mono">
                            {t.footer.madeWith}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
