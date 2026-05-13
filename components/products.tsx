'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/i18n/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const productImages = ["/menuItems.png", "/ordersDashboard.png", "/kds.png"];
const productLinks = ["/menu-builder", "/pos-system", "/kds-system"];

interface CardProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

function Card({ title, description, image, buttonText, buttonLink }: CardProps) {
    return (
        <div className="w-full rounded flex flex-col md:flex-row gap-4 bg-primary">
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-center gap-5">
                <h1 className="text-white text-3xl font-bold font-heading">{title}</h1>
                <p className="text-white text-xl">{description}</p>
                <Link className="bg-white w-max px-4 py-2 flex items-center gap-2 hover:gap-4 transition-all text-xl" href={buttonLink}>
                    <span>{buttonText}</span>
                    <ArrowRight size={24} />
                </Link>
            </div>
            <div className="flex-1">
                <Image src={image} alt={title} className="w-full mt-[100px] object-cover rounded-r" width={500} height={300} />
            </div>
        </div>
    );
}

export default function Products() {
    const { t } = useLanguage()
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            cards.forEach((card, i) => {
                if (i !== 0) {
                    gsap.set(card, { yPercent: 100 });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${cards.length * 100}%`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                defaults: { ease: "none" },
            });

            cards.forEach((card, i) => {
                tl.to(card, {
                    scale: 0.9,
                    borderRadius: "12px",
                });

                if (cards[i + 1]) {
                    tl.to(cards[i + 1], { yPercent: 0 }, "<");
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const refreshScrollTrigger = () => {
            ScrollTrigger.refresh();
        };

        const timeoutId = setTimeout(refreshScrollTrigger, 100);
        window.addEventListener('resize', refreshScrollTrigger);

        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete) {
                img.addEventListener('load', refreshScrollTrigger);
            }
        });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', refreshScrollTrigger);
            images.forEach(img => {
                img.removeEventListener('load', refreshScrollTrigger);
            });
        };
    }, []);

    return (
        <div className="p-8" id="products">
            <h1 className="text-primary text-xl font-mono border-b w-max">
                {t.products.label}
            </h1>
            <h2 className="text-5xl font-heading py-6">
                {t.products.title}
            </h2>
            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                <div className="relative h-[90vh]">
                    {t.products.items.map((product, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                            className="absolute inset-0"
                            style={{ transform: i !== 0 ? 'translateY(100%)' : undefined }}
                        >
                            <Card
                                title={product.title}
                                description={product.description}
                                image={productImages[i]}
                                buttonText={t.products.learnMore}
                                buttonLink={productLinks[i]}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
