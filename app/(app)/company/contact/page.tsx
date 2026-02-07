'use client';

import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, Building } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FAQ from "@/components/faq";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "general",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Our team typically responds within 24 hours.",
            value: "hello@swipyeat.com",
            href: "mailto:hello@swipyeat.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Mon-Fri, 9AM to 6PM (CET).",
            value: "+1 (555) 123-4567",
            href: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "Our headquarters in Paris.",
            value: "42 Rue de la Tech, 75001 Paris, France",
            href: "#",
        },
        {
            icon: Clock,
            title: "Business Hours",
            description: "We're available during these times.",
            value: "Mon–Fri: 9AM–6PM CET",
            href: "#",
        },
    ];

    const departments = [
        {
            icon: HelpCircle,
            title: "Customer Support",
            description: "Need help with your account or have a technical question?",
            email: "support@swipyeat.com",
        },
        {
            icon: Building,
            title: "Sales",
            description: "Interested in SwipyEat for your restaurant? Let's talk.",
            email: "sales@swipyeat.com",
        },
        {
            icon: MessageSquare,
            title: "Press & Media",
            description: "Journalist or blogger? Get press kits and media inquiries.",
            email: "press@swipyeat.com",
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="contact-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Contact</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        We'd love to <br /> hear from you
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Whether you have a question about our products, pricing, or anything else — our team is ready to help.
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div id="contact-info">
                <div className="w-full">
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {contactInfo.map((info, i) => (
                            <a
                                key={i}
                                href={info.href}
                                className="p-6 transition-all even:bg-gray-100 py-12 block"
                            >
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <info.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-heading mb-1">{info.title}</h3>
                                <p className="text-black/50 text-sm mb-3">{info.description}</p>
                                <p className="text-primary font-medium text-sm">{info.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form + Departments */}
            <div className="p-8 md:p-16 bg-gray-50" id="contact-form">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Form */}
                        <div className="flex-1">
                            <h1 className="text-primary text-xl font-mono border-b w-max">Send a Message</h1>
                            <h2 className="text-4xl font-heading py-6">
                                Get in touch
                            </h2>

                            {submitted ? (
                                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 text-center">
                                    <div className="bg-primary/10 rounded-full p-4 w-max mx-auto mb-4">
                                        <Mail size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-heading mb-2">Message Sent!</h3>
                                    <p className="text-black/60 mb-6">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "general", message: "" }); }}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-2">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                                placeholder="john@restaurant.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">Restaurant / Company</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                            placeholder="Your Restaurant Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">Subject *</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors bg-white"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="demo">Request a Demo</option>
                                            <option value="support">Technical Support</option>
                                            <option value="sales">Sales & Pricing</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="press">Press & Media</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">Message *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 text-lg hover:bg-primary/90 transition-all"
                                    >
                                        <span>Send Message</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Departments Sidebar */}
                        <div className="lg:w-96 space-y-6">
                            <h1 className="text-primary text-xl font-mono border-b w-max">Departments</h1>
                            <h2 className="text-3xl font-heading">
                                Reach the right team
                            </h2>

                            <div className="space-y-4">
                                {departments.map((dept, i) => (
                                    <a
                                        key={i}
                                        href={`mailto:${dept.email}`}
                                        className="block border-2 border-gray-200 bg-white rounded-lg p-5 hover:border-primary/30 hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                                                <dept.icon size={18} className="text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-lg">{dept.title}</h3>
                                                <p className="text-black/50 text-sm mb-2">{dept.description}</p>
                                                <p className="text-primary font-medium text-sm">{dept.email}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <FAQ />

            {/* Map / CTA */}
            <div className="bg-primary p-8 md:p-16" id="contact-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Ready to get started?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Start your 14-day free trial today, or schedule a demo with our sales team.
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
