'use client'

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Stats() {
    const { t } = useLanguage()

    return (
        <div className="bg-primary p-8 md:p-16" id="stats">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-white text-xl font-mono border-b border-white/30 w-max">
                    {t.stats.label}
                </h1>
                <h2 className="text-5xl font-heading py-6 text-white">
                    {t.stats.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {t.stats.items.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all"
                        >
                            <h3 className="text-5xl font-heading text-white mb-2">
                                {stat.value}
                            </h3>
                            <h4 className="text-xl font-semibold text-white mb-2">
                                {stat.label}
                            </h4>
                            <p className="text-white/70">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
