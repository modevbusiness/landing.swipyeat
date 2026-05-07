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
    "SwipyEat helps restaurants manage orders, menus, staff, inventory, and customer experience with an AI-powered all-in-one restaurant management platform.",

  keywords: [
    "restaurant management software",
    "restaurant management system",
    "restaurant POS system",
    "kitchen display system",
    "food ordering system",
    "restaurant inventory management",
    "AI restaurant platform",
    "online food ordering",
    "restaurant analytics",
    "digital menu builder",
    "restaurant management app",
    "restaurant management tools",
    "swipyeat",
    "qr menu",
    "qr menu maker",
    "qr menu generator",
    "qr menu free",
    "qr menu restaurant",
    "qr menu online",
    "qr menu creator",
    "qr code menu",
    "qr code menu maker",
    "qr code menu generator",
    "qr code menu free",
    "qr code menu restaurant",
    "qr code menu online",
    "qr code menu creator",
    "food ordering system for restaurants",
    "restaurant online ordering system",
    "takeaway management system",
    "online food ordering platform for restaurants",
    "restaurant food ordering app",
    "menu qr code",
    "qr menu app",
    "restaurant qr menu",
    
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
