'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage()
    return (
        <div className="p-8 md:p-16" id="pricing-faq">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-primary text-xl font-mono border-b w-max">
                    {t.faq.label}
                </h1>
                <h2 className="text-5xl font-heading py-6">
                    {t.faq.title}
                </h2>
                <div className="flex flex-col mt-8">
                    {t.faq.items.map((faq, index) => (
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
