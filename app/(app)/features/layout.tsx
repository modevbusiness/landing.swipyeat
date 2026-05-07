import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — SwipyEat | Digital Menu, POS, KDS & Analytics",
  description:
    "Explore SwipyEat features: digital menu builder, online ordering, kitchen display system (KDS), POS, real-time analytics, and more — everything your restaurant needs.",
  alternates: {
    canonical: "https://swipyeat.com/features",
  },
  openGraph: {
    title: "Features — SwipyEat | Restaurant Management Features",
    description:
      "Explore SwipyEat features: digital menus, online ordering, KDS, POS, analytics, and more.",
    url: "https://swipyeat.com/features",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://swipyeat.com/features" },
  ],
};

export default function FeaturesLayout({
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
      {children}
    </>
  );
}
