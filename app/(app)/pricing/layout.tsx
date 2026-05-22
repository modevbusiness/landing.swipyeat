import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — SwipyEat | Restaurant Management Plans & Pricing",
  description:
    "Simple, transparent pricing for restaurants of all sizes. SwipyEat plans start at 499 Dh/mo. Start a free 14-day trial — no credit card required.",
  alternates: {
    canonical: "https://swipyeat.com/pricing",
  },
  openGraph: {
    title: "Pricing — SwipyEat | Restaurant Management Plans",
    description:
      "Simple, transparent pricing for restaurants of all sizes. Start a free 14-day trial — no credit card required.",
    url: "https://swipyeat.com/pricing",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://swipyeat.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://swipyeat.com/pricing" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SwipyEat Restaurant Management Software",
  description:
    "All-in-one AI-powered restaurant management platform with menu builder, POS, KDS, inventory, and analytics.",
  brand: { "@type": "Brand", name: "SwipyEat" },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "499",
      priceCurrency: "MAD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://swipyeat.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "899",
      priceCurrency: "MAD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://swipyeat.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Unlimited",
      price: "1399",
      priceCurrency: "MAD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://swipyeat.com/pricing",
    },
  ],
};

export default function PricingLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
