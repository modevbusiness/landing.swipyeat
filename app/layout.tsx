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
  title: "SwipyEat | AI Restaurant Management & Food Ordering Platform",

  description:
    "SwipyEat helps restaurants manage orders, menus, staff, inventory, and customer experience with an AI-powered all-in-one restaurant management platform.",

  keywords: [
    "restaurant management platform",
    "restaurant POS",
    "food ordering system",
    "restaurant software",
    "kitchen display system",
    "restaurant inventory management",
    "AI restaurant platform",
    "online food ordering",
    "restaurant analytics",
    "restaurant operations",
    "restaurant management software",
    "restaurant management",
    "restaurant management system",
    "hotel and restaurant management jobs",
    "restaurant management course",
    "hotel restaurant management jobs",
    "restaurant management jobs",
    "restaurant management degree",
    "restaurant management jobs near me",
    "restaurant management systems",
    "restaurant management degree online",
    "restaurant management app",
    "restaurant management tips",
    "best restaurant management software with pos",
    "restaurant management classes",
    "online restaurant management class",
    "hotel and restaurant management",
    "restaurant management solutions",
    "restaurant management tools",
    "restaurant management courses",
    "swipyeat",
    "swipyeat login",
    
    // Added from user suggestions
    "how to improve restaurant management",
    "what is restaurant management",
    "how to reduce food cost in restaurant management",
    "what is restaurant management software",
    "what is restaurant event management software",
    "what is hotel restaurant management",
    "how reputation management impacts a restaurant",
    "what is a restaurant management system",
    "what is the best restaurant management system",
    "what is the best restaurant management app",
    "how to get out of restaurant management",
    "how to make restaurant management system",
    "is restaurant management a good career",
    "what does hotel and restaurant management do",
    "how to get into restaurant management",
    "what does restaurant management mean",
    "how good is management at doc bs restaurant?",
  ],

  icons: "/logo.svg",

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
        alt: "SwipyEat"
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
      </body>
      <GoogleAnalytics gaId="G-SMFHY0YWXS" />
    </html>
  );
}
