import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQs = [
  {
    question: "Are your products 100% organic?",
    answer: "Yes, all our ingredients are certified organic or wild-harvested. We believe in the power of nature in its purest form, free from synthetic pesticides and fertilizers."
  },
  {
    question: "Do you test on animals?",
    answer: "Never. Naturvibe is proudly cruelty-free and vegan. We test our products on willing humans, never on our furry friends."
  },
  {
    question: "What is the shelf life of your products?",
    answer: "Since we don't use synthetic preservatives, our products are best used within 6-12 months of opening. We recommend storing them in a cool, dry place away from direct sunlight."
  },
  {
    question: "Is your packaging sustainable?",
    answer: "Absolutely. We use glass bottles and jars that are fully recyclable. Our outer packaging is made from FSC-certified paper and printed with soy-based inks."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship to the US, Canada, and select European countries. We are working on expanding our reach to bring Naturvibe to more corners of the world."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-secondary min-h-screen pt-24 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
            <span className="text-accent text-xs uppercase tracking-widest font-bold mb-3 block">Help Center</span>
            <h1 className="font-serif text-4xl md:text-5xl text-primary">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-4">
            {FAQs.map((faq, index) => (
                <div key={index} className="border border-primary/10 bg-white">
                    <button 
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-serif text-lg text-primary">{faq.question}</span>
                        {openIndex === index ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-primary/40" />}
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-primary/70 font-light leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
