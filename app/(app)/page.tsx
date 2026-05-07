import type { Metadata } from "next";
import Hero from "@/components/hero";
import Products from "@/components/products";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import FinalCTA from "@/components/final-cta";
import WaitlistWrapper from "@/components/waitlist-wrapper";
import FAQ from "@/components/faq";


/* ── Structured Data (JSON-LD) ── */
const organizationSchema = {
  "@type": "Organization",
  "@id": "https://swipyeat.com/#organization",
  name: "SwipyEat",
  url: "https://swipyeat.com",
  logo: "https://swipyeat.com/logo.svg",
  description:
    "AI-powered restaurant management platform for menus, POS, KDS, inventory, and analytics.",
  sameAs: ["https://instagram.com/swipy.eat"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "Worldwide",
    },
  ],
};

const webSiteSchema = {
  "@type": "WebSite",
  "@id": "https://swipyeat.com/#website",
  url: "https://swipyeat.com",
  name: "SwipyEat",
  publisher: { "@id": "https://swipyeat.com/#organization" },
};

const softwareAppSchema = {
  "@type": "SoftwareApplication",
  name: "SwipyEat",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "All-in-one restaurant management software with menu builder, POS, kitchen display system, and analytics.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "416",
    highPrice: "999",
    priceCurrency: "MAD",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, webSiteSchema, softwareAppSchema],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <HowItWorks />
      <Products />
      <Pricing />
      <FAQ />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <WaitlistWrapper />
    </div>
  );
}
