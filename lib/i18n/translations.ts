export type Language = 'en' | 'fr';

const en = {
  banner: "Get 14 days free trial, no credit card required",

  header: {
    features: "Features",
    products: "Products",
    pricing: "Pricing",
    contact: "Contact",
    signIn: "Sign in",
    getStarted: "Get Started",
    dashboard: "Dashboard",
    featureGroups: [
      {
        title: "Digital menu",
        elements: [
          { title: "Create and customize your menu", description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings." },
          { title: "Real-time updates", description: "Make instant updates to your menu, ensuring that your customers always have access to the latest information about your offerings." },
          { title: "Multimedia support", description: "Enhance your menu with images and videos of your dishes, giving customers a visual representation of what you have to offer." },
        ]
      },
      {
        title: "Online ordering",
        elements: [
          { title: "Seamless ordering experience", description: "Provide your customers with a seamless online ordering experience. Allow them to browse your menu, customize their orders, and make secure payments with ease." },
          { title: "Order management", description: "Efficiently manage incoming orders with our intuitive order management system. Track order status, update customers, and ensure timely delivery." },
          { title: "Multiple payment options", description: "Offer a variety of payment options to cater to your customers' preferences, including credit cards, digital wallets, and more." },
        ]
      },
      {
        title: "Table reservation",
        elements: [
          { title: "Easy reservation system", description: "Allow customers to easily reserve tables at your restaurant through our user-friendly reservation system. Manage reservations and optimize seating arrangements." },
          { title: "Real-time availability", description: "Provide real-time updates on table availability, allowing customers to make informed decisions when booking their reservations." },
          { title: "Reservation management", description: "Efficiently manage reservations, track customer preferences, and ensure a smooth dining experience for your guests." },
        ]
      },
    ],
    productGroups: [
      {
        title: "Menu Builder",
        elements: [
          { title: "Create and customize your menu", description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings." },
          { title: "Real-time updates", description: "Make instant updates to your menu, ensuring that your customers always have access to the latest information about your offerings." },
          { title: "Multimedia support", description: "Enhance your menu with images and videos of your dishes, giving customers a visual representation of what you have to offer." },
        ]
      },
      {
        title: "POS System",
        elements: [
          { title: "Streamlined order processing", description: "Our Point of Sale (POS) system streamlines order processing, allowing your staff to quickly and accurately take orders, manage payments, and track sales." },
          { title: "Inventory management", description: "Keep track of your inventory in real-time, ensuring that you never run out of essential ingredients and supplies." },
          { title: "Sales analytics", description: "Gain valuable insights into your sales performance with our comprehensive analytics tools, helping you make informed business decisions." },
        ]
      },
      {
        title: "KDS System",
        elements: [
          { title: "Efficient order management", description: "Streamline your kitchen operations with our Kitchen Display System (KDS). Manage and prioritize orders, track preparation times, and ensure smooth communication between the front and back of house." },
          { title: "Real-time updates", description: "Receive real-time updates on order status, allowing your kitchen staff to stay informed and deliver orders promptly." },
          { title: "Customizable interface", description: "Customize the KDS interface to fit your kitchen workflow, ensuring that your staff can easily navigate and manage orders." },
        ]
      },
    ],
  },

  hero: {
    title: "Fewer mistakes. Faster service. Happier customers.",
    subtitle: "SwipyEat brings waiters, kitchen staff, and management together in one real-time system to streamline ordering, improve kitchen flow, and keep service running smoothly.",
    cta: "Get Started",
    trustedBy: "Trusted by over 1,000 restaurants worldwide",
  },

  footer: {
    tagline: "Bringing waiters, kitchen staff, and management together in one real-time system.",
    categories: {
      Product: "Product",
      Company: "Company",
      Resources: "Resources",
      Legal: "Legal",
    },
    links: {
      menuBuilder: "Menu Builder",
      posSystem: "POS System",
      kdsSystem: "KDS System",
      pricing: "Pricing",
      features: "Features",
      aboutUs: "About Us",
      contact: "Contact",
      community: "Community",
      status: "Status",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      security: "Security",
    },
    newsletter: {
      title: "Stay updated",
      subtitle: "Subscribe to our newsletter for the latest updates and features.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
    copyright: "All rights reserved.",
    madeWith: "Made with love for restaurants worldwide",
  },

  howItWorks: {
    label: "How It Works",
    title: "Get started in three simple steps",
    steps: [
      {
        title: "Waiters Take Orders",
        description: "Servers use tablets or mobile devices to take orders directly at the table. Orders are instantly sent to the kitchen with all special requests and modifications clearly noted.",
      },
      {
        title: "Kitchen Prepares Orders",
        description: "Kitchen staff receives orders on the KDS in real-time. Orders are organized by priority and station, ensuring efficient preparation and timely delivery to tables.",
      },
      {
        title: "Management Monitors Performance",
        description: "Restaurant owners get real-time insights into sales, inventory, and staff performance. Make data-driven decisions to optimize operations and increase profitability.",
      },
    ],
  },

  products: {
    label: "Products",
    title: "Your all-in-one restaurant solution",
    learnMore: "Learn More",
    items: [
      {
        title: "Menu Builder",
        description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings.",
      },
      {
        title: "POS System",
        description: "Our Point of Sale (POS) system streamlines order processing, allowing your staff to quickly and accurately take orders, manage payments, and track sales.",
      },
      {
        title: "KDS System",
        description: "Streamline your kitchen operations with our Kitchen Display System (KDS). Manage and prioritize orders, track preparation times, and ensure smooth communication between the front and back of house.",
      },
    ],
  },

  pricing: {
    label: "Pricing",
    title: "Simple, transparent pricing for every restaurant",
    subtitle: "Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required.",
    monthly: "Monthly",
    yearly: "Yearly",
    saveUpTo: "Save up to 25%",
    mostPopular: "MOST POPULAR",
    perMonth: "/ mo",
    billedYearly: (total: number, savings: number) => `Billed ${total} Dh / year · Save ${savings} Dh / year`,
    notSure: "Not sure which plan to choose?",
    compareAll: "Compare all features",
    tiers: [
      {
        name: "Starter",
        description: "Ideal for small restaurants and cafés just getting started.",
        features: [
          "Up to 5 devices",
          "Basic menu builder",
          "Point of Sale (POS) system",
          "Email support",
          "Basic analytics",
          "1 location",
          "Standard updates",
        ],
        buttonText: "Get Started",
      },
      {
        name: "Premium",
        description: "Ideal for growing restaurants with multiple staff members.",
        features: [
          "Up to 15 devices",
          "Advanced menu builder",
          "POS + KDS system",
          "Priority support",
          "Advanced analytics & reports",
          "Up to 3 locations",
          "Customer loyalty program",
          "Inventory management",
          "Staff management tools",
        ],
        buttonText: "Free Trial",
      },
      {
        name: "Unlimited",
        description: "For restaurant chains and businesses with extensive needs.",
        features: [
          "Unlimited devices",
          "Enterprise menu builder",
          "Full system suite",
          "Dedicated 24/7 support",
          "Unlimited locations",
          "Advanced loyalty program",
          "Full inventory management",
          "Custom integrations",
          "White-label options",
          "Dedicated account manager",
        ],
        buttonText: "Get Started",
      },
    ],
  },

  stats: {
    label: "By the Numbers",
    title: "Proven results that speak for themselves",
    items: [
      { value: "1,000+", label: "Restaurants Worldwide", description: "Trusted by restaurants in over 50 countries" },
      { value: "45%", label: "Faster Service", description: "Average reduction in order processing time" },
      { value: "60%", label: "Fewer Mistakes", description: "Reduction in order errors reported by customers" },
      { value: "98%", label: "Customer Satisfaction", description: "Of our clients would recommend SwipyEat" },
    ],
  },

  testimonials: {
    label: "Testimonials",
    title: "Loved by restaurant owners everywhere",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Owner",
        restaurant: "The Garden Bistro",
        content: "SwipyEat has completely transformed how we operate. Our kitchen is more organized, our waiters are more efficient, and our customers are happier. The real-time order system eliminated so many errors.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        name: "Marcus Johnson",
        role: "General Manager",
        restaurant: "Downtown Grill & Bar",
        content: "We've seen a 40% reduction in order mistakes and our table turnover has increased significantly. The KDS system keeps our kitchen running like a well-oiled machine. Best investment we've made.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
      {
        name: "Elena Rodriguez",
        role: "Chef & Owner",
        restaurant: "Casa Moderna",
        content: "As a chef, I love the Kitchen Display System. Orders are clearly organized by priority, and the communication with the front of house is seamless. It's like having an extra team member.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      },
      {
        name: "David Chen",
        role: "Operations Director",
        restaurant: "Pacific Fusion",
        content: "Managing multiple locations is so much easier with SwipyEat. The analytics and reporting features give us insights we never had before. We can make data-driven decisions to improve our service.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
    ],
    at: "at",
  },

  finalCta: {
    label: "Ready to Transform?",
    title: "Start streamlining your restaurant today",
    subtitle: "Join over 1,000 restaurants worldwide that have already improved their operations with SwipyEat. Set up takes less than 10 minutes.",
    cta: "Start Free Trial",
    hasAccount: "Already have an account?",
    signIn: "Sign in",
  },

  waitlist: {
    label: "Join the Waitlist",
    title: "Be the first to experience SwipyEat & get 14 days free trial",
    subtitle: "Sign up for our waitlist to get early access to SwipyEat, the all-in-one restaurant management system that streamlines operations and enhances customer experience. Join now and be among the first to revolutionize your restaurant with SwipyEat!",
    placeholder: "Enter your email",
    button: "Join Waitlist",
    thankYou: "Thank You! 🎉",
    thankYouMsg: "You're on the waitlist! Check your email for updates.",
  },

  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    items: [
      { question: "Can I switch plans at any time?", answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance will be credited to your account." },
      { question: "Is there a free trial?", answer: "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features before committing to a plan." },
      { question: "What happens after my trial ends?", answer: "After your 14-day trial, you'll be asked to choose a plan. If you don't choose a plan, your account will be paused but your data will be saved for 30 days." },
      { question: "Do you offer discounts for annual billing?", answer: "Yes, you save 10% when you choose annual billing. The discount is applied automatically when you switch to yearly billing." },
      { question: "Can I cancel at any time?", answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period." },
      { question: "Do you offer custom enterprise plans?", answer: "Yes, for large restaurant chains with specific requirements, we offer custom enterprise plans. Contact our sales team for a tailored solution." },
    ],
  },

  featuresPage: {
    label: "Features",
    title: "Everything you need to run a modern restaurant",
    subtitle: "From digital menus to real-time kitchen displays, SwipyEat gives you all the tools to streamline operations, delight customers, and grow your business.",
    highlights: [
      { title: "Lightning Fast", description: "Orders reach the kitchen in under 2 seconds" },
      { title: "Bank-Grade Security", description: "PCI compliant with end-to-end encryption" },
      { title: "99.9% Uptime", description: "Reliable cloud infrastructure you can count on" },
      { title: "Loved by Teams", description: "Designed for waiters, chefs, and managers alike" },
    ],
    exploreLabel: "Explore Features",
    exploreTitle: "Deep dive into what SwipyEat offers",
    overviewLabel: "Overview",
    overviewTitle: "All features at a glance",
    ctaTitle: "See it all in action",
    ctaSubtitle: "Start your 14-day free trial and experience every feature for yourself. No credit card required.",
    startTrial: "Start Free Trial",
    viewPricing: "View Pricing",
    categories: [
      {
        id: "digital-menu",
        title: "Digital Menu",
        subtitle: "Create stunning digital menus in minutes",
        description: "Transform your paper menus into beautiful, interactive digital experiences. Update items, prices, and descriptions in real-time across all your locations.",
        benefits: [
          "Drag-and-drop menu builder with categories and modifiers",
          "Real-time updates — change prices and items instantly",
          "Multimedia support with dish photos and videos",
          "Multi-language support for international customers",
          "QR code generation for tableside ordering",
          "Allergen and dietary labels (vegan, gluten-free, etc.)",
        ],
      },
      {
        id: "online-ordering",
        title: "Online Ordering",
        subtitle: "Accept orders from anywhere, anytime",
        description: "Give your customers a seamless ordering experience with a branded online storefront. Accept takeaway, delivery, and dine-in orders all from one platform.",
        benefits: [
          "Branded ordering page with your logo and colors",
          "Real-time order tracking for customers",
          "Multiple payment gateways (Stripe, PayPal, etc.)",
          "Scheduled orders and pre-ordering",
          "Delivery zone management and fee calculation",
          "Automatic order confirmation via SMS and email",
        ],
      },
      {
        id: "analytics",
        title: "Analytics & Insights",
        subtitle: "Data-driven decisions for growth",
        description: "Understand your business like never before. Track sales trends, popular dishes, peak hours, and staff performance — all in one powerful dashboard.",
        benefits: [
          "Real-time sales dashboard with trends and forecasts",
          "Best-selling items and menu performance analysis",
          "Peak hours and day-of-week traffic insights",
          "Staff productivity and performance metrics",
          "Customer behavior and retention analytics",
          "Exportable reports for accounting and tax",
        ],
      },
    ],
  },

  pricingPage: {
    heroLabel: "Pricing",
    heroTitle: "Simple, transparent pricing for every restaurant",
    heroSubtitle: "Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required. Scale as you grow.",
    compareLabel: "Compare Plans",
    compareTitle: "Find the right plan for your restaurant",
    compareSubtitle: "Compare all features side by side to find the perfect fit for your business.",
    featureCol: "Feature",
    ctaTitle: "Ready to get started?",
    ctaSubtitle: "Start your 14-day free trial today. No credit card required.",
    startTrial: "Start Free Trial",
    needCustom: "Need a custom plan?",
    contactSales: "Contact Sales",
    tiers: [
      {
        name: "Standard",
        description: "Perfect for small restaurants and cafes just getting started",
        features: [
          "Up to 5 devices",
          "Basic menu builder",
          "POS system",
          "Email support",
          "Basic analytics",
          "1 location",
          "Standard updates",
        ],
        buttonText: "Get Started",
      },
      {
        name: "Premium",
        description: "Ideal for growing restaurants with multiple staff members",
        features: [
          "Up to 15 devices",
          "Advanced menu builder",
          "POS + KDS system",
          "Priority support",
          "Advanced analytics & reports",
          "Up to 3 locations",
          "Customer loyalty program",
          "Inventory management",
          "Staff management tools",
        ],
        buttonText: "Start Free Trial",
      },
      {
        name: "Unlimited",
        description: "For restaurant chains and enterprises with extensive needs",
        features: [
          "Unlimited devices",
          "Enterprise menu builder",
          "Full system suite",
          "24/7 dedicated support",
          "Custom analytics & API access",
          "Unlimited locations",
          "Advanced loyalty program",
          "Full inventory management",
          "Advanced staff tools",
          "Custom integrations",
          "White-label options",
          "Dedicated account manager",
        ],
        buttonText: "Get Started",
      },
    ],
    compareFeatures: [
      {
        category: "Core Features",
        features: [
          { name: "Digital Menu Builder", standard: "Basic", premium: "Advanced", unlimited: "Enterprise" },
          { name: "POS System", standard: true, premium: true, unlimited: true },
          { name: "KDS System", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Management",
        features: [
          { name: "Locations", standard: "1", premium: "Up to 3", unlimited: "Unlimited" },
          { name: "Devices", standard: "Up to 5", premium: "Up to 15", unlimited: "Unlimited" },
          { name: "Staff Accounts", standard: "5", premium: "25", unlimited: "Unlimited" },
          { name: "Inventory Management", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Analytics & Reports",
        features: [
          { name: "Sales Dashboard", standard: "Basic", premium: "Advanced", unlimited: "Custom" },
          { name: "Revenue Reports", standard: true, premium: true, unlimited: true },
          { name: "Customer Insights", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Customer Engagement",
        features: [
          { name: "Customer Feedback", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Support & Extras",
        features: [
          { name: "Support", standard: "Email", premium: "Priority", unlimited: "24/7 Dedicated" },
          { name: "Onboarding", standard: "Self-serve", premium: "Guided", unlimited: "Dedicated Manager" },
          { name: "Custom Integrations", standard: false, premium: false, unlimited: true },
        ],
      },
    ],
  },

  productsPage: {
    heroLabel: "Products",
    heroTitle: "Your all-in-one restaurant solution",
    heroSubtitle: "Three powerful products designed to work seamlessly together — from front of house to kitchen to management.",
    keyCapabilities: "Key Capabilities",
    tryFree: (name: string) => `Try ${name} Free`,
    integrationLabel: "Better Together",
    integrationTitle: "Three products, one seamless system",
    integrationSubtitle: "When Menu Builder, POS, and KDS work together, your entire restaurant operates like a well-oiled machine.",
    integrationSteps: [
      { step: "1", title: "Customer Orders", description: "Customer scans a QR code or the waiter takes the order using the POS. The Menu Builder powers what they see." },
      { step: "2", title: "Kitchen Receives", description: "The KDS instantly displays the order, routed to the right station. Kitchen staff starts preparing immediately." },
      { step: "3", title: "Served & Tracked", description: "The POS tracks the payment, inventory updates automatically, and analytics capture everything for your reports." },
    ],
    ctaTitle: "Ready to modernize your restaurant?",
    ctaSubtitle: "Start your 14-day free trial with full access to all three products. No credit card required.",
    startTrial: "Start Free Trial",
    viewPricing: "View Pricing",
    products: [
      {
        id: "menu-builder",
        title: "Menu Builder",
        tagline: "Build beautiful digital menus in minutes",
        heroDescription: "A powerful drag-and-drop menu builder that lets you create, organize, and publish your restaurant menu across all channels — QR codes, online ordering, and in-house tablets.",
        features: [
          { title: "Drag & Drop Editor", description: "Organize categories, items, and modifiers with an intuitive visual editor. No technical skills required." },
          { title: "Real-Time Sync", description: "Update prices, descriptions, or availability and see changes reflected instantly across all your devices and channels." },
          { title: "Rich Media Support", description: "Upload high-quality photos and videos for each dish. Customers are 65% more likely to order items with images." },
          { title: "Modifier Groups", description: "Create customizable modifier groups — sizes, toppings, cooking preferences — with pricing rules and required/optional settings." },
          { title: "Multi-Language Menus", description: "Serve international guests with menus in multiple languages. Auto-detect customer language or let them choose." },
          { title: "Dietary Labels & Allergens", description: "Tag items with dietary labels and allergen warnings (vegan, gluten-free, nuts, dairy) for customer safety and transparency." },
        ],
        stats: [
          { value: "2 min", label: "Average setup time per item" },
          { value: "65%", label: "Higher orders with images" },
          { value: "30+", label: "Languages supported" },
        ],
      },
      {
        id: "pos-system",
        title: "POS System",
        tagline: "Complete point of sale for modern restaurants",
        heroDescription: "A fast, reliable point-of-sale system designed specifically for restaurants. Process orders, manage payments, track inventory, and analyze sales — all from one unified platform.",
        features: [
          { title: "Fast Order Entry", description: "Optimized interface for speed. Take orders in seconds with quick-access buttons, favorites, and smart search." },
          { title: "Flexible Payments", description: "Accept credit/debit cards, digital wallets, contactless, and cash. Split bills, add tips, and process refunds with ease." },
          { title: "Inventory Tracking", description: "Real-time stock tracking with low-stock alerts. Automatically update availability when items run out to prevent over-ordering." },
          { title: "Staff Management", description: "Track clock-ins, manage permissions, and monitor individual performance. Set role-based access for managers, servers, and hosts." },
          { title: "Sales Analytics", description: "Deep insights into revenue, best sellers, peak hours, and trends. Exportable reports for accounting and tax compliance." },
          { title: "Multi-Location Support", description: "Manage multiple restaurant locations from one central dashboard. Compare performance and maintain consistency across branches." },
        ],
        stats: [
          { value: "< 3s", label: "Average transaction time" },
          { value: "45%", label: "Faster order processing" },
          { value: "99.9%", label: "System uptime" },
        ],
      },
      {
        id: "kds-system",
        title: "KDS System",
        tagline: "Kitchen efficiency, perfected",
        heroDescription: "A Kitchen Display System that replaces paper tickets with a clear, organized digital workflow. Kitchen staff see orders in real time, prioritized by urgency, and organized by station.",
        features: [
          { title: "Real-Time Order Display", description: "Orders appear on the kitchen screen the instant they're placed. No delays, no lost tickets, no miscommunication." },
          { title: "Station Routing", description: "Automatically route items to the correct kitchen station — grill, fryer, salad, desserts — based on your setup." },
          { title: "Priority Management", description: "Color-coded urgency system highlights overdue orders. Kitchen staff instantly know which orders need immediate attention." },
          { title: "Prep Time Tracking", description: "Track how long each order takes to prepare. Identify bottlenecks and optimize kitchen workflow for faster service." },
          { title: "Course Firing", description: "Control when courses are fired to the kitchen. Ensure appetizers, mains, and desserts arrive at the right time." },
          { title: "Customizable Layout", description: "Configure the display layout to match your kitchen workflow. Choose between grid, list, or station-based views." },
        ],
        stats: [
          { value: "60%", label: "Fewer order errors" },
          { value: "2s", label: "Order-to-screen time" },
          { value: "35%", label: "Faster prep times" },
        ],
      },
    ],
  },

  contactPage: {
    label: "Contact",
    title: "We'd love to hear from you",
    subtitle: "Whether you have a question about our products, pricing, or anything else — our team is ready to help.",
    info: [
      { title: "Email Us", description: "Our team typically responds within 24 hours.", value: "swipyeat@gmail.com" },
      { title: "Call Us", description: "Mon-Fri, 9AM to 6PM (CET).", value: "+212 6 87 91 02 42" },
      { title: "Business Hours", description: "We're available during these times.", value: "Mon–Fri: 9AM–6PM CET" },
    ],
    form: {
      label: "Send a Message",
      title: "Get in touch",
      fullName: "Full Name *",
      email: "Email *",
      company: "Restaurant / Company",
      subject: "Subject *",
      subjectOptions: [
        { value: "general", label: "General Inquiry" },
        { value: "demo", label: "Request a Demo" },
        { value: "support", label: "Technical Support" },
        { value: "sales", label: "Sales & Pricing" },
        { value: "partnership", label: "Partnership" },
        { value: "press", label: "Press & Media" },
      ],
      message: "Message *",
      messagePlaceholder: "Tell us how we can help...",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@restaurant.com",
      companyPlaceholder: "Your Restaurant Name",
      submit: "Send Message",
      successTitle: "Message Sent!",
      successMsg: "Thank you for reaching out. We'll get back to you within 24 hours.",
      sendAnother: "Send another message",
    },
    departments: {
      label: "Departments",
      title: "Reach the right team",
      items: [
        { title: "Customer Support", description: "Need help with your account or have a technical question?", email: "swipyeat@gmail.com" },
        { title: "Sales", description: "Interested in SwipyEat for your restaurant? Let's talk.", email: "swipyeat@gmail.com" },
        { title: "Press & Media", description: "Journalist or blogger? Get press kits and media inquiries.", email: "swipyeat@gmail.com" },
      ],
    },
    ctaTitle: "Ready to get started?",
    ctaSubtitle: "Start your 14-day free trial today, or schedule a demo with our sales team.",
    startTrial: "Start Free Trial",
    viewPricing: "View Pricing",
  },
};

const fr: typeof en = {
  banner: "Essayez gratuitement pendant 14 jours, sans carte de crédit",

  header: {
    features: "Fonctionnalités",
    products: "Produits",
    pricing: "Tarifs",
    contact: "Contact",
    signIn: "Se connecter",
    getStarted: "Commencer",
    dashboard: "Tableau de bord",
    featureGroups: [
      {
        title: "Menu numérique",
        elements: [
          { title: "Créez et personnalisez votre menu", description: "Créez et personnalisez facilement votre menu numérique grâce à notre interface conviviale. Ajoutez vos plats, descriptions et prix pour présenter vos offres." },
          { title: "Mises à jour en temps réel", description: "Effectuez des mises à jour instantanées de votre menu, garantissant que vos clients ont toujours accès aux dernières informations sur vos offres." },
          { title: "Support multimédia", description: "Enrichissez votre menu avec des images et vidéos de vos plats, offrant aux clients une représentation visuelle de ce que vous proposez." },
        ]
      },
      {
        title: "Commande en ligne",
        elements: [
          { title: "Expérience de commande fluide", description: "Offrez à vos clients une expérience de commande en ligne fluide. Permettez-leur de parcourir votre menu, de personnaliser leurs commandes et d'effectuer des paiements sécurisés facilement." },
          { title: "Gestion des commandes", description: "Gérez efficacement les commandes entrantes grâce à notre système de gestion intuitif. Suivez l'état des commandes, informez les clients et assurez une livraison ponctuelle." },
          { title: "Multiples options de paiement", description: "Proposez diverses options de paiement pour répondre aux préférences de vos clients, notamment les cartes de crédit, les portefeuilles numériques et plus encore." },
        ]
      },
      {
        title: "Réservation de table",
        elements: [
          { title: "Système de réservation simple", description: "Permettez aux clients de réserver facilement des tables dans votre restaurant grâce à notre système de réservation convivial. Gérez les réservations et optimisez les arrangements de sièges." },
          { title: "Disponibilité en temps réel", description: "Fournissez des mises à jour en temps réel sur la disponibilité des tables, permettant aux clients de prendre des décisions éclairées lors de leurs réservations." },
          { title: "Gestion des réservations", description: "Gérez efficacement les réservations, suivez les préférences des clients et assurez une expérience de restauration agréable à vos convives." },
        ]
      },
    ],
    productGroups: [
      {
        title: "Créateur de menu",
        elements: [
          { title: "Créez et personnalisez votre menu", description: "Créez et personnalisez facilement votre menu numérique grâce à notre interface conviviale. Ajoutez vos plats, descriptions et prix pour présenter vos offres." },
          { title: "Mises à jour en temps réel", description: "Effectuez des mises à jour instantanées de votre menu, garantissant que vos clients ont toujours accès aux dernières informations." },
          { title: "Support multimédia", description: "Enrichissez votre menu avec des images et vidéos de vos plats pour une représentation visuelle attrayante." },
        ]
      },
      {
        title: "Système de caisse",
        elements: [
          { title: "Traitement des commandes simplifié", description: "Notre système de point de vente (POS) simplifie le traitement des commandes, permettant à votre personnel de prendre des commandes rapidement et avec précision, gérer les paiements et suivre les ventes." },
          { title: "Gestion des stocks", description: "Suivez votre inventaire en temps réel pour ne jamais manquer d'ingrédients et de fournitures essentiels." },
          { title: "Analyse des ventes", description: "Obtenez des informations précieuses sur vos performances de vente grâce à nos outils d'analyse complets, vous aidant à prendre des décisions commerciales éclairées." },
        ]
      },
      {
        title: "Système KDS",
        elements: [
          { title: "Gestion efficace des commandes", description: "Rationalisez vos opérations de cuisine avec notre système d'affichage cuisine (KDS). Gérez et priorisez les commandes, suivez les temps de préparation et assurez une communication fluide entre la salle et la cuisine." },
          { title: "Mises à jour en temps réel", description: "Recevez des mises à jour en temps réel sur l'état des commandes, permettant à votre personnel de cuisine de rester informé et de livrer les commandes rapidement." },
          { title: "Interface personnalisable", description: "Personnalisez l'interface KDS pour s'adapter à votre flux de travail en cuisine, assurant que votre personnel peut facilement naviguer et gérer les commandes." },
        ]
      },
    ],
  },

  hero: {
    title: "Moins d'erreurs. Service plus rapide. Clients plus satisfaits.",
    subtitle: "SwipyEat réunit les serveurs, le personnel de cuisine et la direction dans un système en temps réel pour fluidifier les commandes, améliorer le flux de cuisine et maintenir un service optimal.",
    cta: "Commencer",
    trustedBy: "Approuvé par plus de 1 000 restaurants dans le monde",
  },

  footer: {
    tagline: "Réunir les serveurs, le personnel de cuisine et la direction dans un système en temps réel.",
    categories: {
      Product: "Produit",
      Company: "Entreprise",
      Resources: "Ressources",
      Legal: "Légal",
    },
    links: {
      menuBuilder: "Créateur de menu",
      posSystem: "Système de caisse",
      kdsSystem: "Système KDS",
      pricing: "Tarifs",
      features: "Fonctionnalités",
      aboutUs: "À propos",
      contact: "Contact",
      community: "Communauté",
      status: "Statut",
      privacyPolicy: "Politique de confidentialité",
      termsOfService: "Conditions d'utilisation",
      cookiePolicy: "Politique des cookies",
      security: "Sécurité",
    },
    newsletter: {
      title: "Restez informé",
      subtitle: "Abonnez-vous à notre newsletter pour les dernières mises à jour et fonctionnalités.",
      placeholder: "Entrez votre email",
      button: "S'abonner",
    },
    copyright: "Tous droits réservés.",
    madeWith: "Fait avec amour pour les restaurants du monde entier",
  },

  howItWorks: {
    label: "Comment ça marche",
    title: "Démarrez en trois étapes simples",
    steps: [
      {
        title: "Les serveurs prennent les commandes",
        description: "Les serveurs utilisent des tablettes ou appareils mobiles pour prendre les commandes directement à table. Les commandes sont instantanément envoyées en cuisine avec toutes les demandes spéciales et modifications clairement notées.",
      },
      {
        title: "La cuisine prépare les commandes",
        description: "Le personnel de cuisine reçoit les commandes sur le KDS en temps réel. Les commandes sont organisées par priorité et station, assurant une préparation efficace et une livraison rapide aux tables.",
      },
      {
        title: "La direction surveille les performances",
        description: "Les propriétaires de restaurants obtiennent des informations en temps réel sur les ventes, l'inventaire et les performances du personnel. Prenez des décisions basées sur les données pour optimiser les opérations et augmenter la rentabilité.",
      },
    ],
  },

  products: {
    label: "Produits",
    title: "Votre solution tout-en-un pour restaurant",
    learnMore: "En savoir plus",
    items: [
      {
        title: "Créateur de menu",
        description: "Créez et personnalisez facilement votre menu numérique grâce à notre interface conviviale. Ajoutez vos plats, descriptions et prix pour présenter vos offres.",
      },
      {
        title: "Système de caisse",
        description: "Notre système de point de vente (POS) simplifie le traitement des commandes, permettant à votre personnel de prendre des commandes rapidement et avec précision, gérer les paiements et suivre les ventes.",
      },
      {
        title: "Système KDS",
        description: "Rationalisez vos opérations de cuisine avec notre système d'affichage cuisine (KDS). Gérez et priorisez les commandes, suivez les temps de préparation et assurez une communication fluide entre la salle et la cuisine.",
      },
    ],
  },

  pricing: {
    label: "Tarifs",
    title: "Tarification simple et transparente pour chaque restaurant",
    subtitle: "Choisissez le plan adapté à vos besoins. Tous les plans incluent un essai gratuit de 14 jours sans carte de crédit requise.",
    monthly: "Mensuel",
    yearly: "Annuel",
    saveUpTo: "Économisez jusqu'à 25%",
    mostPopular: "LE PLUS POPULAIRE",
    perMonth: "/ mois",
    billedYearly: (total: number, savings: number) => `Facturé ${total} Dh / an · Économisez ${savings} Dh / an`,
    notSure: "Vous ne savez pas quel plan choisir ?",
    compareAll: "Comparer toutes les fonctionnalités",
    tiers: [
      {
        name: "Débutant",
        description: "Idéal pour les petits restaurants et cafés qui débutent.",
        features: [
          "Jusqu'à 5 appareils",
          "Créateur de menu basique",
          "Système de caisse (POS)",
          "Support par email",
          "Analyses basiques",
          "1 établissement",
          "Mises à jour standard",
        ],
        buttonText: "Commencer",
      },
      {
        name: "Premium",
        description: "Idéal pour les restaurants en croissance avec plusieurs employés.",
        features: [
          "Jusqu'à 15 appareils",
          "Créateur de menu avancé",
          "POS + Système KDS",
          "Support prioritaire",
          "Analyses et rapports avancés",
          "Jusqu'à 3 établissements",
          "Programme de fidélité client",
          "Gestion des stocks",
          "Outils de gestion du personnel",
        ],
        buttonText: "Essai gratuit",
      },
      {
        name: "Illimité",
        description: "Pour les chaînes de restaurants et les entreprises aux besoins étendus.",
        features: [
          "Appareils illimités",
          "Créateur de menu entreprise",
          "Suite système complète",
          "Support dédié 24h/24 7j/7",
          "Établissements illimités",
          "Programme de fidélité avancé",
          "Gestion complète des stocks",
          "Intégrations personnalisées",
          "Options marque blanche",
          "Gestionnaire de compte dédié",
        ],
        buttonText: "Commencer",
      },
    ],
  },

  stats: {
    label: "En chiffres",
    title: "Des résultats prouvés qui parlent d'eux-mêmes",
    items: [
      { value: "1 000+", label: "Restaurants dans le monde", description: "Approuvé par des restaurants dans plus de 50 pays" },
      { value: "45%", label: "Service plus rapide", description: "Réduction moyenne du temps de traitement des commandes" },
      { value: "60%", label: "Moins d'erreurs", description: "Réduction des erreurs de commande signalées par les clients" },
      { value: "98%", label: "Satisfaction client", description: "De nos clients recommanderaient SwipyEat" },
    ],
  },

  testimonials: {
    label: "Témoignages",
    title: "Apprécié par les propriétaires de restaurants partout",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Propriétaire",
        restaurant: "The Garden Bistro",
        content: "SwipyEat a complètement transformé notre façon de travailler. Notre cuisine est mieux organisée, nos serveurs sont plus efficaces, et nos clients sont plus satisfaits. Le système de commande en temps réel a éliminé tant d'erreurs.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        name: "Marcus Johnson",
        role: "Directeur général",
        restaurant: "Downtown Grill & Bar",
        content: "Nous avons constaté une réduction de 40% des erreurs de commande et notre rotation des tables a considérablement augmenté. Le système KDS maintient notre cuisine en parfait fonctionnement. Meilleur investissement que nous ayons fait.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
      {
        name: "Elena Rodriguez",
        role: "Chef & Propriétaire",
        restaurant: "Casa Moderna",
        content: "En tant que chef, j'adore le système d'affichage cuisine. Les commandes sont clairement organisées par priorité, et la communication avec la salle est fluide. C'est comme avoir un membre d'équipe supplémentaire.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      },
      {
        name: "David Chen",
        role: "Directeur des opérations",
        restaurant: "Pacific Fusion",
        content: "Gérer plusieurs établissements est tellement plus facile avec SwipyEat. Les fonctionnalités d'analyse et de reporting nous donnent des informations que nous n'avions jamais auparavant. Nous pouvons prendre des décisions basées sur les données pour améliorer notre service.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
    ],
    at: "chez",
  },

  finalCta: {
    label: "Prêt à vous transformer ?",
    title: "Commencez à optimiser votre restaurant dès aujourd'hui",
    subtitle: "Rejoignez plus de 1 000 restaurants dans le monde qui ont déjà amélioré leurs opérations avec SwipyEat. L'installation prend moins de 10 minutes.",
    cta: "Commencer l'essai gratuit",
    hasAccount: "Vous avez déjà un compte ?",
    signIn: "Se connecter",
  },

  waitlist: {
    label: "Rejoindre la liste d'attente",
    title: "Soyez le premier à découvrir SwipyEat et obtenez 14 jours d'essai gratuit",
    subtitle: "Inscrivez-vous sur notre liste d'attente pour accéder en avant-première à SwipyEat, le système de gestion de restaurant tout-en-un qui simplifie les opérations et améliore l'expérience client. Rejoignez-nous maintenant et soyez parmi les premiers à révolutionner votre restaurant !",
    placeholder: "Entrez votre email",
    button: "Rejoindre la liste",
    thankYou: "Merci ! 🎉",
    thankYouMsg: "Vous êtes sur la liste d'attente ! Vérifiez vos emails pour les mises à jour.",
  },

  faq: {
    label: "FAQ",
    title: "Questions fréquemment posées",
    items: [
      { question: "Puis-je changer de plan à tout moment ?", answer: "Oui, vous pouvez mettre à niveau ou rétrograder votre plan à tout moment. Lors d'une mise à niveau, vous serez facturé de la différence au prorata. Lors d'une rétrogradation, le solde restant sera crédité sur votre compte." },
      { question: "Y a-t-il un essai gratuit ?", answer: "Oui ! Tous les plans sont accompagnés d'un essai gratuit de 14 jours. Aucune carte de crédit requise. Vous pouvez explorer toutes les fonctionnalités avant de vous engager dans un plan." },
      { question: "Que se passe-t-il après la fin de mon essai ?", answer: "Après votre essai de 14 jours, il vous sera demandé de choisir un plan. Si vous ne choisissez pas de plan, votre compte sera suspendu mais vos données seront sauvegardées pendant 30 jours." },
      { question: "Proposez-vous des remises pour la facturation annuelle ?", answer: "Oui, vous économisez 10% lorsque vous choisissez la facturation annuelle. La remise est appliquée automatiquement lorsque vous passez à la facturation annuelle." },
      { question: "Puis-je annuler à tout moment ?", answer: "Absolument. Il n'y a pas de contrats à long terme. Vous pouvez annuler votre abonnement à tout moment et continuer à utiliser le service jusqu'à la fin de votre période de facturation." },
      { question: "Proposez-vous des plans entreprise personnalisés ?", answer: "Oui, pour les grandes chaînes de restaurants avec des exigences spécifiques, nous proposons des plans entreprise personnalisés. Contactez notre équipe commerciale pour une solution sur mesure." },
    ],
  },

  featuresPage: {
    label: "Fonctionnalités",
    title: "Tout ce dont vous avez besoin pour gérer un restaurant moderne",
    subtitle: "Des menus numériques aux affichages cuisine en temps réel, SwipyEat vous donne tous les outils pour rationaliser les opérations, ravir les clients et développer votre activité.",
    highlights: [
      { title: "Ultra rapide", description: "Les commandes atteignent la cuisine en moins de 2 secondes" },
      { title: "Sécurité bancaire", description: "Conforme PCI avec chiffrement de bout en bout" },
      { title: "Disponibilité 99,9%", description: "Infrastructure cloud fiable sur laquelle vous pouvez compter" },
      { title: "Apprécié par les équipes", description: "Conçu pour les serveurs, les chefs et les managers" },
    ],
    exploreLabel: "Explorer les fonctionnalités",
    exploreTitle: "Plongez en profondeur dans ce que SwipyEat offre",
    overviewLabel: "Vue d'ensemble",
    overviewTitle: "Toutes les fonctionnalités en un coup d'œil",
    ctaTitle: "Voyez tout en action",
    ctaSubtitle: "Commencez votre essai gratuit de 14 jours et découvrez chaque fonctionnalité par vous-même. Aucune carte de crédit requise.",
    startTrial: "Commencer l'essai gratuit",
    viewPricing: "Voir les tarifs",
    categories: [
      {
        id: "digital-menu",
        title: "Menu numérique",
        subtitle: "Créez de superbes menus numériques en quelques minutes",
        description: "Transformez vos menus papier en expériences numériques belles et interactives. Mettez à jour les articles, les prix et les descriptions en temps réel dans tous vos établissements.",
        benefits: [
          "Créateur de menu par glisser-déposer avec catégories et modificateurs",
          "Mises à jour en temps réel — modifiez les prix et articles instantanément",
          "Support multimédia avec photos et vidéos de plats",
          "Support multilingue pour les clients internationaux",
          "Génération de codes QR pour les commandes à table",
          "Étiquettes allergènes et régimes alimentaires (vegan, sans gluten, etc.)",
        ],
      },
      {
        id: "online-ordering",
        title: "Commande en ligne",
        subtitle: "Acceptez des commandes de partout, à tout moment",
        description: "Offrez à vos clients une expérience de commande fluide avec une vitrine en ligne personnalisée. Acceptez les commandes à emporter, en livraison et sur place depuis une seule plateforme.",
        benefits: [
          "Page de commande personnalisée avec votre logo et vos couleurs",
          "Suivi des commandes en temps réel pour les clients",
          "Multiples passerelles de paiement (Stripe, PayPal, etc.)",
          "Commandes programmées et pré-commandes",
          "Gestion des zones de livraison et calcul des frais",
          "Confirmation automatique des commandes par SMS et email",
        ],
      },
      {
        id: "analytics",
        title: "Analyses et informations",
        subtitle: "Des décisions basées sur les données pour la croissance",
        description: "Comprenez votre activité comme jamais auparavant. Suivez les tendances des ventes, les plats populaires, les heures de pointe et les performances du personnel — tout dans un tableau de bord puissant.",
        benefits: [
          "Tableau de bord des ventes en temps réel avec tendances et prévisions",
          "Analyse des articles les plus vendus et des performances du menu",
          "Informations sur les heures de pointe et le trafic par jour de la semaine",
          "Métriques de productivité et de performance du personnel",
          "Analyses du comportement et de la fidélisation des clients",
          "Rapports exportables pour la comptabilité et les impôts",
        ],
      },
    ],
  },

  pricingPage: {
    heroLabel: "Tarifs",
    heroTitle: "Tarification simple et transparente pour chaque restaurant",
    heroSubtitle: "Choisissez le plan adapté à vos besoins. Tous les plans incluent un essai gratuit de 14 jours sans carte de crédit. Évoluez au rythme de votre croissance.",
    compareLabel: "Comparer les plans",
    compareTitle: "Trouvez le plan adapté à votre restaurant",
    compareSubtitle: "Comparez toutes les fonctionnalités côte à côte pour trouver la solution parfaite pour votre entreprise.",
    featureCol: "Fonctionnalité",
    ctaTitle: "Prêt à commencer ?",
    ctaSubtitle: "Commencez votre essai gratuit de 14 jours aujourd'hui. Aucune carte de crédit requise.",
    startTrial: "Commencer l'essai gratuit",
    needCustom: "Besoin d'un plan personnalisé ?",
    contactSales: "Contacter les ventes",
    tiers: [
      {
        name: "Standard",
        description: "Parfait pour les petits restaurants et cafés qui débutent",
        features: [
          "Jusqu'à 5 appareils",
          "Créateur de menu basique",
          "Système de caisse",
          "Support par email",
          "Analyses basiques",
          "1 établissement",
          "Mises à jour standard",
        ],
        buttonText: "Commencer",
      },
      {
        name: "Premium",
        description: "Idéal pour les restaurants en croissance avec plusieurs employés",
        features: [
          "Jusqu'à 15 appareils",
          "Créateur de menu avancé",
          "POS + Système KDS",
          "Support prioritaire",
          "Analyses et rapports avancés",
          "Jusqu'à 3 établissements",
          "Programme de fidélité client",
          "Gestion des stocks",
          "Outils de gestion du personnel",
        ],
        buttonText: "Commencer l'essai gratuit",
      },
      {
        name: "Illimité",
        description: "Pour les chaînes de restaurants et les entreprises aux besoins étendus",
        features: [
          "Appareils illimités",
          "Créateur de menu entreprise",
          "Suite système complète",
          "Support dédié 24h/24",
          "Analyses personnalisées et accès API",
          "Établissements illimités",
          "Programme de fidélité avancé",
          "Gestion complète des stocks",
          "Outils avancés pour le personnel",
          "Intégrations personnalisées",
          "Options marque blanche",
          "Gestionnaire de compte dédié",
        ],
        buttonText: "Commencer",
      },
    ],
    compareFeatures: [
      {
        category: "Fonctionnalités principales",
        features: [
          { name: "Créateur de menu numérique", standard: "Basique", premium: "Avancé", unlimited: "Entreprise" },
          { name: "Système de caisse", standard: true, premium: true, unlimited: true },
          { name: "Système KDS", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Gestion",
        features: [
          { name: "Établissements", standard: "1", premium: "Jusqu'à 3", unlimited: "Illimité" },
          { name: "Appareils", standard: "Jusqu'à 5", premium: "Jusqu'à 15", unlimited: "Illimité" },
          { name: "Comptes employés", standard: "5", premium: "25", unlimited: "Illimité" },
          { name: "Gestion des stocks", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Analyses et rapports",
        features: [
          { name: "Tableau de bord des ventes", standard: "Basique", premium: "Avancé", unlimited: "Personnalisé" },
          { name: "Rapports de revenus", standard: true, premium: true, unlimited: true },
          { name: "Informations clients", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Engagement client",
        features: [
          { name: "Retours clients", standard: false, premium: true, unlimited: true },
        ],
      },
      {
        category: "Support et extras",
        features: [
          { name: "Support", standard: "Email", premium: "Prioritaire", unlimited: "Dédié 24h/24" },
          { name: "Intégration", standard: "Autonome", premium: "Accompagné", unlimited: "Gestionnaire dédié" },
          { name: "Intégrations personnalisées", standard: false, premium: false, unlimited: true },
        ],
      },
    ],
  },

  productsPage: {
    heroLabel: "Produits",
    heroTitle: "Votre solution tout-en-un pour restaurant",
    heroSubtitle: "Trois produits puissants conçus pour fonctionner ensemble de manière transparente — de la salle à la cuisine jusqu'à la direction.",
    keyCapabilities: "Fonctionnalités clés",
    tryFree: (name: string) => `Essayer ${name} gratuitement`,
    integrationLabel: "Mieux ensemble",
    integrationTitle: "Trois produits, un système intégré",
    integrationSubtitle: "Lorsque le Créateur de menu, le POS et le KDS fonctionnent ensemble, tout votre restaurant fonctionne comme une machine bien huilée.",
    integrationSteps: [
      { step: "1", title: "Le client commande", description: "Le client scanne un code QR ou le serveur prend la commande via le POS. Le Créateur de menu alimente ce qu'il voit." },
      { step: "2", title: "La cuisine reçoit", description: "Le KDS affiche instantanément la commande, acheminée vers la bonne station. Le personnel de cuisine commence à préparer immédiatement." },
      { step: "3", title: "Servi et suivi", description: "Le POS suit le paiement, l'inventaire se met à jour automatiquement et les analyses capturent tout pour vos rapports." },
    ],
    ctaTitle: "Prêt à moderniser votre restaurant ?",
    ctaSubtitle: "Commencez votre essai gratuit de 14 jours avec un accès complet aux trois produits. Aucune carte de crédit requise.",
    startTrial: "Commencer l'essai gratuit",
    viewPricing: "Voir les tarifs",
    products: [
      {
        id: "menu-builder",
        title: "Créateur de menu",
        tagline: "Créez de beaux menus numériques en quelques minutes",
        heroDescription: "Un puissant créateur de menu par glisser-déposer qui vous permet de créer, organiser et publier votre menu sur tous les canaux — codes QR, commande en ligne et tablettes internes.",
        features: [
          { title: "Éditeur par glisser-déposer", description: "Organisez les catégories, articles et modificateurs avec un éditeur visuel intuitif. Aucune compétence technique requise." },
          { title: "Synchronisation en temps réel", description: "Mettez à jour les prix, descriptions ou disponibilités et voyez les changements se refléter instantanément sur tous vos appareils et canaux." },
          { title: "Support de médias enrichis", description: "Téléchargez des photos et vidéos de haute qualité pour chaque plat. Les clients sont 65% plus susceptibles de commander des articles avec des images." },
          { title: "Groupes de modificateurs", description: "Créez des groupes de modificateurs personnalisables — tailles, garnitures, préférences de cuisson — avec des règles de tarification et des paramètres obligatoires/optionnels." },
          { title: "Menus multilingues", description: "Servez des clients internationaux avec des menus en plusieurs langues. Détectez automatiquement la langue du client ou laissez-le choisir." },
          { title: "Étiquettes alimentaires et allergènes", description: "Étiquetez les articles avec des étiquettes alimentaires et des avertissements d'allergènes (vegan, sans gluten, noix, produits laitiers) pour la sécurité des clients." },
        ],
        stats: [
          { value: "2 min", label: "Temps moyen de configuration par article" },
          { value: "65%", label: "Plus de commandes avec des images" },
          { value: "30+", label: "Langues prises en charge" },
        ],
      },
      {
        id: "pos-system",
        title: "Système de caisse",
        tagline: "Point de vente complet pour les restaurants modernes",
        heroDescription: "Un système de point de vente rapide et fiable conçu spécifiquement pour les restaurants. Traitez les commandes, gérez les paiements, suivez l'inventaire et analysez les ventes — le tout depuis une plateforme unifiée.",
        features: [
          { title: "Saisie rapide des commandes", description: "Interface optimisée pour la rapidité. Prenez des commandes en quelques secondes avec des boutons d'accès rapide, des favoris et une recherche intelligente." },
          { title: "Paiements flexibles", description: "Acceptez les cartes de crédit/débit, les portefeuilles numériques, les paiements sans contact et les espèces. Divisez les factures, ajoutez des pourboires et traitez les remboursements facilement." },
          { title: "Suivi des stocks", description: "Suivi des stocks en temps réel avec alertes de stock bas. Mettez à jour automatiquement la disponibilité lorsque les articles sont épuisés pour éviter les surcommandes." },
          { title: "Gestion du personnel", description: "Suivez les pointages, gérez les permissions et surveillez les performances individuelles. Définissez des accès basés sur les rôles pour les managers, serveurs et hôtes." },
          { title: "Analyse des ventes", description: "Des informations approfondies sur les revenus, les meilleures ventes, les heures de pointe et les tendances. Rapports exportables pour la comptabilité et la conformité fiscale." },
          { title: "Support multi-établissements", description: "Gérez plusieurs établissements depuis un tableau de bord central. Comparez les performances et maintenez la cohérence entre les succursales." },
        ],
        stats: [
          { value: "< 3s", label: "Temps de transaction moyen" },
          { value: "45%", label: "Traitement des commandes plus rapide" },
          { value: "99,9%", label: "Disponibilité du système" },
        ],
      },
      {
        id: "kds-system",
        title: "Système KDS",
        tagline: "L'efficacité en cuisine, perfectionnée",
        heroDescription: "Un système d'affichage cuisine qui remplace les tickets papier par un flux de travail numérique clair et organisé. Le personnel de cuisine voit les commandes en temps réel, priorisées par urgence et organisées par station.",
        features: [
          { title: "Affichage des commandes en temps réel", description: "Les commandes apparaissent à l'écran de cuisine à l'instant où elles sont passées. Aucun délai, aucun ticket perdu, aucune mauvaise communication." },
          { title: "Routage par station", description: "Acheminez automatiquement les articles vers la bonne station de cuisine — grill, friteuse, salade, desserts — selon votre configuration." },
          { title: "Gestion des priorités", description: "Le système d'urgence par code couleur met en évidence les commandes en retard. Le personnel de cuisine sait immédiatement quelles commandes nécessitent une attention immédiate." },
          { title: "Suivi du temps de préparation", description: "Suivez le temps de préparation de chaque commande. Identifiez les goulots d'étranglement et optimisez le flux de travail en cuisine pour un service plus rapide." },
          { title: "Envoi des plats", description: "Contrôlez quand les plats sont envoyés en cuisine. Assurez-vous que les entrées, plats principaux et desserts arrivent au bon moment." },
          { title: "Disposition personnalisable", description: "Configurez la disposition de l'affichage pour correspondre à votre flux de travail en cuisine. Choisissez entre les vues grille, liste ou par station." },
        ],
        stats: [
          { value: "60%", label: "Moins d'erreurs de commande" },
          { value: "2s", label: "Temps commande-à-écran" },
          { value: "35%", label: "Temps de préparation plus rapides" },
        ],
      },
    ],
  },

  contactPage: {
    label: "Contact",
    title: "Nous serions ravis de vous entendre",
    subtitle: "Que vous ayez une question sur nos produits, nos tarifs ou autre chose — notre équipe est prête à vous aider.",
    info: [
      { title: "Nous envoyer un email", description: "Notre équipe répond généralement dans les 24 heures.", value: "swipyeat@gmail.com" },
      { title: "Nous appeler", description: "Lun-Ven, 9h à 18h (CET).", value: "+1 (555) 123-4567" },
      { title: "Nous rendre visite", description: "Notre siège social à Paris.", value: "42 Rue de la Tech, 75001 Paris, France" },
      { title: "Heures d'ouverture", description: "Nous sommes disponibles pendant ces horaires.", value: "Lun–Ven : 9h–18h CET" },
    ],
    form: {
      label: "Envoyer un message",
      title: "Prendre contact",
      fullName: "Nom complet *",
      email: "Email *",
      company: "Restaurant / Entreprise",
      subject: "Sujet *",
      subjectOptions: [
        { value: "general", label: "Demande générale" },
        { value: "demo", label: "Demander une démo" },
        { value: "support", label: "Support technique" },
        { value: "sales", label: "Ventes et tarifs" },
        { value: "partnership", label: "Partenariat" },
        { value: "press", label: "Presse et médias" },
      ],
      message: "Message *",
      messagePlaceholder: "Dites-nous comment nous pouvons vous aider...",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@restaurant.com",
      companyPlaceholder: "Nom de votre restaurant",
      submit: "Envoyer le message",
      successTitle: "Message envoyé !",
      successMsg: "Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures.",
      sendAnother: "Envoyer un autre message",
    },
    departments: {
      label: "Départements",
      title: "Contactez la bonne équipe",
      items: [
        { title: "Support client", description: "Besoin d'aide avec votre compte ou une question technique ?", email: "support@swipyeat.com" },
        { title: "Ventes", description: "Intéressé par SwipyEat pour votre restaurant ? Parlons-en.", email: "sales@swipyeat.com" },
        { title: "Presse et médias", description: "Journaliste ou blogueur ? Obtenez des dossiers de presse et des demandes médias.", email: "press@swipyeat.com" },
      ],
    },
    ctaTitle: "Prêt à commencer ?",
    ctaSubtitle: "Commencez votre essai gratuit de 14 jours aujourd'hui ou planifiez une démo avec notre équipe commerciale.",
    startTrial: "Commencer l'essai gratuit",
    viewPricing: "Voir les tarifs",
  },
};

export const translations = { en, fr };
export type Translations = typeof en;
