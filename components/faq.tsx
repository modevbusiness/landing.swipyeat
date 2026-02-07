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
            question: "Do you offer discounts for annual billing?",
            answer: "Yes, you save 10% when you choose annual billing. The discount is applied automatically when you switch to yearly billing."
        },
        {
            question: "Can I cancel at any time?",
            answer: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time and continue using the service until the end of your billing period."
        },
        {
            question: "Do you offer custom enterprise plans?",
            answer: "Yes, for large restaurant chains with specific requirements, we offer custom enterprise plans. Contact our sales team for a tailored solution."
        },
    ];
    return (
        <div className="p-8 md:p-16" id="pricing-faq">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    FAQ
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    Frequently asked questions
                </h2>
                <div className="flex flex-col mt-8">
                    {faqs.map((faq, index) => (
                        <Accordion key={index} type="single" collapsible defaultValue={`faq-0`}>
                            <AccordionItem value={`faq-${index}`}>
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
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    )
}