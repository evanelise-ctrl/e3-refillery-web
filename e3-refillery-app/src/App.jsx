import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './style.css';
import FindUs from './FindUs';
import Contact from './Contact';
import Faqs from './Faqs';
import Shop from './Shop';

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

// --- PLACEHOLDER PAGES ---
const About = () => (
  <>
    {/* BOLD MISSION SECTION (Framed) */}
    <section id="mission" className="about-section">
      <div className="mission-wrapper">
        <img src="/Web%20Icons-LeafAccentTop-gold.png" className="frame-leaf top-left" alt="" aria-hidden="true" />
        <img src="/Web%20Icons-LeafAccentBottom-gold.png" className="frame-leaf bottom-right" alt="" aria-hidden="true" />
        
        <div className="mission-box">
          <h1>Our Mission</h1>
          <p className="mission-statement">We are a refillery that exists to make sustainable living accessible to all. We are committed to reducing single-use plastics, providing clean, non-toxic and eco-conscious products made exclusively by women, BIPOC or U.S. businesses.</p>
        </div>
      </div>
    </section>

    {/* OUR STORY SECTION */}
    <section id="our-story" className="about-section our-story-layout" style={{ display: 'flex', gap: '4rem', padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="story-sidebar" style={{ flex: '1', textAlign: 'center' }}>
        <img src="/anna.png" alt="Anna Dewey, Founder" className="founder-img" style={{ width: '100%', maxWidth: '300px', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
        <h3 className="founder-name" style={{ color: 'var(--text-alabaster)', fontSize: '1.75rem', marginBottom: '0.25rem' }}>Anna Dewey</h3>
        <p className="founder-title" style={{ color: 'var(--text-alabaster)', fontSize: '1.1rem', opacity: '0.9' }}>Founder & Owner<br /><strong>e3 refillery LLC</strong></p>
      </div>
      
      <div className="story-content" style={{ flex: '2' }}>
        <h2 style={{ color: 'var(--text-alabaster)', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Story</h2>
        
        <div className="unified-story-card">
          <p>My whole family has sensitive skin - and I wasn't feeling great about all the ingredients and chemicals I was using to wash our clothes. In 2018 I began experimenting <strong>making my own laundry detergent</strong> at home.</p>
          
          <h4>Benefits:</h4>
          <ul>
            <li>I chose what (safe!) ingredients to use</li>
            <li>Made a concentrated batch</li>
            <li>Re-used my own jug to refill</li>
            <li>Saved money by not buying diluted product</li>
            <li>Wasn't buying single-use plastic that may - or may not <em>actually</em> get recycled</li>
          </ul>

          <p>But even great ideas aren't always sustainable. In my case, it came at a cost that I really couldn't afford - <strong>time</strong>. With 3 kids under the age of 12 we had A LOT of laundry. Also dishes, messy rooms, busy extra-curricular activities, and oh yeah, family time that was more valuable than me grating up bars of soap into flakes every month. <strong>I had to outsource.</strong></p>

          <p>I found out that something called a "<strong>refillery</strong>" existed and trekked out to see for myself. This place was <strong>MAGICAL</strong>. I wanted to live there. They had done a brilliant job of curating <strong>clean, trust-worthy</strong> essentials like laundry detergent, shampoo, soap, and other products with <strong>non-toxic ingredients</strong> and without all the extra junky plastic packaging that piles up in landfills. A win/win for my tree-hugging heart!</p>
        </div>
      </div>
    </section>

    {/* VISION SECTION */}
    <section id="vision" className="about-section split-layout split-reverse" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '4rem', padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="split-image" style={{ flex: '1' }}>
        <img src="/Table%20Top%202.png" alt="e3 Refillery Products" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.15)' }} />
      </div>
      <div className="split-content" style={{ flex: '1' }}>
        <h2 style={{ color: 'var(--text-alabaster)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Vision</h2>
        <p style={{ color: 'var(--text-alabaster)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem', opacity: '0.9' }}>Our refillery envisions a world where we have eliminated single-use plastics and packaging waste from regularly consumed household products.</p>
        <p style={{ color: 'var(--text-alabaster)', fontSize: '1.15rem', lineHeight: '1.8', opacity: '0.9' }}>Sustainable products that are clean, safe and non-toxic for our families should be accessible to all consumers. We look forward to a more equitable economy, where supporting businesses that are women or BIPOC owned is our community’s first priority.</p>
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
          <p style={{ color: 'var(--text-alabaster)', opacity: '0.9', lineHeight: '1.6' }}>We offer two sizes of premium, reusable containers. Purchase once to enter the loop.</p>
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

// --- YOUR HOMEPAGE CONTENT ---
const Home = () => (
  <>
    <section className="hero-full-bleed" style={{ backgroundImage: "url('/Table%20Top%201.png')" }}>
        <div className="hero-overlay-box">
            <h1>Green living, within reach.</h1>
            <p>Reduce single-use plastics by refilling your favorite household and personal care products. Bring your own container, or grab one of ours!</p>
            <br />
            <Link to="/find-us" className="btn-primary">Find Us</Link>
        </div>
    </section>

    <section className="what-is-refillery" style={{ textAlign: 'center', maxWidth: '800px', margin: '5rem auto', padding: '0 1.5rem' }}>
        <h2 style={{ color: 'var(--surface-camel)', fontSize: '2.25rem', marginBottom: '1.5rem' }}>What is a Refillery?</h2>
        <p style={{ fontSize: '1.15rem', opacity: '0.9', lineHeight: '1.8' }}>A refillery is a sustainable alternative to traditional shopping. Instead of buying a new plastic bottle every time you run out of soap or laundry detergent, you simply bring your own empty containers (or grab one of our reusable ones) and fill them up! It's an easy, cost-effective way to eliminate single-use plastics from your daily routine while keeping your home stocked with clean, non-toxic products.</p>
    </section>

    <section className="how-it-works">
        <div className="step">
            <img src="/e3-icon-jar-beige.png" alt="Jar container icon" />
            <h3>1. Choose a Container</h3>
            <p>We offer two sizes of premium, reusable containers. Purchase once to enter the loop.</p>
        </div>
        <div className="step">
            <img src="/e3-icon-pump-bottle-beige.png" alt="Pump bottle icon" />
            <h3>2. Fill & Enjoy</h3>
            <p>Fill it up with our selection of eco-friendly home and personal care goods.</p>
        </div>
        <div className="step">
            <img src="/e3-icon-recycle-beige.png" alt="Recycle loop icon" />
            <h3>3. The Closed Loop</h3>
            <p>Return your empty for a freshly cleaned, sanitized, and refilled container. Zero waste.</p>
        </div>
    </section>

    <section className="three-es-section">
        <div className="three-es-header">
            <h2>The 3 e's</h2>
            <p>Our name is our promise: Earth, Equity, and Empowerment.</p>
        </div>
        <div className="feature-row">
            <div className="feature-img-container">
                <img src="/earth-image.jpg" alt="Earth conscious products" onError={(e) => {e.target.src="/Container.png"}} />
            </div>
            <div className="feature-text">
                <h3>e = earth</h3>
                <p>We exclusively source goods from makers that responsibly produce safe, healthy, and earth-conscious products with little to no packaging waste. By bringing your own container—or using a free, sanitized donated jar—you refill from our bulk supply and pay only for the weight of the product inside. This "closed loop" practice cuts out unnecessary plastic with every single purchase.</p>
            </div>
        </div>
        <div className="feature-row reverse">
            <div className="feature-img-container">
                <img src="/equity-image.jpg" alt="Equitable community" onError={(e) => {e.target.src="/Table%20Top%202.png"}} />
            </div>
            <div className="feature-text">
                <h3>e = equity</h3>
                <p>Sustainable living isn't a fad, and it shouldn't be reserved for an elite group. Everyone deserves access to clean, non-toxic, eco-friendly products. In the spirit of reparations, we offer tiered pricing to provide traditionally marginalized communities the option to purchase high-quality products at an equitable rate, alongside "pay it forward" opportunities to uplift one another.</p>
            </div>
        </div>
        <div className="feature-row">
            <div className="feature-img-container">
                <img src="/empowerment-image.jpg" alt="Empowered small businesses" onError={(e) => {e.target.src="/Table%20Top%201.png"}} />
            </div>
            <div className="feature-text">
                <h3>e = empowerment</h3>
                <p>It's hard to compete with the pricing and mass production of big box stores, but when small businesses thrive, our community thrives. We proudly source primarily from women and BIPOC-owned businesses, alongside U.S. businesses with the highest standards for safe ingredients. We are committed to forming ethical partnerships that elevate and expand their reach.</p>
            </div>
        </div>
    </section>

    <section className="featured-products" style={{ backgroundColor: 'var(--text-alabaster)', color: 'var(--bg-deep-spruce)', padding: '5rem 5%', margin: '4rem auto', maxWidth: '1200px', textAlign: 'center', borderRadius: '20px' }}>
        <h2 style={{ color: 'var(--bg-deep-spruce)', fontSize: '2.25rem', marginBottom: '1rem' }}>A Peek at Our Goods</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem', opacity: '0.9' }}>We stock premium, eco-conscious essentials from brands that care about your health and the planet.</p>
        <div className="product-preview-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="preview-card" style={{ textAlign: 'center' }}>
                <img src="/Dishwasher.png" alt="Home Care" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Home Care</h3>
                <p style={{ opacity: '0.8', fontSize: '0.95rem' }}>Laundry, dishwashing, and cleaning.</p>
            </div>
            <div className="preview-card" style={{ textAlign: 'center' }}>
                <img src="/Shampoo-Bars.png" alt="Personal Care" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Personal Care</h3>
                <p style={{ opacity: '0.8', fontSize: '0.95rem' }}>Soaps, shampoos, and body wash.</p>
            </div>
            <div className="preview-card" style={{ textAlign: 'center' }}>
                <img src="/Container.png" alt="Premium Containers" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                <h3 style={{ color: 'var(--bg-deep-spruce)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Premium Containers</h3>
                <p style={{ opacity: '0.8', fontSize: '0.95rem' }}>Beautiful, reusable glass and aluminum.</p>
            </div>
        </div>
    </section>
  </>
);

// --- MAIN APP SHELL ---
function App() {
  // Scroll Animation
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
          
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link to="/" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Home</Link>
              
              <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                  <Link to="/about" className="dropbtn" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>About ▾</Link>
                  <div className="dropdown-content">
                      <Link to="/about#mission">Mission</Link>
                      <Link to="/about#vision">Vision</Link>
                      <Link to="/about#our-story">Our Story</Link>
                      <Link to="/about#how-it-works">The Refill Ethos</Link>
                  </div>
              </div>
              
              <Link to="/find-us" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Find Us</Link>
              <Link to="/faqs" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>FAQs</Link>
              <Link to="/contact" style={{ color: 'var(--text-alabaster)', textDecoration: 'none' }}>Contact</Link>
              <Link to="/shop" style={{ color: 'var(--text-alabaster)', textDecoration: 'none', fontWeight: 'bold' }}>Shop</Link>
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

        {/* FOOTER */}
        <footer className="site-footer" style={{ padding: '4rem 5% 2rem 5%', backgroundColor: 'var(--text-alabaster)', color: 'var(--bg-deep-spruce)', textAlign: 'center', marginTop: '5rem' }}>
          <img src="/Logomark-Teal-Final.png" alt="e3 Refillery Logomark" className="footer-logo" style={{ maxWidth: '100px', margin: '0 auto 1.5rem auto', display: 'block', opacity: 0.9 }} />
          <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Earth, Equity, Empowerment</p>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
            Proud to be one of the many women and BIPOC-led businesses in our community.
          </p>
          <div style={{ borderTop: '1px solid rgba(57, 88, 86, 0.2)', paddingTop: '2rem', marginTop: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>&copy; 2026 e3 Refillery.</p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;