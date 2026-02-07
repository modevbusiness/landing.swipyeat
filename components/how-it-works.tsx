import { Tablet, MonitorCheck, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
    const steps = [
        {
            icon: Tablet,
            title: "Waiters Take Orders",
            description: "Servers use tablets or mobile devices to take orders directly at the table. Orders are instantly sent to the kitchen with all special requests and modifications clearly noted.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            step: 1
        },
        {
            icon: MonitorCheck,
            title: "Kitchen Prepares Orders",
            description: "Kitchen staff receives orders on the KDS in real-time. Orders are organized by priority and station, ensuring efficient preparation and timely delivery to tables.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            step: 2
        },
        {
            icon: BarChart3,
            title: "Management Monitors Performance",
            description: "Restaurant owners get real-time insights into sales, inventory, and staff performance. Make data-driven decisions to optimize operations and increase profitability.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            step: 3
        }
    ];

    return (
        <div className="p-8 md:p-16" id="how-it-works">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    How It Works
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    Get started in three <br /> simple steps
                </h2>

                <div className="mt-12 space-y-16">
                    {steps.map((step, index) => (
                        <div 
                            key={step.step}
                            className={`flex flex-col gap-8 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } items-center`}
                        >
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-heading text-2xl">
                                        {step.step}
                                    </div>
                                    <step.icon className="text-primary" size={32} />
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
                                    src={step.image} 
                                    alt={step.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
