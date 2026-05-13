'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
    const { t } = useLanguage()
    const testimonials = t.testimonials.items
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <div className="bg-white p-8 md:p-16" id="testimonials">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    {t.testimonials.label}
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    {t.testimonials.title}
                </h2>

                <div className="mt-12 bg-white rounded-lg relative">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="flex gap-1 mb-4">
                                {[...Array(current.rating)].map((_, i) => (
                                    <Star key={i} className="fill-primary text-primary" size={24} />
                                ))}
                            </div>
                            <p className="text-2xl text-black/80 mb-6 leading-relaxed">
                                &ldquo;{current.content}&rdquo;
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-heading text-xl text-black">
                                        {current.name}
                                    </h3>
                                    <p className="text-black/60">
                                        {current.role} {t.testimonials.at} {current.restaurant}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full border border-black/20 hover:bg-black/5 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'w-8 bg-primary'
                                            : 'w-2 bg-black/20'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full border border-black/20 hover:bg-black/5 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
