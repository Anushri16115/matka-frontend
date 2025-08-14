// src/components/FAQSection.tsx
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Satta Matka?",
    answer:
      "Satta Matka is a form of lottery or gambling that originated in India. It involves random number selection and betting.",
  },
  {
    question: "Is Satta Matka legal?",
    answer:
      "Satta Matka is banned in most parts of India. Always check local laws before participating.",
  },
  {
    question: "How are results declared?",
    answer:
      "Results are based on pre-defined random draws for different games at specific times.",
  },
  {
    question: "What is a Jodi or Panel Chart?",
    answer:
      "Jodi and Panel charts display historical result patterns to help players make informed guesses.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button onClick={() => toggleFAQ(index)} className="faq-question">
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
