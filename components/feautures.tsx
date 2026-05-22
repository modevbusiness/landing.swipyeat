'use client';

import { useState } from "react";
import Image from "next/image";
import { Zap, Monitor, BarChart3, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const featureIcons = [Zap, Monitor, BarChart3, LayoutGrid];
const featureImages = ["/orders.png", "/kds.png", "/analyticsDashboard.png", "/ordersDashboard.png"];

export default function Features() {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(0);

    return (
        <div className="p-8 md:p-16" id="features">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    {t.features.label}
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    {t.features.title}
                </h2>

                <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                    {/* Left: feature list */}
                    <div className="flex-1 space-y-2">
                        {t.features.items.map((feature, i) => {
                            const Icon = featureIcons[i];
                            const isActive = selected === i;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setSelected(i)}
                                    className={`cursor-pointer p-6 rounded-lg border-l-4 transition-all duration-200 ${
                                        isActive
                                            ? 'border-primary bg-primary/5'
                                            : 'border-transparent hover:border-primary/30 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                            isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            <Icon size={20} />
                                        </div>
                                        <h3 className={`text-xl font-heading transition-colors ${
                                            isActive ? 'text-primary' : 'text-black'
                                        }`}>
                                            {feature.title}
                                        </h3>
                                    </div>

                                    {isActive && (
                                        <>
                                            <p className="mt-4 text-black/70 text-lg leading-relaxed pl-14">
                                                {feature.description}
                                            </p>
                                            <div className="mt-6 md:hidden rounded-xl overflow-hidden bg-gray-100">
                                                <Image
                                                    src={featureImages[i]}
                                                    alt={feature.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full object-cover"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: image (desktop only) */}
                    <div className="flex-1 hidden md:block sticky top-24">
                        <div className="rounded-xl overflow-hidden bg-gray-100 aspect-4/3">
                            <Image
                                key={selected}
                                src={featureImages[selected]}
                                alt={t.features.items[selected].title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
