'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import Image from "next/image";

export default function Feautures() {
    const features = [
        {
            title: "Real-Time Order Management",
            description: "Our system allows waiters to take orders directly on their devices, which are instantly sent to the kitchen. This real-time communication ensures that orders are processed quickly and accurately, reducing wait times and improving customer satisfaction.",
            image: "/orders.png"
        },
        {
            title: "Kitchen Display System (KDS)",
            description: "The KDS provides kitchen staff with a clear and organized view of incoming orders, allowing them to prioritize and manage their workflow efficiently. This helps to streamline kitchen operations and ensure that meals are prepared and delivered in a timely manner.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361"
        },
        {
            title: "Comprehensive Management Tools",
            description: "Our platform offers a suite of management tools that provide insights into sales, inventory, and staff performance. This data-driven approach helps restaurant owners make informed decisions to optimize their operations and enhance profitability.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361"
        },
        {
            title: "Table Management",
            description: "Efficiently manage table assignments, reservations, and status tracking. Optimize seating arrangements and reduce customer wait times with real-time table availability.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361"
        },
        {
            title: "Payment Processing",
            description: "Secure and fast payment processing integrated directly into the system. Support multiple payment methods and generate detailed transaction reports for better financial management.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361"
        },
        {
            title: "Customer Loyalty Program",
            description: "Build customer relationships with integrated loyalty and rewards programs. Track customer preferences and create personalized experiences to encourage repeat business.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361"
        }
    ]
    const [selectedFeature, setSelectedFeature] = useState(0);
    return (
        <div className="p-8 flex h-max items-center" id="features">
            <div className="flex-1">
                <Accordion type="single" className="md:p-5" collapsible={false} value={`item-${selectedFeature}`} onValueChange={(value) => setSelectedFeature(Number(value.split("-")[1]))}>
                    {features.map((feature, i) => (
                        <AccordionItem value={`item-${i}`} key={i} className="border-b cursor-pointer">
                            <AccordionTrigger className="text-left text-2xl font-heading cursor-pointer no-underline hover:no-underline">{feature.title}</AccordionTrigger>
                            <AccordionContent className="text-lg text-black/70">
                                <p>{feature.description}</p>
                                <Image src={feature.image} alt={feature.title} width={600} height={400} className="w-full h-full md:hidden object-cover rounded-md bg-gray-200" />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="flex-1 h-full w-full bg-gray-200 rounded-md md:block hidden">
                <Image src={features[selectedFeature].image} alt={features[selectedFeature].title} width={600} height={400} className="w-full h-full object-cover rounded bg-gray-100" />
            </div>
        </div>
    )
}