'use client';

import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Globe, Users, Code, Palette, Megaphone, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const perks = [
        { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world. We're a distributed team across 8 countries." },
        { icon: Clock, title: "Flexible Hours", description: "We care about results, not hours. Set your own schedule and work when you're most productive." },
        { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance, mental health support, and wellness stipend." },
        { icon: Zap, title: "Learning Budget", description: "$2,000/year for courses, conferences, and books. Never stop growing." },
        { icon: Users, title: "Team Retreats", description: "Annual all-company retreats in exciting locations. Connect with your team in person." },
        { icon: Briefcase, title: "Equity Options", description: "Share in our success with stock options for every full-time team member." },
    ];

    const departments = ["all", "Engineering", "Design", "Product", "Marketing", "Sales"];

    const openings = [
        {
            title: "Senior Frontend Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build beautiful, performant interfaces for our restaurant management platform using React, Next.js, and TypeScript.",
        },
        {
            title: "Backend Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Design and build scalable APIs and real-time systems that power thousands of restaurants worldwide.",
        },
        {
            title: "Mobile Engineer (React Native)",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Develop our mobile apps for waiters and managers. Focus on offline-first architecture and real-time sync.",
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            description: "Design intuitive flows for complex restaurant operations. From menu building to kitchen displays.",
        },
        {
            title: "UX Researcher",
            department: "Design",
            location: "Remote",
            type: "Part-time",
            description: "Conduct user research with restaurant owners, waiters, and kitchen staff to uncover insights that shape our product.",
        },
        {
            title: "Product Manager",
            department: "Product",
            location: "Remote",
            type: "Full-time",
            description: "Own the roadmap for our POS and KDS products. Work closely with engineering, design, and customers.",
        },
        {
            title: "Content Marketing Manager",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description: "Create compelling content that educates restaurant owners about modern technology and drives organic growth.",
        },
        {
            title: "Account Executive",
            department: "Sales",
            location: "Remote (Europe)",
            type: "Full-time",
            description: "Help restaurant owners discover SwipyEat. Manage the full sales cycle from demo to onboarding.",
        },
    ];

    const departmentIcons: Record<string, typeof Code> = {
        Engineering: Code,
        Design: Palette,
        Product: Briefcase,
        Marketing: Megaphone,
        Sales: BarChart3,
    };

    const filteredOpenings = activeFilter === "all"
        ? openings
        : openings.filter(o => o.department === activeFilter);

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="careers-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Careers</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Help us reshape <br /> the restaurant industry
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        We're a remote-first team of 50+ people building the tools that power modern restaurants. Join us and make a real impact.
                    </p>
                    <a
                        href="#openings"
                        className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                    >
                        <span>View Open Positions</span>
                        <ArrowRight size={24} />
                    </a>
                </div>
            </div>

            {/* Why SwipyEat */}
            <div className="p-8 md:p-16" id="why-join">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Why Join Us</h1>
                    <h2 className="text-5xl font-heading py-6">
                        More than a job — <br /> a mission you'll love
                    </h2>
                    <p className="text-xl text-black/70 max-w-2xl mb-12">
                        We're not just building software. We're helping restaurant owners feed their communities better, faster, and smarter. Here's what makes working here special.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perks.map((perk, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <perk.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-heading mb-2">{perk.title}</h3>
                                <p className="text-black/60">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Culture */}
            <div className="bg-gray-50 p-8 md:p-16" id="culture">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h1 className="text-primary text-xl font-mono border-b w-max">Our Culture</h1>
                            <h2 className="text-4xl md:text-5xl font-heading">
                                Built on trust, <br /> powered by autonomy
                            </h2>
                            <p className="text-xl text-black/70 leading-relaxed">
                                We hire smart, motivated people and get out of their way. No micromanagement, no unnecessary meetings, no corporate politics.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                                        <Zap size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg">Ship fast, learn faster</h4>
                                        <p className="text-black/60">We deploy multiple times per day. Small, iterative changes beat big, risky launches.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                                        <Users size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg">Cross-functional by default</h4>
                                        <p className="text-black/60">Engineers talk to customers. Designers understand the code. Everyone has context.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-primary/10 rounded-full p-1 mt-1">
                                        <Heart size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-lg">Work-life balance matters</h4>
                                        <p className="text-black/60">Sustainable pace over crunch. We build for the long term — and so should you.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="bg-primary rounded-lg p-8 text-white">
                                <h3 className="text-3xl font-heading mb-6">Life at SwipyEat</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <p className="text-white/90 italic">"The best part about working here is that I can see the direct impact of my work — restaurant owners message us thanking us for making their lives easier."</p>
                                        <p className="text-white/60 mt-2">— Maria, Senior Engineer</p>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <p className="text-white/90 italic">"I've never worked somewhere with this much autonomy and trust. I set my own goals, manage my own time, and ship meaningful work every week."</p>
                                        <p className="text-white/60 mt-2">— James, Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div className="p-8 md:p-16" id="openings">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Open Positions</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Find your next role
                    </h2>

                    {/* Department Filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setActiveFilter(dept)}
                                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                                    activeFilter === dept
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-black/60 hover:bg-gray-200'
                                }`}
                            >
                                {dept === "all" ? "All Departments" : dept}
                            </button>
                        ))}
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-4">
                        {filteredOpenings.map((job, i) => {
                            const DeptIcon = departmentIcons[job.department] || Briefcase;
                            return (
                                <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <DeptIcon size={20} className="text-primary" />
                                                <span className="text-primary font-medium text-sm">{job.department}</span>
                                            </div>
                                            <h3 className="text-xl font-heading mb-1">{job.title}</h3>
                                            <p className="text-black/60 mb-3">{job.description}</p>
                                            <div className="flex items-center gap-4 text-sm text-black/50">
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} /> {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/company/careers#apply`}
                                            className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-6 transition-all shrink-0"
                                        >
                                            <span>Apply</span>
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredOpenings.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-black/60">No open positions in this department right now.</p>
                            <p className="text-black/40 mt-2">Check back soon or send us a speculative application!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-primary p-8 md:p-16" id="apply">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Don't see your role?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        We're always looking for exceptional people. Send us your resume and tell us how you'd contribute to SwipyEat.
                    </p>
                    <Link
                        className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                        href="mailto:careers@swipyeat.com"
                    >
                        <span>Send Your Resume</span>
                        <ArrowRight size={24} />
                    </Link>
                    <p className="text-white/60 mt-6">
                        Or contact us at{" "}
                        <a href="mailto:careers@swipyeat.com" className="text-white font-semibold hover:underline">
                            careers@swipyeat.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
