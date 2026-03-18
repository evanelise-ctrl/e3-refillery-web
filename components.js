// --- GLOBAL HEADER CODE ---
const headerHTML = `
    <header id="main-header">
        <a href="index.html">
            <img src="public/Logo-Beige-Final.png" alt="e3 Refillery Logo" class="logo">
        </a>
        <nav>
            <a href="index.html">Home</a>
            <div class="dropdown">
                <a href="about.html" class="dropbtn">About</a>
                <div class="dropdown-content">
                    <a href="about.html#mission">Mission</a>
                    <a href="about.html#vision">Vision</a>
                    <a href="about.html#our-story">Our Story</a>
                    <a href="about.html#how-it-works">The Refill Ethos</a>
                </div>
            </div>
            <a href="find-us.html">Find Us</a>
            <a href="faqs.html">FAQs</a>
            <a href="contact.html">Contact</a>
            <a href="shop.html">Shop</a>
        </nav>
    </header>
`;

// --- GLOBAL FOOTER CODE ---
const footerHTML = `
    <footer>
        <img src="public/Logomark-Beige-Final.png" alt="e3 Refillery Logomark" class="footer-logo" style="max-width: 100px; margin: 0 auto 1.5rem auto; display: block; opacity: 0.9;">
        <p>Earth, Equity, Empowerment</p>
        <p>Proud to be one of the many women and BIPOC-led businesses in our community.</p>
    </footer>
`;

// --- INJECT COMPONENTS INTO PAGES ---
// Running this function immediately ensures it doesn't miss the page load event
function initGlobalComponents() {
    // Find the empty divs on the page
    const headerPlaceholder = document.getElementById('global-header');
    const footerPlaceholder = document.getElementById('global-footer');

    // Inject the Header
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        
        // Setup the smart scroll animation now that the header exists
        let lastScrollTop = 0;
        const headerElement = document.getElementById('main-header');
        
        if (headerElement) {
            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop && scrollTop > headerElement.offsetHeight) {
                    headerElement.style.transform = 'translateY(-100%)'; 
                } else {
                    headerElement.style.transform = 'translateY(0)'; 
                }
                lastScrollTop = scrollTop;
            });
        }
    }

    // Inject the Footer
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Fire the injection instantly!
initGlobalComponents();