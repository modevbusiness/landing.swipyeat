import { ArrowRight, Target, Eye, Heart, Users, Globe, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Mission-Driven",
            description: "We exist to make restaurant operations effortless, so owners can focus on what they love — great food and great experiences."
        },
        {
            icon: Eye,
            title: "Innovation First",
            description: "We constantly push boundaries, building tools that anticipate the future of dining — not just react to it."
        },
        {
            icon: Heart,
            title: "Customer Obsessed",
            description: "Every feature we build starts with a real problem from a real restaurant. Our customers' success is our success."
        },
        {
            icon: Users,
            title: "Team Spirit",
            description: "We believe great products come from great teams. Collaboration, trust, and mutual respect drive everything we do."
        },
        {
            icon: Globe,
            title: "Global Mindset",
            description: "Restaurants are universal. We build for every culture, cuisine, and corner of the world — with multi-language and multi-currency support."
        },
        {
            icon: Award,
            title: "Quality Standard",
            description: "We hold ourselves to the highest bar. Reliable uptime, clean design, and rock-solid performance — no compromises."
        },
    ];

    const milestones = [
        { year: "2024", title: "Founded", description: "SwipyEat was born out of frustration with outdated restaurant tech. Our founders — a chef and an engineer — set out to build something better." },
        { year: "JULY-24", title: "First 100 Restaurants", description: "After months of iteration with early adopters, we hit our first milestone — 100 restaurants running on SwipyEat daily." },
        { year: "MAR-25", title: "Launched KDS & POS", description: "We expanded from a menu builder into a full restaurant operating system with our Kitchen Display System and Point of Sale." },
        { year: "OCT-25", title: "Global Expansion", description: "SwipyEat went international, supporting 30+ languages and multi-currency payments across 50+ countries." },
        { year: "JUN-26", title: "1,000+ Restaurants", description: "We crossed 1,000 active restaurants and processed over $50M in transactions through our platform." },
        { year: "2026", title: "What's Next", description: "AI-powered analytics, predictive inventory management, and deeper integrations — the future of restaurant tech is here." },
    ];

    const team = [
        { name: "Mohamed EL KHAMLICHI", role: "Co-Founder & CEO", image: "/team-1.jpg", description: "Full-stack engineer with a passion for building scalable web applications." },
        { name: "Mostafa OULAHYAN", role: "Co-Founder & CTO", image: "/team-2.jpg", description: "Full-stack engineer. Previously led engineering at a food-tech startup." },
        { name: "Med Yassine EL HJOUJI", role: "Head of Product", image: "/team-3.jpg", description: "Product leader with a passion for user experience and restaurant operations." },
        { name: "Imran CHEROUD", role: "Head of Design", image: "/team-4.jpg", description: "Award-winning designer specializing in SaaS and consumer products." },
    ];

    const stats = [
        { value: "1,000+", label: "Restaurants" },
        { value: "50+", label: "Countries" },
        { value: "30+", label: "Languages" },
        { value: "$50M+", label: "Transactions Processed" },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="about-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">About Us</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        We're building the future <br /> of restaurant technology
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        SwipyEat started with a simple idea: restaurants deserve better tools. Today, we power over 1,000 restaurants in 50+ countries with our all-in-one platform.
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="p-8 md:p-16" id="our-story">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h1 className="text-primary text-xl font-mono border-b w-max">Our Story</h1>
                            <h2 className="text-4xl md:text-5xl font-heading">
                                Born in the kitchen, <br /> built for the industry
                            </h2>
                            <p className="text-xl text-black/70 leading-relaxed">
                                SwipyEat was founded by Mohamed, a head chef & Full-stack developer who spent 3 years watching orders get lost on paper tickets, and Mostafa, an engineer who knew there had to be a better way.
                            </p>
                            <p className="text-lg text-black/60 leading-relaxed">
                                Together, they built a prototype in Mohamed's restaurant kitchen. Within weeks, order errors dropped by 60% and service speed increased by 45%. That prototype became SwipyEat — and the rest is history.
                            </p>
                            <p className="text-lg text-black/60 leading-relaxed">
                                Today, our team of 50+ people across 8 countries is dedicated to one mission: making restaurants run smoother, faster, and smarter.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="bg-secondary rounded-lg p-8 text-center">
                                <h3 className="text-6xl font-heading text-primary mb-2">&ldquo;</h3>
                                <p className="text-xl text-black/80 italic leading-relaxed">
                                    We didn't build SwipyEat because we wanted to start a tech company. We built it because we were tired of watching great restaurants struggle with bad tools.
                                </p>
                                <p className="mt-6 font-heading text-lg">Mohamed El Khamlichi</p>
                                <p className="text-black/60">Co-Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-primary p-8 md:p-16" id="about-stats">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <h3 className="text-5xl font-heading text-white mb-2">{stat.value}</h3>
                            <p className="text-white/70 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values */}
            <div className="p-8 md:p-16" id="values">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Our Values</h1>
                    <h2 className="text-5xl font-heading py-6">
                        What drives us <br /> every single day
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {values.map((value, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <value.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-heading mb-2">{value.title}</h3>
                                <p className="text-black/60">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="p-8 md:p-16 bg-gray-50" id="timeline">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Our Journey</h1>
                    <h2 className="text-5xl font-heading py-6">
                        From kitchen prototype <br /> to global platform
                    </h2>

                    <div className="mt-8 space-y-0">
                        {milestones.map((milestone, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-heading text-sm shrink-0">
                                        {milestone.year}
                                    </div>
                                    {i < milestones.length - 1 && (
                                        <div className="w-0.5 bg-primary/20 flex-1 min-h-8" />
                                    )}
                                </div>
                                <div className="pb-10">
                                    <h3 className="text-2xl font-heading">{milestone.title}</h3>
                                    <p className="text-black/60 mt-1">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="p-8 md:p-16" id="team">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Our Team</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Meet the people <br /> behind SwipyEat
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                        {team.map((member, i) => (
                            <div key={i} className="group">
                                <div className="bg-gray-200 rounded-lg h-64 mb-4 overflow-hidden">
                                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                        <Users size={48} className="text-primary/30" />
                                    </div>
                                </div>
                                <h3 className="font-heading text-xl">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                                <p className="text-black/60 mt-1 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-black/60 text-lg mb-4">
                            Want to join our team? We're always looking for talented people.
                        </p>
                        <Link
                            href="mailto:contact@swipyeat.com"
                            className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 text-lg hover:bg-primary/90 transition-all"
                        >
                            <span>Contact us</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary p-8 md:p-16" id="about-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-black py-4">
                        Ready to join 1,000+ restaurants?
                    </h2>
                    <p className="text-xl text-black/70 mb-8">
                        Start your 14-day free trial and see why restaurants worldwide trust SwipyEat.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-4 px-12 text-xl hover:bg-primary/90 transition-all"
                            href="/sign-up"
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight size={24} />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-primary text-primary font-semibold py-4 px-12 text-xl hover:bg-primary hover:text-white transition-all"
                            href="/company/contact"
                        >
                            <span>Get in Touch</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
