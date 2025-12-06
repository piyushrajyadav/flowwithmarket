"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this suitable for beginners?",
    answer: "Yes! We start with the fundamentals of market flow and build up to advanced strategies. No prior experience is required, but an open mind is essential."
  },
  {
    question: "Does this work for Crypto/Forex/Stocks?",
    answer: "The principles of Price Action and Market Flow are universal. Whether you trade Nifty, Bitcoin, or EURUSD, the psychology behind the charts remains the same."
  },
  {
    question: "Is there a refund policy?",
    answer: "Absolutely. We offer a 30-day no-questions-asked money-back guarantee. If you don't find value in the book, just email us."
  },
  {
    question: "How do I access the Telegram group?",
    answer: "After your purchase, you will receive an email with the download link for the ebook. Inside the ebook, you'll find a special invite link to the private Telegram community."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
