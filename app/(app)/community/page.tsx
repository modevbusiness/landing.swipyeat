import { ArrowRight, Users, MessageSquare, BookOpen, Trophy, Github, Globe, Calendar, Heart, Lightbulb, Code, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
    const channels = [
        {
            icon: MessageSquare,
            title: "Discord Server",
            description: "Join 5,000+ restaurant owners and SwipyEat developers in our Discord community. Get real-time help, share tips, and connect with peers.",
            members: "5,200+",
            buttonText: "Join Discord",
            href: "https://discord.gg/swipyeat",
            color: "bg-indigo-500",
        },
        {
            icon: Github,
            title: "GitHub",
            description: "Explore our open-source tools, report bugs, request features, and contribute to SwipyEat's ecosystem.",
            members: "1,800+",
            buttonText: "View GitHub",
            href: "https://github.com/swipyeat",
            color: "bg-gray-800",
        },
        {
            icon: Globe,
            title: "Forum",
            description: "Our community forum is the place for in-depth discussions, tutorials, and knowledge sharing between restaurant professionals.",
            members: "3,400+",
            buttonText: "Visit Forum",
            href: "#",
            color: "bg-primary",
        },
    ];

    const resources = [
        {
            icon: BookOpen,
            title: "SwipyEat Blog",
            description: "Tips, case studies, and industry insights from the SwipyEat team and community members.",
            count: "120+ articles",
        },
        {
            icon: Code,
            title: "Developer Hub",
            description: "API docs, SDKs, example projects, and integration guides for developers building on SwipyEat.",
            count: "50+ guides",
        },
        {
            icon: Calendar,
            title: "Webinars & Events",
            description: "Monthly webinars, product demos, and community meetups. Learn from experts and connect with others.",
            count: "2 per month",
        },
        {
            icon: Lightbulb,
            title: "Feature Requests",
            description: "Vote on upcoming features and submit your own ideas. Help shape the future of SwipyEat.",
            count: "340+ ideas",
        },
    ];

    const highlights = [
        { value: "10,000+", label: "Community Members" },
        { value: "50+", label: "Countries Represented" },
        { value: "15,000+", label: "Questions Answered" },
        { value: "200+", label: "Community Contributors" },
    ];

    const testimonials = [
        {
            quote: "The SwipyEat Discord is the most helpful restaurant tech community I've ever been part of. Got my KDS configured in 10 minutes thanks to a community member.",
            author: "Marco R.",
            role: "Restaurant Owner, Italy",
        },
        {
            quote: "I submitted a feature request for multi-language menus years ago. Not only did they build it, they invited me to beta test. This community actually listens.",
            author: "Priya S.",
            role: "Café Chain Manager, UK",
        },
        {
            quote: "As a developer, the API docs and community support made integrating SwipyEat with our loyalty platform incredibly smooth.",
            author: "Tomás L.",
            role: "Software Developer, Spain",
        },
    ];

    const programs = [
        {
            icon: Trophy,
            title: "SwipyEat Champions",
            description: "Our ambassador program for power users. Get early access to features, exclusive swag, and a direct line to our product team.",
            perks: ["Early access to beta features", "Exclusive SwipyEat merchandise", "Monthly call with product team", "Champion badge on profile"],
        },
        {
            icon: Heart,
            title: "Community Contributors",
            description: "For those who help others. Answer questions, write tutorials, and share your expertise to earn recognition and rewards.",
            perks: ["Contributor badge", "Annual contributor appreciation gift", "Featured on our website", "Free plan upgrade"],
        },
        {
            icon: HelpCircle,
            title: "SwipyEat Mentors",
            description: "Experienced restaurant owners who volunteer to mentor newcomers. Help others succeed while building your network.",
            perks: ["Mentor certification", "Networking opportunities", "Conference invitations", "Premium support access"],
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="community-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Community</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Join thousands of <br /> restaurant professionals
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Connect, learn, and grow with a global community of restaurant owners, managers, chefs, and developers using SwipyEat.
                    </p>
                    <a
                        href="https://discord.gg/swipyeat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                    >
                        <span>Join the Community</span>
                        <ArrowRight size={24} />
                    </a>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-secondary p-8" id="community-stats">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {highlights.map((stat, i) => (
                        <div key={i} className="text-center">
                            <h3 className="text-4xl font-heading text-primary">{stat.value}</h3>
                            <p className="text-black/60">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Channels */}
            <div className="p-8 md:p-16" id="channels">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Connect</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Find us where <br /> you're most comfortable
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {channels.map((channel, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col">
                                <div className={`${channel.color} rounded-full p-3 w-max mb-4`}>
                                    <channel.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-heading mb-2">{channel.title}</h3>
                                <p className="text-black/60 mb-4 flex-1">{channel.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-black/40 flex items-center gap-1">
                                        <Users size={14} /> {channel.members} members
                                    </span>
                                    <a
                                        href={channel.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        {channel.buttonText} <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Resources */}
            <div className="p-8 md:p-16 bg-gray-50" id="resources">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Resources</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Learn and grow
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                        {resources.map((resource, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer">
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <resource.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-lg font-heading mb-2">{resource.title}</h3>
                                <p className="text-black/60 text-sm mb-3">{resource.description}</p>
                                <span className="text-primary font-medium text-sm">{resource.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="p-8 md:p-16" id="community-stories">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Community Stories</h1>
                    <h2 className="text-5xl font-heading py-6">
                        What our members say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {testimonials.map((t, i) => (
                            <div key={i} className="border-2 border-gray-200 rounded-lg p-6">
                                <p className="text-black/70 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                                <div>
                                    <p className="font-heading">{t.author}</p>
                                    <p className="text-black/50 text-sm">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Programs */}
            <div className="p-8 md:p-16 bg-gray-50" id="programs">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-primary text-xl font-mono border-b w-max">Programs</h1>
                    <h2 className="text-5xl font-heading py-6">
                        Get involved
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {programs.map((program, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                                <div className="bg-primary/10 rounded-full p-3 w-max mb-4">
                                    <program.icon size={24} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-heading mb-2">{program.title}</h3>
                                <p className="text-black/60 mb-4">{program.description}</p>
                                <ul className="space-y-2">
                                    {program.perks.map((perk, j) => (
                                        <li key={j} className="text-sm text-black/70 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary p-8 md:p-16" id="community-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-white py-4">
                        Ready to join us?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Whether you're a restaurant owner looking for tips or a developer building integrations — there's a place for you here.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="https://discord.gg/swipyeat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 bg-white text-primary font-semibold py-4 px-12 text-xl hover:bg-gray-100 transition-all"
                        >
                            <span>Join Discord</span>
                            <ArrowRight size={24} />
                        </a>
                        <Link
                            className="inline-flex items-center justify-center gap-2 hover:gap-4 border-2 border-white text-white font-semibold py-4 px-12 text-xl hover:bg-white/10 transition-all"
                            href="/sign-up"
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
