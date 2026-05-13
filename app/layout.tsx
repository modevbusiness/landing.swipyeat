import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics } from "@next/third-parties/google";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400","700"],
});

export const metadata: Metadata = {
  title: {
    default: "SwipyEat | Restaurant Management, Food Ordering & Qr menu generation Platform",
    template: "%s — SwipyEat",
  },

  description:
    "SwipyEat is an all-in-one restaurant management platform. QR menu generator, POS system, kitchen display (KDS), online ordering, inventory tracking, staff management, and real-time analytics — everything your restaurant needs.",

  keywords: [
    // ── Brand ──
    "swipyeat",
    "swipy eat",
    "swipyeat restaurant",
    "swipyeat.com",
    "what is swipyeat?",

    // ── Core Product ──
    "restaurant management software",
    "restaurant management system",
    "restaurant management app",
    "restaurant management tools",
    "restaurant management platform",
    "best restaurant management software",
    "all-in-one restaurant software",
    "restaurant operations software",
    "restaurant technology solutions",
    "cloud restaurant management",
    "SaaS restaurant management",

    // ── POS ──
    "restaurant POS system",
    "restaurant POS software",
    "point of sale restaurant",
    "cloud POS for restaurants",
    "tablet POS restaurant",
    "best POS system for restaurants",
    "iPad POS for restaurants",
    "POS system for small restaurant",

    // ── KDS ──
    "kitchen display system",
    "KDS restaurant",
    "kitchen display system for restaurants",
    "kitchen order display",
    "digital kitchen display",
    "restaurant KDS software",
    "best kitchen display system",
    "KDS vs kitchen printer",

    // ── QR Menu ──
    "qr menu",
    "qr menu maker",
    "qr menu generator",
    "qr menu free",
    "qr menu restaurant",
    "qr menu online",
    "qr menu creator",
    "qr menu app",
    "qr code menu",
    "qr code menu maker",
    "qr code menu generator",
    "qr code menu free",
    "qr code menu restaurant",
    "qr code menu online",
    "qr code menu creator",
    "menu qr code",
    "restaurant qr menu",
    "digital menu qr code",
    "contactless menu",
    "digital restaurant menu",
    "interactive restaurant menu",
    "qr code ordering system",

    // ── Online Ordering ──
    "food ordering system",
    "food ordering system for restaurants",
    "online food ordering",
    "online food ordering platform for restaurants",
    "restaurant online ordering system",
    "restaurant food ordering app",
    "takeaway management system",
    "delivery management restaurant",
    "online ordering for restaurants",
    "restaurant ordering platform",
    "commission-free online ordering",

    // ── Digital Menu Builder ──
    "digital menu builder",
    "restaurant menu builder",
    "menu builder software",
    "menu design tool",
    "restaurant menu creator",
    "menu management software",
    "online menu maker for restaurants",

    // ── Inventory & Analytics ──
    "restaurant inventory management",
    "restaurant analytics",
    "restaurant analytics software",
    "restaurant sales tracking",
    "food cost management software",
    "restaurant inventory tracking",
    "restaurant reporting software",
    "restaurant dashboard",

    // ── Staff Management ──
    "restaurant staff management",
    "waiter order system",
    "restaurant employee management",
    "restaurant workforce management",
    "staff scheduling restaurant",

    // ── Table & Reservation ──
    "table management system",
    "restaurant table management",
    "restaurant reservation system",
    "table ordering system",

    // ── AI & Innovation ──
    "AI restaurant platform",
    "AI restaurant management",
    "smart restaurant software",
    "restaurant automation software",
    "AI-powered restaurant system",

    // ── Morocco / Regional ──
    "restaurant management software Morocco",
    "logiciel gestion restaurant",
    "logiciel restaurant Maroc",
    "système de gestion restaurant",
    "gestion restaurant",
    "menu digital restaurant Maroc",
    "caisse restaurant Maroc",

    // ── Competitor Alternatives ──
    "toast POS alternative",
    "square for restaurants alternative",
    "lightspeed restaurant alternative",
    "gloriafood alternative",
    "ordermark alternative",
    "best restaurant software 2025",

    // ── Long-tail / Informational ──
    "how to manage a restaurant efficiently",
    "best software to manage a restaurant",
    "how to create a digital menu for restaurant",
    "how to set up qr code menu",
    "how to reduce food waste in restaurant",
    "how to improve restaurant operations",
    "restaurant management tips for beginners",

    // ── Question-based (AEO / People Also Ask) ──

    // QR Menu questions
    "what is a qr menu?",
    "how to create a qr code menu for restaurant?",
    "how to make a qr code for a restaurant menu?",
    "how does qr code ordering work?",
    "what is the best qr menu maker?",
    "are qr code menus free?",
    "how to generate qr code for restaurant menu?",
    "why do restaurants use qr codes?",
    "how to scan a qr code for a menu?",

    // KDS questions
    "what is a kitchen display system?",
    "what is KDS in a restaurant?",
    "how does a kitchen display system work?",
    "what is the difference between KDS and kitchen printer?",
    "do I need a kitchen display system?",
    "what is the best kitchen display system for restaurants?",

    // POS questions
    "what is a restaurant POS system?",
    "how does a restaurant POS work?",
    "what is the best POS system for a small restaurant?",
    "how much does a restaurant POS system cost?",
    "what features should a restaurant POS have?",
    "what is a cloud-based POS system?",
    "do I need a POS system for my restaurant?",

    // Restaurant management questions
    "what is restaurant management software?",
    "what does restaurant management software do?",
    "how to choose restaurant management software?",
    "what is the best restaurant management system?",
    "how much does restaurant management software cost?",
    "what is the best app for restaurant management?",
    "how to run a restaurant successfully?",
    "how to improve restaurant efficiency?",
    "how to reduce food cost in a restaurant?",
    "how to track restaurant sales?",

    // Online ordering questions
    "how to set up online ordering for my restaurant?",
    "what is the best online ordering system for restaurants?",
    "how do restaurants take online orders?",
    "how to accept online food orders?",
    "is online ordering profitable for restaurants?",

    // General / decision questions
    "what is the best restaurant software in Morocco?",
    "how to digitize a restaurant?",
    "how to modernize a restaurant?",
    "how to open a restaurant step by step?",
    "what technology does a restaurant need?",
  ],


  icons: "/logo.svg",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://swipyeat.com",
  },

  openGraph: {
    title: "SwipyEat | AI Restaurant Management Platform",
    description:
      "Manage orders, staff, menus, inventory, and customer experience from one powerful platform.",
    url: "https://swipyeat.com",
    siteName: "SwipyEat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SwipyEat — AI-powered restaurant management platform dashboard"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "SwipyEat | AI Restaurant Management Platform",
    description:
      "All-in-one restaurant software for orders, inventory, staff, and analytics.",
    images: ["/og-image.png"]
  },

  metadataBase: new URL("https://swipyeat.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`antialiased ${inter.variable} ${lato.variable}`}
      >
        <ClerkProvider>
          {children}
        </ClerkProvider>
        <GoogleAnalytics gaId="G-SMFHY0YWXS" />
      </body>
    </html>
  );
}
