import Hero from "@/components/hero";
import Products from "@/components/products";
import Feautures from "@/components/feautures";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import FinalCTA from "@/components/final-cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-8" id="why-us">
        <h1 className="text-primary text-xl font-mono py-1 w-max border-b">Why SwipyEat?</h1>
        <h1 className="text-black text-2xl md:text-5xl font-heading py-4">"SwipyEat brings waiters, kitchen staff, and management together in one real-time system to streamline ordering, improve kitchen flow, and keep service running smoothly."</h1>
      </div>
      <Feautures />
      <HowItWorks />
      <Products />
      <Pricing />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
