import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './style.css';
import FindUs from './FindUs';
import Contact from './Contact';
import Faqs from './Faqs';
import Shop from './Shop';
import { Analytics } from "@vercel/analytics/react";

// --- SCROLL HELPER ---
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

// --- ABOUT PAGE CONTENT ---
const About = () => {
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
      {/* BOLD MISSION SECTION (Framed) */}
      <section id="mission" className="about-section">
        <div className="mission-wrapper">
          <img src="/Web%20Icons-LeafAccentTop-gold.png" className="frame-leaf top-left" alt="" aria-hidden="true" />
          <img src="/Web%20Icons-LeafAccentBottom-gold.png" className="frame-leaf bottom-right" alt="" aria-hidden="true" />
          
          <div className="mission-box">
            <h1>Our Mission</h1>
            <p className="mission-statement">We are a mobile refillery dedicated to making sustainable living accessible to all. We are committed to reducing single-use plastics and providing clean, non-toxic, eco-conscious home and body essentials that are thoughtfully curated from women, BIPOC, AAPI, LGBTQ+ or local US businesses whose missions align with ours.</p>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION (Interactive Accordion) */}
<section id="our-story" className="about-section our-story-layout frosted-card-break">        
        <div className="story-sidebar">
          <img src="/anna.png" alt="Anna Dewey, Founder" className="founder-img" style={{ width: '100%', maxWidth: '300px', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          <h3 className="founder-name" style={{ color: 'var(--text-alabaster)', fontSize: '1.75rem', marginBottom: '0.25rem' }}>Anna Dewey</h3>
          <p className="founder-title" style={{ color: 'var(--text-alabaster)', fontSize: '1.1rem', opacity: '0.9' }}>Founder & Owner<br /><strong>e3 refillery LLC</strong></p>
        </div>
        
        <div className="story-content" style={{ flex: '2' }}>
          <h2 style={{ color: 'var(--text-alabaster)', fontSize: '2.5rem', marginBottom: '1rem' }}>Our Story</h2>
          
          <div className="story-accordion">
            <div className="accordion-item">
              <button 
                className="accordion-button" 
                onClick={() => toggleSection(0)}
                aria-expanded={openSection === 0}
              >
                The Detergent Experiment
                <span className="accordion-icon">+</span>
              </button>
              <div className={`accordion-content-wrapper ${openSection === 0 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p>My whole family has sensitive skin - and I wasn't feeling great about all the ingredients and chemicals I was using to wash our clothes. In 2018 I began experimenting <strong>making my own laundry detergent</strong> at home.</p>
                  <p><strong>The Benefits:</strong></p>
                  <ul>
                    <li>I chose what (safe!) ingredients to use</li>
                    <li>Made a concentrated batch</li>
                    <li>Re-used my own jug to refill</li>
                    <li>Saved money by not buying diluted product</li>
                    <li>Wasn't buying single-use plastic that may - or may not <em>actually</em> get recycled</li>
                  </ul>
                  <p>But even great ideas aren't always sustainable. In my case, it came at a cost that I really couldn't afford - <strong>time</strong>. With 3 kids under the age of 12 we had A LOT of laundry. Also dishes, messy rooms, busy extra-curricular activities, and oh yeah, family time that was more valuable than me grating up bars of soap into flakes every month. <strong>I had to outsource.</strong></p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className="accordion-button" 
                onClick={() => toggleSection(1)}
                aria-expanded={openSection === 1}
              >
                Discovering the Refillery
                <span className="accordion-icon">+</span>
              </button>
              <div className={`accordion-content-wrapper ${openSection === 1 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p>I found out that something called a "<strong>refillery</strong>" existed. Think of a bulk food store - but for home and body products. They had done a brilliant job of curating <strong>clean, trust-worthy</strong> essentials like laundry detergent, shampoo, soap, and other products with <strong>non-toxic ingredients</strong> - and without all the extra junky plastic packaging that piles up in landfills. A win/win for my tree-hugging heart!</p>
                  <p>There were several of these amazing refilleries scattered around Michigan, but unfortunately they weren't close by. I dreamed about making green living more accessible and convenient for our life.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className="accordion-button" 
                onClick={() => toggleSection(2)}
                aria-expanded={openSection === 2}
              >
                Bringing it to Dearborn
                <span className="accordion-icon">+</span>
              </button>
              <div className={`accordion-content-wrapper ${openSection === 2 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p>And so, in 2025, I decided to open my own refillery to serve my community at home in Dearborn. I wanted e3 refillery to solve the problems that many women and moms like me have faced when caring for their families and themselves:</p>
                  <ul>
                    <li>finding <strong>safe, non-toxic</strong> essential products you can trust</li>
                    <li>the <strong>convenience</strong> of finding me in your neighborhood - or at your door!</li>
                    <li><strong>Save money</strong> by buying only a quality product - not plastic</li>
                    <li><strong>Protect the planet</strong> by re-using your containers and buying products that don't have unnecessary packaging.</li>
                  </ul>
                  <p>We look forward to sharing our carefully curated products with you, and helping incorporate small steps to sustainability. We'll see you around the neighborhood!</p>
                  <p>Peace,<br />Anna<br /><em>Founder, Mom, Wife, Environmental Justice Advocate</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* VISION SECTION (Color Blocked) */}
<section id="vision" className="about-section split-layout split-reverse">
        <div className="split-layout-inner">
          <div className="split-image">
            <img src="/Table%20Top%202.png" alt="e3 Refillery Products" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="split-content">
            <h2 style={{ color: 'var(--bg-deep-spruce)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Vision</h2>
            <p style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem', opacity: '0.9' }}>Our mobile refillery envisions a world where we have eliminated single-use plastics and packaging waste from regularly consumed household products.</p>
            <p style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.15rem', lineHeight: '1.8', opacity: '0.9' }}>Sustainable products that are clean, safe and non-toxic for our families should be accessible to all consumers. We look forward to a more equitable economy, where supporting businesses that are women or BIPOC owned is our community’s first priority.</p>
          </div>
        </div>
      </section>

      {/* THE REFILL ETHOS SECTION */}
      <section id="how-it-works" className="about-section" style={{ padding: '6rem 5%', textAlign: 'center' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--text-alabaster)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>The Refill Ethos</h2>
          <p style={{ color: 'var(--text-alabaster)', fontSize: '1.2rem', opacity: '0.9' }}>Closing the loop on household waste, one refill at a time.</p>
        </div>
        
        <div className="how-it-works" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="step" style={{ flex: '1' }}>
            <img src="/e3-icon-jar-beige.png" alt="Jar container icon" style={{ maxWidth: '80px', marginBottom: '1.5rem' }} />
            <h3 style={{ color: 'var(--text-alabaster)', marginBottom: '1rem' }}>1. Choose a Container</h3>
            <p style={{ color: 'var(--text-alabaster)', opacity: '0.9', lineHeight: '1.6' }}>We offer several sizes of quality, reusable containers. Purchase once to enter the loop.</p>
          </div>
          <div className="step" style={{ flex: '1' }}>
            <img src="/e3-icon-pump-bottle-beige.png" alt="Pump bottle icon" style={{ maxWidth: '80px', marginBottom: '1.5rem' }} />
            <h3 style={{ color: 'var(--text-alabaster)', marginBottom: '1rem' }}>2. Fill & Enjoy</h3>
            <p style={{ color: 'var(--text-alabaster)', opacity: '0.9', lineHeight: '1.6' }}>Fill it up with our selection of eco-friendly home and personal care goods.</p>
          </div>
          <div className="step" style={{ flex: '1' }}>
            <img src="/e3-icon-recycle-beige.png" alt="Recycle loop icon" style={{ maxWidth: '80px', marginBottom: '1.5rem' }} />
            <h3 style={{ color: 'var(--text-alabaster)', marginBottom: '1rem' }}>3. The Closed Loop</h3>
            <p style={{ color: 'var(--text-alabaster)', opacity: '0.9', lineHeight: '1.6' }}>Return your empty for a freshly cleaned, sanitized, and refilled container. Zero waste.</p>
          </div>
        </div>
      </section>
    </>
  );
};

// --- HOMEPAGE CONTENT ---
const Home = () => (
  <>
    <section className="hero-full-bleed" style={{ backgroundImage: "url('/Table%20Top%202.png')" }}>
        <div className="hero-overlay-box">
            <h1>Green living, within reach</h1>
            <p>Reduce single-use plastics by refilling your favorite household and personal care products. Bring your own container, or grab one of ours!</p>
            <br />
            <Link to="/find-us" className="btn-primary custom-hover">Find Us</Link>
        </div>
    </section>

 <section className="what-is-refillery" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5rem auto', padding: '0 1.5rem' }}>
        
        {/* REPLACED TEXT WITH STYLIZED IMAGE */}
        <img 
          src="/whatisarefillery.png" 
          alt="What is a Refillery?" 
          style={{ width: '100%', maxWidth: '500px', height: 'auto', marginBottom: '1.5rem' }} 
        />
        
        <div style={{ maxWidth: '700px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.15rem', opacity: '0.9', lineHeight: '1.8' }}>A refillery is a sustainable alternative to traditional shopping. Instead of buying a new plastic bottle every time you run out of soap or laundry detergent, you simply bring your own empty containers (or grab one of our reusable ones) and fill them up! It's an easy, cost-effective way to eliminate single-use plastics from your daily routine while keeping your home stocked with clean, non-toxic products.</p>
        </div>
    </section>

    <section className="how-it-works">
        <div className="step">
            <img src="/e3-icon-jar-beige.png" alt="Jar container icon" />
            <h3>1. Choose a Container</h3>
            <p>We offer several sizes of quality, reusable containers. Purchase once to enter the loop.</p>
        </div>
        <div className="step">
            <img src="/e3-icon-pump-bottle-beige.png" alt="Pump bottle icon" />
            <h3>2. Fill & Enjoy</h3>
            <p>Fill it up with our selection of eco-friendly home and personal care goods.</p>
        </div>
        <div className="step">
            <img src="/e3-icon-recycle-beige.png" alt="Recycle loop icon" />
            <h3>3. The Closed Loop</h3>
            <p>Return your empty for a freshly cleaned, sanitized, and refilled container.<br />Zero waste.</p>
        </div>
    </section>

    <section className="three-es-section" style={{ padding: '2rem 5%', backgroundColor: 'var(--bg-deep-spruce)' }}>
      <div className="three-es-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--surface-camel)', fontSize: '2.5rem', marginBottom: '1rem' }}>The 3 e's</h2>
          <p style={{ color: 'var(--text-alabaster)', fontSize: '1.2rem', opacity: '0.9' }}>Our name is our promise: earth, equity, and empowerment.</p>
      </div>

      {/* FRAME 1: Earth */}
      <div className="feature-frame">
          <div className="framed-feature-row">
              <div className="framed-image-container">
                  <img src="/earth-image.jpg" alt="Earth conscious products" onError={(e) => {e.target.src="/Container.png"}} />
              </div>
              <div className="framed-text-content">
                  <h3>e = earth</h3>
                  <Link to="/about#mission" className="frame-link">reduce single-use plastics</Link>
                  <p>We exclusively source goods from makers that responsibly produce safe, healthy, and earth-conscious products with little to no packaging waste. By bringing your own container—or using a free, sanitized donated jar—you refill from our bulk supply and pay only for the weight of the product inside. This "closed loop" practice cuts out unnecessary plastic with every single purchase.</p>
                  <Link to="/find-us" className="frame-button">find us</Link>
              </div>
          </div>
      </div>

      {/* FRAME 2: Equity (Reversed Layout) */}
      <div className="feature-frame">
          <div className="framed-feature-row reverse">
              <div className="framed-image-container">
                  <img src="/equity-image.jpg" alt="Equitable community" onError={(e) => {e.target.src="/Table%20Top%202.png"}} />
              </div>
              <div className="framed-text-content">
                  <h3>e = equity</h3>
                  <Link to="/about#vision" className="frame-link">accessible sustainable living</Link>
                  <p>Sustainable living isn't a fad, and it shouldn't be reserved for an elite group. Everyone deserves access to clean, non-toxic, eco-friendly products. We bring affordable products to your doorstep. In the spirit of reparations, we offer "pay it forward" opportunities for our community to uplift one another and contribute towards a more equitable market.</p>
                  <Link to="/shop" className="frame-button">shop goods</Link>
              </div>
          </div>
      </div>

      {/* FRAME 3: Empowerment */}
      <div className="feature-frame">
          <div className="framed-feature-row">
              <div className="framed-image-container">
                  <img src="/empowerment-image.jpg" alt="Empowered small businesses" onError={(e) => {e.target.src="/Table%20Top%201.png"}} />
              </div>
              <div className="framed-text-content">
                  <h3>e = empowerment</h3>
                  <Link to="/about#our-story" className="frame-link">supporting ethical partnerships</Link>
                  <p>It's hard to compete with the pricing and mass production of big box stores, but when small businesses thrive, our community thrives. We proudly source women, BIPOC and AAPI-owned businesses alongside U.S. businesses with the highest standards for safe ingredients. We are committed to forming ethical partnerships that elevate and expand their reach.</p>
                  <Link to="/contact" className="frame-button">partner with us</Link>
              </div>
          </div>
      </div>
    </section>

<section className="featured-products" style={{ backgroundColor: 'var(--text-alabaster)', color: 'var(--bg-deep-spruce)', padding: '5rem 5%', margin: '4rem auto', maxWidth: '1200px', textAlign: 'center', borderRadius: '20px' }}>
        <h2 style={{ color: 'var(--bg-deep-spruce)', fontSize: '2.25rem', marginBottom: '1rem' }}>A Peek at Our Goods</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem', opacity: '0.9' }}>We stock premium, eco-conscious essentials from brands <br />that care about your health and the planet.</p>
        
        <div className="product-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Featured Product 1 */}
            <div className="preview-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                <img src="/tiani_shampoo_bar.png" alt="Tiani Shampoo Bar" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.3rem', margin: '0 0 0.25rem 0' }}>Tiani Shampoo Bar</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Tiani Body Care</p>
                <Link to="/shop" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', backgroundColor: 'var(--bg-deep-spruce)', color: 'var(--text-alabaster)', fontWeight: 'bold', transition: 'opacity 0.3s' }}>View in Shop</Link>
            </div>

            {/* Featured Product 2 */}
            <div className="preview-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                <img src="/mamasuds_solid_dish_soap.png" alt="Dishwashing Trio Set" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.3rem', margin: '0 0 0.25rem 0' }}>Dishwashing Trio Set</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>Mama Suds</p>
                <Link to="/shop" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', backgroundColor: 'var(--bg-deep-spruce)', color: 'var(--text-alabaster)', fontWeight: 'bold', transition: 'opacity 0.3s' }}>View in Shop</Link>
            </div>

            {/* Featured Product 3 */}
            <div className="preview-card" style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                <img src="/Jarket assortment.png" alt="Handmade Mason Jarket" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.3rem', margin: '0 0 0.25rem 0' }}>Handmade Mason "Jarket"</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>MJ Jarkets</p>
                <Link to="/shop" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', backgroundColor: 'var(--bg-deep-spruce)', color: 'var(--text-alabaster)', fontWeight: 'bold', transition: 'opacity 0.3s' }}>View in Shop</Link>
            </div>

        </div>
    </section>
  </>
);

// --- MAIN APP SHELL ---
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    let lastScrollTop = 0;
    const headerElement = document.getElementById('main-header');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > headerElement.offsetHeight) {
        headerElement.style.transform = 'translateY(-100%)'; 
      } else {
        headerElement.style.transform = 'translateY(0)'; 
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="site-wrapper">
        
        {/* HEADER */}
        <header id="main-header" style={{ transition: 'transform 0.3s ease-in-out', position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--bg-deep-spruce)', padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/">
              <img src="/Logo-Beige-Final.png" alt="e3 Refillery Logo" className="logo" style={{ height: '85px', width: 'auto' }} />
          </Link>
          
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={toggleMenu} style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Home</Link>
              
              <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                  <Link to="/about" className="dropbtn" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>About ▾</Link>
                  <div className="dropdown-content">
                      <Link to="/about#mission" onClick={toggleMenu}>Mission</Link>
                      <Link to="/about#vision" onClick={toggleMenu}>Vision</Link>
                      <Link to="/about#our-story" onClick={toggleMenu}>Our Story</Link>
                      <Link to="/about#how-it-works" onClick={toggleMenu}>The Refill Ethos</Link>
                  </div>
              </div>
              
              <Link to="/find-us" onClick={toggleMenu} style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Find Us</Link>
              <Link to="/faqs" onClick={toggleMenu} style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>FAQs</Link>
              <Link to="/contact" onClick={toggleMenu} style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Contact</Link>
              <Link to="/shop" onClick={toggleMenu} style={{ color: 'var(--text-alabaster)', textDecoration: 'none', fontWeight: 'bold' }}>Shop</Link>
          </nav>
        </header>

        {/* PAGE CONTENT ROUTER */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/find-us" element={<FindUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>

        {/* --- NEWSLETTER SIGNUP BLOCK --- */}
        <section className="newsletter-signup" style={{ 
          backgroundColor: 'rgba(166, 144, 116, 0.1)', 
          padding: '4rem 5%', 
          textAlign: 'center', 
          borderTop: '1px solid rgba(57, 88, 86, 0.1)',
          marginTop: '4rem'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.75rem', marginBottom: '1rem' }}>Keep in the Loop</h3>
            <p style={{ color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
              Subscribe to get updates on new products, upcoming pop-up locations, and tips for a lower-waste home.
            </p>
            
            <form 
              action="https://gmail.us5.list-manage.com/subscribe/post?u=7c134e02bcdafa0f25afe4011&id=699351d548&f_id=00c9afe1f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }} 
            >
              <input 
                type="email" 
                name="EMAIL" 
                id="mce-EMAIL"
                placeholder="Enter your email address" 
                required 
                style={{ 
                  padding: '12px 20px', 
                  borderRadius: '30px', 
                  border: '1px solid #ccc', 
                  minWidth: '250px', 
                  flex: '1 1 auto', 
                  fontSize: '1rem',
                  outline: 'none'
                }} 
              />
              
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                 <input type="text" name="b_7c134e02bcdafa0f25afe4011_699351d548" tabIndex="-1" defaultValue="" />
              </div>

              <button 
                type="submit" 
                name="subscribe" 
                id="mc-embedded-subscribe"
                style={{ 
                  backgroundColor: 'var(--bg-deep-spruce)', 
                  color: 'var(--text-alabaster)', 
                  border: 'none', 
                  padding: '12px 32px', 
                  borderRadius: '30px', 
                  fontWeight: 'bold', 
                  cursor: 'pointer', 
                  fontSize: '1rem',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer" style={{ padding: '4rem 5% 2rem 5%', backgroundColor: 'var(--text-alabaster)', color: 'var(--action-sage)', textAlign: 'center' }}>
          <img src="/Logomark-Teal-Final.png" alt="e3 Refillery Logomark" className="footer-logo" style={{ maxWidth: '100px', margin: '0 auto 1.5rem auto', display: 'block', opacity: 0.9 }} />
          <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>earth, equity, empowerment</p>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            Proud to be one of the many women-led businesses in our community.
          </p>
          <div style={{ borderTop: '1px solid rgba(57, 88, 86, 0.2)', paddingTop: '2rem', marginTop: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>&copy; 2026 e3 refillery.</p>
          </div>
        </footer>

        {/* ANALYTICS IN THE CORRECT SPOT */}
        <Analytics />
      </div>
    </BrowserRouter>
  );
} 

export default App;