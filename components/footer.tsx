import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const footerLinks = {
        Product: [
            { name: "Menu Builder", href: "/products#menu-builder" },
            { name: "POS System", href: "/products#pos-system" },
            { name: "KDS System", href: "/products#kds-system" },
            { name: "Pricing", href: "/pricing" },
            { name: "Features", href: "/features" }
        ],
        Company: [
            { name: "About Us", href: "/company/about" },
            { name: "Blog", href: "/company/blog" },
            { name: "Contact", href: "/company/contact" }
        ],
        Resources: [
            { name: "Documentation", href: "/docs" },
            { name: "Help Center", href: "/help" },
            { name: "Community", href: "/community" },
            { name: "Status", href: "/status" }
        ],
        Legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Security", href: "/security" }
        ]
    };

    const socialLinks = [
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-black text-white">
            <div className="p-8 md:p-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <Link href="/" className='flex mb-5 flex-1 items-center gap-1'>
                                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                                <span className='font-heading text-xl'>SwipyEat</span>
                            </Link>
                            <p className="text-white/80 mb-6 max-w-sm">
                                Bringing waiters, kitchen staff, and management together in one real-time system.
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

                        {/* Links Sections */}
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

                    {/* Newsletter Section */}
                    <div className="border-t border-white/20 pt-8 mb-8">
                        <div className="max-w-md">
                            <h3 className="font-heading text-xl mb-2">Stay updated</h3>
                            <p className="text-white/70 mb-4">
                                Subscribe to our newsletter for the latest updates and features.
                            </p>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-white/10 rounded px-4 py-3 flex items-center gap-2">
                                    <Mail size={20} className="text-white/50" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="bg-transparent border-none outline-none text-white placeholder:text-white/50 w-full"
                                    />
                                </div>
                                <button className="bg-white text-primary px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {new Date().getFullYear()} SwipyEat. All rights reserved.
                        </p>
                        <p className="text-white/60 text-sm font-mono">
                            Made with love for restaurants worldwide
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
