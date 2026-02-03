
export const PricingFAQ = () => {
  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely! Upgrade, downgrade, or pause anytime. No long-term commitments."
    },
    {
      question: "What platforms do you support?",
      answer: "Facebook, X (Twitter), LinkedIn, and Instagram. More platforms coming soon!"
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! 14 days free on all plans. No credit card required to start."
    },
    {
      question: "Do you offer refunds?",
      answer: "If you're not happy in the first 30 days, we'll refund you completely."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="bg-card border border-border rounded-xl p-8">
        <h3 className="font-handwritten text-3xl font-bold text-center text-foreground mb-8">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h4 className="font-handwritten text-xl font-bold text-foreground mb-2">
                {faq.question}
              </h4>
              <p className="font-comic text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
