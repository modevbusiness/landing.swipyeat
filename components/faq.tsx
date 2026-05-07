import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "What is SwipyEat?",
            answer: "SwipyEat is an all-in-one, AI-powered restaurant management platform that connects waiters, kitchen staff, and management in a single real-time system. It includes a digital menu builder, point-of-sale (POS) system, kitchen display system (KDS), inventory management, staff scheduling, and analytics — everything a restaurant needs to operate efficiently."
        },
        {
            question: "How much does SwipyEat cost?",
            answer: "SwipyEat offers three plans: Starter at 499 Dh/month (ideal for small restaurants, up to 5 devices, 1 location), Premium at 899 Dh/month (up to 15 devices, 3 locations, includes KDS), and Unlimited at 999 Dh/month (unlimited devices and locations, custom integrations). All plans include a 14-day free trial with no credit card required. Save up to 25% with annual billing."
        },
        {
            question: "What features does SwipyEat include?",
            answer: "SwipyEat includes a drag-and-drop menu builder, real-time POS system, kitchen display system (KDS), inventory tracking with low-stock alerts, staff management with role-based permissions, comprehensive analytics and reporting, multi-language menu support, allergen and dietary labeling, and multi-location management."
        },
        {
            question: "Can I switch plans at any time?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the remaining balance will be credited to your account."
        },
        {
            question: "Is there a free trial?",
            answer: "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features before committing to a plan."
        },
        {
            question: "What happens after my trial ends?",
            answer: "After your 14-day trial, you'll be asked to choose a plan. If you don't choose a plan, your account will be paused but your data will be saved for 30 days."
        },
        {
            question: "How does SwipyEat's Kitchen Display System work?",
            answer: "SwipyEat's KDS replaces paper tickets with a digital display in your kitchen. When a waiter takes an order, it instantly appears on the kitchen screen, organized by station (grill, fryer, salad, etc.) and color-coded by urgency. Kitchen staff can mark items as in-progress or completed, and the system tracks prep times to identify bottlenecks."
        },
        {
            question: "Do you offer discounts for annual billing?",
            answer: "Yes, you save up to 25% when you choose annual billing. The discount is applied automatically when you switch to yearly billing."
        },
        {
            question: "Can I cancel at any time?",
            answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period."
        },
        {
            question: "What is restaurant management software?",
            answer: "Restaurant management software is a digital platform that helps restaurant owners and managers streamline daily operations. It typically includes tools for order processing (POS), menu management, kitchen workflow (KDS), inventory tracking, staff scheduling, and business analytics. SwipyEat combines all these tools into one integrated, AI-powered platform."
        },
        {
            question: "Do you offer custom enterprise plans?",
            answer: "Yes, for large restaurant chains with specific requirements, we offer custom enterprise plans. Contact our sales team for a tailored solution."
        },
    ];
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: f.answer,
                    },
                })),
            })}} />
        <section className="p-8 md:p-16" id="pricing-faq" aria-labelledby="faq-title">
            <div className="max-w-4xl mx-auto">
                <span className="text-primary text-xl font-mono border-b w-max block">
                    FAQ
                </span>
                <h2 id="faq-title" className="text-5xl font-heading py-6">
                    Frequently asked questions
                </h2>
                <div className="flex flex-col mt-8">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`}>
                                <AccordionTrigger>
                                    <div className="flex items-start gap-3">
                                        <HelpCircle size={20} className="text-primary mt-1 shrink-0" />
                                        <div>
                                            <h3 className="font-heading text-lg">{faq.question}</h3>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-black/70">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
        </>
    )
}