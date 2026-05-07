import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Faqs.css';

// --- YOUR FAQS DATA ---
const faqsData = [
  {
    question: "How does a mobile refillery work?",
    answer: (
      <p>It's simple! You can either catch us at a local pop-up event or order online for local doorstep delivery. When you buy our products, they come in reusable glass containers. Once you run out, keep the container! At a pop-up, bring it back and we'll refill it. If you order delivery, simply leave your empty container on your porch, and we will swap it out with a freshly sanitized, filled container on your delivery day.</p>
    )
  },
  {
    question: "Can I use my own random containers?",
    answer: (
      <>
        <p>It depends! For the earth’s sake, we encourage re-using containers you already have. If you’re meeting us at a pop-up market, feel free to bring your own, clean container to fill up.</p>
        <p>If you’re opting in to our delivery refill services, we cannot accept personal containers. To ensure the highest standard of cleanliness and to properly calibrate our pricing by exact volume, we currently operate a closed-loop system using our specific e3 premium containers. You purchase the container once on your first order, and from then on, you only pay for the refill!</p>
      </>
    )
  },
  {
    question: "What kind of e3 premium containers do you use?",
    answer: (
      <p>We use glass mason jars with metal lids that are made in the USA. We have pint (holds 14oz of liquid) and quart (holds 30 oz of liquid) sizes available. We also have specialty spray and pour spout lid attachments that are made in the USA. If you’re worried about the glass breaking, you can purchase a hand-made “jarket” (sleeve) to offer more protection.</p>
    )
  },
  {
    question: "Are your products safe and non-toxic?",
    answer: (
      <p>Absolutely. We meticulously curate every single item on our menu. We exclusively stock clean, non-toxic, and eco-conscious household and body products. Never any parabens or phthalates. Never any harsh chemicals. Our products are safe for your body, and safe for the earth.</p>
    )
  },
  {
    question: "Where do you get your products?",
    answer: (
      <p>We love supporting local. Our products come from small businesses in Michigan and others based in the U.S. and North America. We prioritize working with brands that are led by women, BIPOC and AAPI makers.</p>
    )
  },
  {
    question: "How does doorstep delivery work?",
    answer: (
      <p>On your scheduled delivery day, simply leave your empty e3 containers outside your front door. Our team will drop off your new products on your porch and collect the empties to be cleaned, sanitized, and re-entered into the loop! We’ll text you when your delivery arrives.</p>
    )
  },
  {
    question: "What if my container isn't completely empty yet?",
    answer: (
      <p>No problem! If you're doing a porch swap and still have a little product left, you can transfer it to a temporary jar at home, or wait until your next delivery cycle to swap it out. If you visit us at a pop-up, we can just top off whatever you have left and charge you strictly by the ounce for the difference.</p>
    )
  },
  {
    question: "Do I need to be social and answer the door or be home for the delivery?",
    answer: (
      <p>Nope. We are trying to make this as convenient for you as possible. We will text you with our delivery window, and then let you know once it has been dropped off. Depending on the weather, we may ask you to place a cooler outside for us, or we’ll communicate special instructions the day before so your products don’t risk temperature damage.</p>
    )
  },
  {
    question: "What days do you deliver and how often?",
    answer: (
      <>
        <p>Tuesdays are “meet up” days. Our “meet up” option allows you to pick up your order from us without a delivery fee. The exact time and location for that week will be shared by 3 pm Monday, with anyone who has placed an order the previous week. You have until 10 pm Monday to choose “meet up” or delivery.</p>
        <p>Wednesdays are delivery days. During our opening summer months of 2026, we will fulfill any and all delivery requests on Wednesdays as long as you are in Dearborn. As our little business grows, we will designate specific delivery zones on specific weeks in order to keep our carbon and fuel footprint low.</p>
      </>
    )
  },
  {
    question: "How do I place an order, and when will it be ready?",
    answer: (
      <>
        <p>If you find us in person at a market, you can fill your order right there! Don’t have time to wait? No problem. You can also request pre-orders in person, and we will have it ready for you by Tuesday or Wednesday of the following week.</p>
        <p>At any time, you can also place an order with us online. Until we roll out our online shop, please make all orders through this form: <a href="https://forms.gle/caBd6tmsdi97ZzUL7" target="_blank" rel="noreferrer" style={{color: 'var(--surface-camel)', textDecoration: 'underline'}}>Order Form</a></p>
        <p>As long as we have it in stock, and your order is submitted by Sunday at 11:59 pm, your order will be ready by Tuesday (for “meet up”) or Wednesday (for delivery). We will email you personally by Monday at 3 pm with our “meet up” location if you want to choose that option. Please remember to make your selection either way by 10 pm Monday night.</p>
      </>
    )
  },
  {
    question: "How much is the delivery fee?",
    answer: (
      <p>Our delivery fee is $5 per delivery order and helps us cover gas, time, and general wear and tear on our vehicle.</p>
    )
  },
  {
    question: "How do you decide where the Tuesday “meet up” will be?",
    answer: (
      <p>To be totally honest, this is brand new to us, but we’re hoping this idea can work. We’ll decide where each “meet up” will be based on the location of the orders we receive for that week. We’ll try to find a central spot that’s easily accessible for those customers. It might be in a public parking lot or park, or even a porch pickup if we’re tight. We’ll give you a time frame that we’ll be in the “meet up” spot, and just swing by any time to grab your order. We promise we’ll try not to make the transaction look too shady. Plans subject to change if this is unsustainable ;)</p>
    )
  },
  {
    question: "Once I choose my “meet up” or delivery method for an order, am I locked in to that choice for all subsequent orders?",
    answer: (
      <>
        <p>Ew, that’s too rigid. Every time you order refills, you’ll have the option of choosing how you want to receive them. Maybe we’ll be at a market and you can grab it there. We don’t want you trapped in a subscription that doesn’t make sense for you. We understand the need to be flexible with ever-changing schedules!</p>
        <p>Likewise, we won’t put you on a recurring refill plan. We don’t know how often you do laundry - and we won’t judge! Refill as little or often as it makes sense for your family lifestyle.</p>
      </>
    )
  },
  {
    question: "Do you host private events or pop-ups?",
    answer: (
      <p>Yes, we love partnering with local businesses, neighborhood block parties, and community events! If you would like e3 refillery to set up a pop-up at your location, please reach out via our Contact page to check availability.</p>
    )
  },
  {
    question: "Do you sell jars or containers for your products?",
    answer: (
      <>
        <p>Yes! You are welcome to bring your own container for in-person events, but we also sell our own premium jars at our pop-ups and for “meet up” and delivery orders. We do require you to purchase the jars WITH an accompanying product in them.</p>
        <p>
          2oz glass jar with metal lid (for toothpaste tablets) - $1.50<br/>
          4oz glass jar with metal lid (for toothpaste tablets and liquid samples) - $2.00<br/>
          16oz regular mouth glass mason pint jar with metal lid (made in the USA) - $2.50<br/>
          16oz wide mouth glass mason pint jar with metal lid (made in the USA) - $2.75<br/>
          32oz wide mouth glass mason quart jar with metal lid (made in the USA) - $3.75
        </p>
        <p style={{fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8}}>*Please note that for liquid products, we fill up to the neck of the bottle (approx 14 oz for the pint, and 30oz for the quart jars). You will only be charged for the amount of liquid poured and weighed.</p>
      </>
    )
  },
  {
    question: "Do you have starter kits?",
    answer: (
      <>
        <p>We do! Please check out our Shop page for prices.</p>
        <p><strong>Basic Starter</strong> comes with the premium jar and metal lid, filled with your product.<br/>
        <strong>Starter Plus</strong> comes with the premium jar and metal lid plus a corresponding US-made attachment (spray nozzle, pump or pour spout), filled with your product.</p>
      </>
    )
  },
  {
    question: "Do you have sample boxes where I get to choose which samples I want to try?",
    answer: (
      <p>When you shop with us in person, we do offer a selection of sample sizes you can purchase. We don’t want you to get stuck with a lot of something that doesn’t work for you. Send us an email if you have questions about the specific products that have samples: <a href="mailto:e3refillery@gmail.com" style={{color: 'var(--surface-camel)', textDecoration: 'underline'}}>e3refillery@gmail.com</a></p>
    )
  },
  {
    question: "How do you vet your suppliers/products?",
    answer: (
      <>
        <p>We have high standards for the products we sell. Unfortunately, many companies do what is called “greenwashing” where they market their products to seem eco-friendly, or have safe ingredients - but they actually don’t meet any particular standard or benchmark that guarantees they are. So we have to dig deeper to find the good ones. We look for transparency in ingredients, and assurance that the product is responsibly made. Most of the businesses we partner with have a similar story to ours - that they couldn’t find something safe on the market that they could trust - and so they set out to make something that was. We love bragging about the quality of our products, so feel free to ask!</p>
        <p>We prioritize women-owned and minority-owned businesses, and source our goods from makers that responsibly produce safe, healthy, earth-conscious products.</p>
      </>
    )
  },
  {
    question: "Why shop with you? (And why you, instead of amazon?)",
    answer: (
      <p>It’s hard to compete with the pricing and mass production of big box stores, but we know it’s worth trying to. When Dearborn’s small businesses thrive, our whole community thrive. e3 refillery is made up of real women and moms who care about the products we provide. We care about who makes them. We proudly source many of our products from women, BIPOC and AAPI owned businesses, or businesses from the U.S. that share our values. We believe in empowering these local and diverse makers and supporting their livelihood. When it comes to using products in your home and on your children, you want to know you’re getting it from someone you trust. At e3 refillery, we don’t take that lightly, and we strive to be that someone for you.</p>
    )
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about refilling your home essentials, our delivery process, and our commitment to clean, non-toxic products.</p>
      </section>

      <section className="faq-container">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
            </button>
            
            {/* The answer stays in the DOM so the max-height CSS transition can slide it open */}
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
               {faq.answer}
            </div>
          </div>
        ))}
      </section>

      <section className="contact-callout">
        <h3>Still have questions?</h3>
        <p>We're here to help you on your refillery journey. Reach out anytime.</p>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Faqs;