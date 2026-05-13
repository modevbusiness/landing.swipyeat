'use client';

import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, Building } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FAQ from "@/components/faq";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const infoIcons = [Mail, Phone, MapPin, Clock];
const infoHrefs = ["mailto:swipyeat@gmail.com", "tel:+15551234567", "#", "#"];
const deptIcons = [HelpCircle, Building, MessageSquare];

export default function ContactPage() {
    const { t } = useLanguage()
    const cp = t.contactPage

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
        setSubmitted(true);
    };

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="contact-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">{cp.label}</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        {cp.title}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {cp.subtitle}
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div id="contact-info">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {cp.info.map((info, i) => {
                            const Icon = infoIcons[i]
                            return (
                                <a
                                    key={i}
                                    href={infoHrefs[i]}
                                    className="p-6 transition-all even:bg-gray-100 py-12 block"
                                >
                                    <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                        <Icon size={24} className="text-primary" />
                                    </div>
                                    <h3 className="text-lg font-heading mb-1">{info.title}</h3>
                                    <p className="text-black/50 text-sm mb-3">{info.description}</p>
                                    <p className="text-primary font-medium text-sm">{info.value}</p>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Contact Form + Departments */}
            <div className="p-8 md:p-16 bg-gray-50" id="contact-form">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Form */}
                        <div className="flex-1">
                            <h1 className="text-primary text-xl font-mono border-b w-max">{cp.form.label}</h1>
                            <h2 className="text-4xl font-heading py-6">
                                {cp.form.title}
                            </h2>

                            {submitted ? (
                                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 text-center">
                                    <div className="bg-primary/10 rounded-full p-4 w-max mx-auto mb-4">
                                        <Mail size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-heading mb-2">{cp.form.successTitle}</h3>
                                    <p className="text-black/60 mb-6">
                                        {cp.form.successMsg}
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", subject: "general", message: "" }); }}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        {cp.form.sendAnother}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-2">{cp.form.fullName}</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                                placeholder={cp.form.namePlaceholder}
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-2">{cp.form.email}</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                                placeholder={cp.form.emailPlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">{cp.form.company}</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors"
                                            placeholder={cp.form.companyPlaceholder}
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">{cp.form.subject}</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors bg-white"
                                        >
                                            {cp.form.subjectOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-2">{cp.form.message}</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full border-2 border-gray-200 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors resize-none"
                                            placeholder={cp.form.messagePlaceholder}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 text-lg hover:bg-primary/90 transition-all"
                                    >
                                        <span>{cp.form.submit}</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Departments Sidebar */}
                        <div className="lg:w-96 space-y-6">
                            <h1 className="text-primary text-xl font-mono border-b w-max">{cp.departments.label}</h1>
                            <h2 className="text-3xl font-heading">
                                {cp.departments.title}
                            </h2>

                            <div className="space-y-4">
                                {cp.departments.items.map((dept, i) => {
                                    const Icon = deptIcons[i]
                                    return (
                                        <a
                                            key={i}
                                            href={`mailto:${dept.email}`}
                                            className="block border-2 border-gray-200 bg-white rounded-lg p-5 hover:border-primary/30 hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="bg-primary/10 rounded-full p-2 mt-0.5">
                                                    <Icon size={18} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-lg">{dept.title}</h3>
                                                    <p className="text-black/50 text-sm mb-2">{dept.description}</p>
                                                    <p className="text-primary font-medium text-sm">{dept.email}</p>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
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
                        {cp.ctaTitle}
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        {cp.ctaSubtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                            href="/sign-up"
                        >
                            <span>{cp.startTrial}</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/pricing"
                        >
                            <span>{cp.viewPricing}</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
