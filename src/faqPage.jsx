import { useState } from 'react';
import './faqPage.css';

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'How does hotspot detection technology work?',
      answer:
        'This question seeks an overview of the underlying principles and techniques used to detect hotspots in solar panels. It could involve explanations of image processing algorithms, machine learning models, or thermal imaging technology.',
    },
    {
      question: 'How accurate is the hotspot detection system?',
      answer:
        'Stakeholders want assurance that the detection system can accurately identify hotspots with minimal false positives or false negatives. Accuracy metrics, validation procedures, and real-world performance data can help address this question.',
    },

    {
      question:
        'What is the impact of hotspots on solar panel performance and lifespan?',
      answer:
        'Explaining the consequences of hotspots on energy output, efficiency, and long-term durability helps stakeholders understand the importance of timely detection and mitigation efforts.',
    },
    {
      question:
        'Can hotspot detection be integrated into existing solar panel monitoring systems?',
      answer:
        'Compatibility with existing monitoring infrastructure is essential for seamless integration and scalability. Understanding integration options, data compatibility, and potential system enhancements can address stakeholders.',
    },
    {
      question: 'How can hotspots be mitigated once detected?',
      answer:
        'Providing insights into mitigation strategies such as panel cleaning, maintenance procedures, electrical repairs, or module replacements helps stakeholders address identified hotspots effectively.',
    },
    {
      question:
        'What are the long-term benefits of implementing hotspot detection technology?',
      answer:
        'Demonstrating the long-term benefits such as increased energy production, extended panel lifespan, reduced maintenance costs, and improved system reliability helps stakeholders understand the value proposition of the technology.',
    },
  ];

  return (
    <div className="faq-container">
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
