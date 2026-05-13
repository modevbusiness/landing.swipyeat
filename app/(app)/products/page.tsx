'use client';

import { ArrowRight, Check, Utensils, MonitorSmartphone, CookingPot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const productIcons = [Utensils, MonitorSmartphone, CookingPot];
const productImages = ["/menuItems.png", "/analyticsDashboard.png", "/kds.png"];

export default function ProductsPage() {
    const { t } = useLanguage();
    const pp = t.productsPage;

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="products-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">{pp.heroLabel}</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        {pp.heroTitle}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {pp.heroSubtitle}
                    </p>
                </div>
            </div>

            {/* Quick Nav */}
            <div className="bg-white border-b z-40" id="product-nav">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-2">
                    {pp.products.map((product, i) => {
                        const Icon = productIcons[i];
                        return (
                            <a
                                key={product.id}
                                href={`#${product.id}`}
                                className="flex items-center gap-2 px-6 py-4 font-medium text-white hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
                            >
                                <Icon size={18} />
                                <span>{product.title}</span>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Product Sections */}
            {pp.products.map((product, index) => {
                const Icon = productIcons[index];
                return (
                    <div key={product.id}>
                        <div
                            className={`p-8 md:p-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                            id={product.id}
                        >
                            <div className="max-w-6xl mx-auto">
                                <div className={`flex flex-col gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/10 rounded-full p-3">
                                                <Icon size={32} className="text-primary" />
                                            </div>
                                        </div>
                                        <h1 className="text-primary text-xl font-mono border-b w-max">
                                            {product.title}
                                        </h1>
                                        <h2 className="text-4xl md:text-5xl font-heading">
                                            {product.tagline}
                                        </h2>
                                        <p className="text-xl text-black/70 leading-relaxed">
                                            {product.heroDescription}
                                        </p>
                                        <Link
                                            className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 text-lg hover:bg-primary/90 transition-all"
                                            href="/sign-up"
                                        >
                                            <span>{pp.tryFree(product.title)}</span>
                                            <ArrowRight size={20} />
                                        </Link>
                                    </div>
                                    <div className="flex-1 bg-gray-50 max-h-[400px] overflow-hidden">
                                        <Image
                                            src={productImages[index]}
                                            alt={product.title}
                                            width={600}
                                            height={400}
                                            className="w-full mt-[60px] border-4 border-black h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                                    {product.stats.map((stat, j) => (
                                        <div key={j} className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
                                            <h3 className="text-4xl font-heading text-primary mb-2">{stat.value}</h3>
                                            <p className="text-black/60">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature Grid */}
                                <div className="mt-16" id={`${product.id}-features`}>
                                    <h3 className="text-3xl font-heading mb-8">{pp.keyCapabilities}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {product.features.map((feature, j) => (
                                            <div key={j} className="even:bg-gray-100 p-6 transition-all">
                                                <div className="flex items-start gap-3 mb-3">
                                                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                                                        <Check size={16} className="text-primary" />
                                                    </div>
                                                    <h4 className="font-heading text-lg">{feature.title}</h4>
                                                </div>
                                                <p className="text-black/60 ml-8">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* How They Work Together */}
            <div className="bg-primary p-8 md:p-16" id="integration">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-white text-xl font-mono border-b border-white/30 w-max">
                        {pp.integrationLabel}
                    </h1>
                    <h2 className="text-5xl font-heading py-6 text-white">
                        {pp.integrationTitle}
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mb-12">
                        {pp.integrationSubtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pp.integrationSteps.map((s) => (
                            <div key={s.step} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <div className="text-5xl font-heading text-white mb-4">{s.step}</div>
                                <h3 className="text-xl font-heading text-white mb-2">{s.title}</h3>
                                <p className="text-white/70">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary p-8 md:p-16" id="products-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        {pp.ctaTitle}
                    </h2>
                    <p className="text-xl text-white mb-8">
                        {pp.ctaSubtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-4 px-12 text-xl hover:bg-primary/90 transition-all"
                            href="/sign-up"
                        >
                            <span>{pp.startTrial}</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-primary text-primary font-semibold py-4 px-12 text-xl hover:bg-primary bg-white hover:text-white transition-all"
                            href="/pricing"
                        >
                            <span>{pp.viewPricing}</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
