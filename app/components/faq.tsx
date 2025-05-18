import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the rental process work?",
      answer:
        "Browse our collection, select your dress, choose your rental dates, and complete your booking. We'll deliver your dress before your event, and you'll return it using our prepaid packaging after your rental period ends.",
    },
    {
      question: "What if the dress doesn't fit?",
      answer:
        "We offer sizing consultations before your rental. When available, we also provide a backup size with your order at no extra cost. If neither size fits, contact us immediately for assistance.",
    },
    {
      question: "How are the dresses cleaned?",
      answer:
        "Don't worry about cleaning! Return the dress as is, and we'll handle professional dry cleaning. We ensure each dress is perfectly cleaned and prepared before it goes to the next customer.",
    },
    {
      question: "What if I damage the dress?",
      answer:
        "We understand accidents happen. Minor wear and tear is covered, but significant damage may incur additional charges. We recommend reviewing our damage policy before renting.",
    },
    {
      question: "Can I extend my rental period?",
      answer:
        "Yes, subject to availability. Contact us at least 48 hours before your return date to request an extension. Additional rental fees will apply for the extended period.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-4 mb-6">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions about our rental process? Find answers to our most commonly asked questions below.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-secondary/50">
              <AccordionTrigger className="text-left font-serif text-lg font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
