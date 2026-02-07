'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

function Card({ title, description, image, buttonText, buttonLink }: CardProps) {
    return (
        <div className="w-full rounded flex flex-col md:flex-row gap-4 bg-secondary">
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-center gap-5">
                <h1 className="text-black text-3xl font-bold font-heading">{title}</h1>
                <p className="text-black/70 text-xl">{description}</p>
                <Link className="bg-white w-max px-4 py-2 flex items-center gap-2 hover:gap-4 transition-all text-xl" href={buttonLink}>
                    <span>{buttonText}</span>
                    <ArrowRight size={24} />
                </Link>
            </div>
            <div className="flex-1">
                <Image src={image} alt={title} className="w-full h-full object-cover rounded-r" width={500} height={300} />
            </div>
        </div>
    );
}


export default function Products() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const products = [
        { 
            title: "Menu Builder",
            description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            buttonText: "Learn More",
            buttonLink: "/menu-builder"
        },
        {
            title: "POS System",
            description: "Our Point of Sale (POS) system streamlines order processing, allowing your staff to quickly and accurately take orders, manage payments, and track sales.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            buttonText: "Learn More",
            buttonLink: "/pos-system"
        },
        {
            title: "KDS System",
            description: "Streamline your kitchen operations with our Kitchen Display System (KDS). Manage and prioritize orders, track preparation times, and ensure smooth communication between the front and back of house.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            buttonText: "Learn More",
            buttonLink: "/kds-system"
        }
    ]   
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
            tl.to(
                cards[i + 1],
                { yPercent: 0 },
                "<"
            );
            }
        });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Refresh ScrollTrigger when images load or page content changes
    useEffect(() => {
        const refreshScrollTrigger = () => {
            ScrollTrigger.refresh();
        };

        // Refresh after a short delay to account for images and dynamic content
        const timeoutId = setTimeout(refreshScrollTrigger, 100);

        // Listen for window resize
        window.addEventListener('resize', refreshScrollTrigger);

        // Listen for image load events
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
                Products
            </h1>
            <h2 className="text-5xl font-heading py-6">
                Your all-in-one <br /> restaurant solution
            </h2>
            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                <div className="relative h-[90vh]">
                    {products.map((product, i) => (
                    <div
                        key={product.title}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el;
                        }}
                        className="absolute inset-0"
                    >
                        <Card {...product} />
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}