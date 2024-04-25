import { useState } from 'react';
import './faqPage.css';

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: "Why shouldn't we trust atoms?",
      answer: 'They make up everything',
    },
    {
      question: 'What do you call someone with no body and no nose?',
      answer: 'Nobody knows.',
    },
    {
      question: "What's the object-oriented way to become wealthy?",
      answer: 'Inheritance.',
    },
    {
      question: 'How many tickles does it take to tickle an octopus?',
      answer: 'Ten-tickles!',
    },
    {
      question: 'What is: 1 + 1?',
      answer: 'Depends on who you are asking.',
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="mt-10 mb-8 text-center">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq ${index === activeIndex ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="faq-title">{faq.question}</h3>
          <p className="faq-text">{faq.answer}</p>
          <button className="faq-toggle">
            <i
              className={`fas ${
                index === activeIndex ? 'fa-times' : 'fa-chevron-down'
              }`}
            ></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default FaqPage;
