import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      
      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Let's Connect</h1>
        <p>Have a question about our products, delivery zones, or want to book the mobile refillery for your next event? Drop us a line!</p>
      </section>

      {/* TWO COLUMN LAYOUT: INFO & FORM */}
      <section className="contact-content">
        
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="info-block">
            <h3>Email</h3>
            <p><a href="mailto:hello@e3refillery.com">hello@e3refillery.com</a></p>
          </div>

          <div className="info-block">
            <h3>Pop-Up Inquiries</h3>
            <p>We are currently accepting bookings for community markets, private events, and business pop-ups.</p>
          </div>
          
          <div className="info-block">
            <h3>Follow the Journey</h3>
            <div className="social-links">
              {/* Instagram */}
              <a href="https://www.instagram.com/e3refillery/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/e3-refillery/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Facebook (Placeholder) */}
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">What are you getting in touch about?</label>
              <select id="subject" name="subject" required>
                <option value="General Question">General Question</option>
                <option value="Pop-Up Booking">Pop-Up Booking</option>
                <option value="Product Inquiry">Product Inquiry</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" className="btn-dark">SEND MESSAGE</button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;