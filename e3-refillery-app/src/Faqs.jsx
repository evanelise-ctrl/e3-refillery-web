import React, { useState } from 'react';
import './Faqs.css';

// This is a "Helper Component". It handles the open/close logic for just ONE item.
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// This is your main page component
const Faqs = () => {
  // All your questions and answers live right here! 
  const faqData = [
    {
      question: "How does a mobile refillery work?",
      answer: "It's simple! You can catch us at a local pop-up event. When you buy our products, they come in reusable glass or aluminum containers. Once you run out, keep the container! Bring it back to our next pop-up and we'll refill it."
    },
    {
      question: "Can I use my own random containers?",
      answer: "To ensure the highest standard of cleanliness and to properly calibrate our pricing by exact volume, we currently operate a closed-loop system using our specific e3 premium containers. You purchase the container once on your first order, and from then on, you only pay for the refill!"
    },
    {
      question: "Are your products safe and non-toxic?",
      answer: "Absolutely. We meticulously curate every single item on our menu. We exclusively stock clean, non-toxic, and eco-conscious household and body products. We also prioritize working with brands that are led by women, BIPOC, or based in the U.S. so you can feel completely secure about the ingredients you are bringing into your home."
    },
    {
      question: "What if my container isn't completely empty yet?",
      answer: "No problem! If you visit us at a pop-up, we can just top off whatever you have left and charge you strictly by the ounce for the difference."
    },
    {
      question: "Do you host private events or pop-ups?",
      answer: "Yes, we love partnering with local businesses, neighborhood block parties, and community events! If you would like e3 Refillery to set up a pop-up at your location, please reach out via our Contact page to check availability."
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about refilling your home essentials and our commitment to clean, non-toxic products.</p>
      </section>

      {/* INTERACTIVE ACCORDION CONTAINER */}
      <section className="faq-container">
        {/* We use .map() to automatically generate an FaqItem for every object in your data array */}
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* CONTACT PROMPT */}
      <section className="contact-callout">
        <h3>Still have questions?</h3>
        <p>We're here to help you navigate your sustainable living journey.</p>
        <a href="/contact" className="btn-primary">Get in Touch</a>
      </section>
    </div>
  );
};

export default Faqs;