import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — SwipyEat | Menu Builder, POS & KDS System",
  description:
    "Three powerful products designed to work seamlessly together — Menu Builder, POS System, and Kitchen Display System (KDS). Try SwipyEat free for 14 days.",
  alternates: {
    canonical: "https://swipyeat.com/products",
  },
  openGraph: {
    title: "Products — SwipyEat | Your All-in-One Restaurant Solution",
    description:
      "Three powerful products designed to work seamlessly together — from front of house to kitchen to management.",
    url: "https://swipyeat.com/products",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://swipyeat.com/products" },
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "SwipyEat Menu Builder",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A powerful drag-and-drop menu builder that lets you create, organize, and publish your restaurant menu across QR codes, online ordering, and in-house tablets.",
      featureList: "Drag & Drop Editor, Real-Time Sync, Rich Media Support, Modifier Groups, Multi-Language Menus, Dietary Labels & Allergens",
    },
    {
      "@type": "SoftwareApplication",
      name: "SwipyEat POS System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A fast, reliable point-of-sale system designed for restaurants. Process orders, manage payments, track inventory, and analyze sales.",
      featureList: "Fast Order Entry, Flexible Payments, Inventory Tracking, Staff Management, Sales Analytics, Multi-Location Support",
    },
    {
      "@type": "SoftwareApplication",
      name: "SwipyEat KDS System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A Kitchen Display System that replaces paper tickets with a clear, organized digital workflow for kitchen staff.",
      featureList: "Real-Time Order Display, Station Routing, Priority Management, Prep Time Tracking, Course Firing, Customizable Layout",
    },
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      {children}
    </>
  );
}
