'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    restaurant: string;
    content: string;
    rating: number;
    image: string;
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            name: "Sarah Mitchell",
            role: "Owner",
            restaurant: "The Garden Bistro",
            content: "SwipeEat has completely transformed how we operate. Our kitchen is more organized, our waiters are more efficient, and our customers are happier. The real-time order system eliminated so many errors.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
        },
        {
            name: "Marcus Johnson",
            role: "General Manager",
            restaurant: "Downtown Grill & Bar",
            content: "We've seen a 40% reduction in order mistakes and our table turnover has increased significantly. The KDS system keeps our kitchen running like a well-oiled machine. Best investment we've made.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        },
        {
            name: "Elena Rodriguez",
            role: "Chef & Owner",
            restaurant: "Casa Moderna",
            content: "As a chef, I love the Kitchen Display System. Orders are clearly organized by priority, and the communication with the front of house is seamless. It's like having an extra team member.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
        },
        {
            name: "David Chen",
            role: "Operations Director",
            restaurant: "Pacific Fusion",
            content: "Managing multiple locations is so much easier with SwipeEat. The analytics and reporting features give us insights we never had before. We can make data-driven decisions to improve our service.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        }
    ];

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
                    Testimonials
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    Loved by restaurant <br /> owners everywhere
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
                                "{current.content}"
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
                                        {current.role} at {current.restaurant}
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
