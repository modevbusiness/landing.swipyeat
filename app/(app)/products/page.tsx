'use client';

import { ArrowRight, Check, Utensils, MonitorSmartphone, CookingPot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const products = [
        {
            id: "menu-builder",
            icon: Utensils,
            title: "Menu Builder",
            tagline: "Build beautiful digital menus in minutes",
            heroDescription: "A powerful drag-and-drop menu builder that lets you create, organize, and publish your restaurant menu across all channels — QR codes, online ordering, and in-house tablets.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-billing.c4ca67b2.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            features: [
                {
                    title: "Drag & Drop Editor",
                    description: "Organize categories, items, and modifiers with an intuitive visual editor. No technical skills required."
                },
                {
                    title: "Real-Time Sync",
                    description: "Update prices, descriptions, or availability and see changes reflected instantly across all your devices and channels."
                },
                {
                    title: "Rich Media Support",
                    description: "Upload high-quality photos and videos for each dish. Customers are 65% more likely to order items with images."
                },
                {
                    title: "Modifier Groups",
                    description: "Create customizable modifier groups — sizes, toppings, cooking preferences — with pricing rules and required/optional settings."
                },
                {
                    title: "Multi-Language Menus",
                    description: "Serve international guests with menus in multiple languages. Auto-detect customer language or let them choose."
                },
                {
                    title: "Dietary Labels & Allergens",
                    description: "Tag items with dietary labels and allergen warnings (vegan, gluten-free, nuts, dairy) for customer safety and transparency."
                },
            ],
            stats: [
                { value: "2 min", label: "Average setup time per item" },
                { value: "65%", label: "Higher orders with images" },
                { value: "30+", label: "Languages supported" },
            ]
        },
        {
            id: "pos-system",
            icon: MonitorSmartphone,
            title: "POS System",
            tagline: "Complete point of sale for modern restaurants",
            heroDescription: "A fast, reliable point-of-sale system designed specifically for restaurants. Process orders, manage payments, track inventory, and analyze sales — all from one unified platform.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-metrics.9ea6c8b0.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            features: [
                {
                    title: "Fast Order Entry",
                    description: "Optimized interface for speed. Take orders in seconds with quick-access buttons, favorites, and smart search."
                },
                {
                    title: "Flexible Payments",
                    description: "Accept credit/debit cards, digital wallets, contactless, and cash. Split bills, add tips, and process refunds with ease."
                },
                {
                    title: "Inventory Tracking",
                    description: "Real-time stock tracking with low-stock alerts. Automatically update availability when items run out to prevent over-ordering."
                },
                {
                    title: "Staff Management",
                    description: "Track clock-ins, manage permissions, and monitor individual performance. Set role-based access for managers, servers, and hosts."
                },
                {
                    title: "Sales Analytics",
                    description: "Deep insights into revenue, best sellers, peak hours, and trends. Exportable reports for accounting and tax compliance."
                },
                {
                    title: "Multi-Location Support",
                    description: "Manage multiple restaurant locations from one central dashboard. Compare performance and maintain consistency across branches."
                },
            ],
            stats: [
                { value: "< 3s", label: "Average transaction time" },
                { value: "45%", label: "Faster order processing" },
                { value: "99.9%", label: "System uptime" },
            ]
        },
        {
            id: "kds-system",
            icon: CookingPot,
            title: "KDS System",
            tagline: "Kitchen efficiency, perfected",
            heroDescription: "A Kitchen Display System that replaces paper tickets with a clear, organized digital workflow. Kitchen staff see orders in real time, prioritized by urgency, and organized by station.",
            image: "https://www.paddle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcard-hero-retain.f5d7fb48.webp&w=1080&q=75&dpl=ee01bb026efdd456db5469471380af1518bbbf63d856195b1fe878f2ed7cc468363938363462626632383736616630303038303762373361",
            features: [
                {
                    title: "Real-Time Order Display",
                    description: "Orders appear on the kitchen screen the instant they're placed. No delays, no lost tickets, no miscommunication."
                },
                {
                    title: "Station Routing",
                    description: "Automatically route items to the correct kitchen station — grill, fryer, salad, desserts — based on your setup."
                },
                {
                    title: "Priority Management",
                    description: "Color-coded urgency system highlights overdue orders. Kitchen staff instantly know which orders need immediate attention."
                },
                {
                    title: "Prep Time Tracking",
                    description: "Track how long each order takes to prepare. Identify bottlenecks and optimize kitchen workflow for faster service."
                },
                {
                    title: "Course Firing",
                    description: "Control when courses are fired to the kitchen. Ensure appetizers, mains, and desserts arrive at the right time."
                },
                {
                    title: "Customizable Layout",
                    description: "Configure the display layout to match your kitchen workflow. Choose between grid, list, or station-based views."
                },
            ],
            stats: [
                { value: "60%", label: "Fewer order errors" },
                { value: "2s", label: "Order-to-screen time" },
                { value: "35%", label: "Faster prep times" },
            ]
        },
    ];

    return (
        <div>
            {/* Hero */}
            <div className="bg-primary p-8 md:p-16 text-white" id="products-hero">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-xl font-mono border-b border-white/30 w-max mx-auto">Products</h1>
                    <h2 className="text-5xl md:text-6xl font-heading py-6">
                        Your all-in-one <br /> restaurant solution
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Three powerful products designed to work seamlessly together — from front of house to kitchen to management.
                    </p>
                </div>
            </div>

            {/* Quick Nav */}
            <div className="bg-white border-b sticky top-18 z-40" id="product-nav">
                <div className="max-w-6xl mx-auto flex justify-center gap-2">
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={`#${product.id}`}
                            className="flex items-center gap-2 px-6 py-4 font-medium text-black/60 hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
                        >
                            <product.icon size={18} />
                            <span>{product.title}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Product Sections */}
            {products.map((product, index) => (
                <div key={product.id}>
                    {/* Product Hero */}
                    <div
                        className={`p-8 md:p-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                        id={product.id}
                    >
                        <div className="max-w-6xl mx-auto">
                            <div className={`flex flex-col gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 rounded-full p-3">
                                            <product.icon size={32} className="text-primary" />
                                        </div>
                                    </div>
                                    <h1 className="text-primary text-xl font-mono border-b w-max">
                                        {product.title}
                                    </h1>
                                    <h2 className="text-4xl md:text-5xl font-heading">
                                        {product.tagline}
                                    </h2>
                                    <p className="text-xl text-black/70 leading-relaxed">
                                        {product.heroDescription}
                                    </p>
                                    <Link
                                        className="inline-flex items-center gap-2 hover:gap-4 bg-primary text-white font-semibold py-3 px-8 text-lg hover:bg-primary/90 transition-all"
                                        href="/sign-up"
                                    >
                                        <span>Try {product.title} Free</span>
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <div className="flex-1">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                                {product.stats.map((stat, j) => (
                                    <div key={j} className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
                                        <h3 className="text-4xl font-heading text-primary mb-2">{stat.value}</h3>
                                        <p className="text-black/60">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Feature Grid */}
                            <div className="mt-16" id={`${product.id}-features`}>
                                <h3 className="text-3xl font-heading mb-8">Key Capabilities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {product.features.map((feature, j) => (
                                        <div key={j} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all">
                                            <div className="flex items-start gap-3 mb-3">
                                                <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                                                    <Check size={16} className="text-primary" />
                                                </div>
                                                <h4 className="font-heading text-lg">{feature.title}</h4>
                                            </div>
                                            <p className="text-black/60 ml-8">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* How They Work Together */}
            <div className="bg-primary p-8 md:p-16" id="integration">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-white text-xl font-mono border-b border-white/30 w-max">
                        Better Together
                    </h1>
                    <h2 className="text-5xl font-heading py-6 text-white">
                        Three products, <br /> one seamless system
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mb-12">
                        When Menu Builder, POS, and KDS work together, your entire restaurant operates like a well-oiled machine.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <div className="text-5xl font-heading text-white mb-4">1</div>
                            <h3 className="text-xl font-heading text-white mb-2">Customer Orders</h3>
                            <p className="text-white/70">
                                Customer scans a QR code or the waiter takes the order using the POS. The Menu Builder powers what they see.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <div className="text-5xl font-heading text-white mb-4">2</div>
                            <h3 className="text-xl font-heading text-white mb-2">Kitchen Receives</h3>
                            <p className="text-white/70">
                                The KDS instantly displays the order, routed to the right station. Kitchen staff starts preparing immediately.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <div className="text-5xl font-heading text-white mb-4">3</div>
                            <h3 className="text-xl font-heading text-white mb-2">Served & Tracked</h3>
                            <p className="text-white/70">
                                The POS tracks the payment, inventory updates automatically, and analytics capture everything for your reports.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary p-8 md:p-16" id="products-cta">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-heading text-black py-4">
                        Ready to modernize your restaurant?
                    </h2>
                    <p className="text-xl text-black/70 mb-8">
                        Start your 14-day free trial with full access to all three products. No credit card required.
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
                            href="/pricing"
                        >
                            <span>View Pricing</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
