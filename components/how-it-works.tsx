'use client'

import { Tablet, MonitorCheck, BarChart3 } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stepIcons = [Tablet, MonitorCheck, BarChart3];
const stepImages = ["/waitersScreens.png", "/kds.png", "/analyticsDashboard.png"];

export default function HowItWorks() {
    const { t } = useLanguage()

    return (
        <div className="p-8 md:p-16" id="how-it-works">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    {t.howItWorks.label}
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    {t.howItWorks.title}
                </h2>

                <div className="mt-12 space-y-16">
                    {t.howItWorks.steps.map((step, index) => {
                        const Icon = stepIcons[index]
                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } items-center`}
                            >
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-heading text-2xl">
                                            {index + 1}
                                        </div>
                                        <Icon className="text-primary" size={32} />
                                    </div>
                                    <h3 className="text-3xl font-heading text-black">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-black/70 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <Image
                                        src={stepImages[index]}
                                        alt={step.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
