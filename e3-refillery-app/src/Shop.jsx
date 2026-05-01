import React, { useState } from 'react';
import './Shop.css';

// --- YOUR INVENTORY DATA ---
const productsData = [
  {
    id: 1,
    name: "Tiani Shampoo Bar",
    category: "Personal Care",
    brand: "Tiani Body Care", 
    location: "Dexter, MI",
    highlights: "Women-owned, Michigan local",
    price: "$16 Full (3.5oz) | $7 Mini (1oz)",
    image: "/Shampoo-Bars.png",
    description: "Very long-lasting, effectively removes build-up, and lathers beautifully to maintain healthy hair follicles. Safe for all hair types (even curly!) and kid-friendly.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender"]
  },
  {
    id: 2,
    name: "Huppy Toothpaste Tablets",
    category: "Personal Care",
    brand: "Huppy",
    location: "California, USA",
    highlights: "AAPI-Owned",
    price: "$9.00 (62 tablets)",
    image: "/Dishwasher.png", /* Placeholder */
    description: "A fluoride-free, zero-waste alternative to traditional paste that naturally whitens, freshens breath, and fights plaque. Made with clean ingredients like peppermint oil, aloe vera extract, and nano-hydroxyapatite to remineralize enamel.",
    ecoImpact: "Eliminates plastic tubes",
    scents: ["Peppermint"]
  },
  {
    id: 3,
    name: "Dishwashing Trio Set",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$28.00",
    image: "/Table%20Top%202.png", /* Placeholder */
    description: "All you need to get started at the kitchen sink! Includes pure castile dish soap, a natural bamboo and sisal pot brush, and an alder wood soap dish.",
    ecoImpact: "Plastic-free, Vegan",
    scents: ["Unscented"]
  },
  {
    id: 4,
    name: "Laundry Stain Stick",
    category: "Laundry Care",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$7.00",
    image: "/Table%20Top%201.png", /* Placeholder */
    description: "This spot-treating super-hero is here to keep your couches, clothes, and even upholstery stain- and toxin-free. A lot of cleaning power is packed into this little stick that lasts forever!",
    ecoImpact: "Biodegradable, Vegan",
    scents: []
  },
  {
    id: 5,
    name: "Alpaca Dryer Balls (Set of 3)",
    category: "Laundry Care",
    brand: "Cotton Creek Farms",
    location: "Thompsonville, MI",
    highlights: "Family-owned, Michigan local, USA-made",
    price: "$22.00",
    image: "/Container.png", /* Placeholder */
    description: "Made from 100% humanely sheared alpaca fiber from our own Michigan farm. Hypoallergenic, dye-free, and chemical-free. Lasts hundreds of loads!",
    ecoImpact: "Saves 25-30% in drying costs",
    scents: []
  },
  {
    id: 6,
    name: "Reusable Paper Towels (Pack of 6)",
    category: "Accessories",
    brand: "Craftinista Girl",
    location: "Farmington Hills, MI",
    highlights: "Women-owned, Michigan local",
    price: "$18.00",
    image: "/whatisarefillery.png", /* Placeholder */
    description: "Made with absorbent flannel material. Each individual towel measures 10\" x 12\". Wash with like items in the washing machine.",
    ecoImpact: "Reduces single-use plastic",
    scents: []
  },
  {
    id: 7,
    name: "Handmade Mason 'Jarket'",
    category: "Accessories",
    brand: "MJ Jarkets",
    location: "Dearborn, MI",
    highlights: "Handmade, Women-owned, Local",
    price: "$6 (16oz) | $8 (32oz)",
    image: "/Container.png", /* Placeholder */
    description: "Protect your mason jar glass with a handmade, colorful 'jarket'. Slip over the bottom of your mason jar to add protection. Machine washable.",
    ecoImpact: "Plastic-free alternative to silicone",
    scents: []
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // 1. Filter by category first
  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  // 2. Group the remaining products by Brand
  const groupedByBrand = filteredProducts.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = {
        location: product.location,
        highlights: product.highlights,
        products: []
      };
    }
    acc[product.brand].products.push(product);
    return acc;
  }, {});

  const categories = ['All', ...new Set(productsData.map(item => item.category))];

  return (
    <div className="shop-page-wrapper">
      <section className="shop-header">
        <h1>Shop Sustainable Goods</h1>
        <p>Clean, safe, and non-toxic products for your home and family. <br/> Supporting our community, one refill at a time.</p>
        <div className="status-badge">Available for in-person refill only at this time.</div>
      </section>

      <div className="shop-filters">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* BRAND SPOTLIGHT LAYOUT */}
      <div className="brand-spotlight-container">
        {Object.entries(groupedByBrand).map(([brandName, brandInfo]) => (
          <div key={brandName} className="brand-block">
            
            {/* The Big Editorial Brand Header */}
            <div className="brand-banner">
              <div className="brand-banner-content">
                <h2>{brandName}</h2>
                <div className="brand-tags">
                  <span className="location-tag">📍 {brandInfo.location}</span>
                  <span className="highlight-tag">✨ {brandInfo.highlights}</span>
                </div>
              </div>
            </div>

            {/* The Brand's Specific Products */}
            <div className="product-grid-container">
              {brandInfo.products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <div className="product-meta">
                      <span className="product-category">{product.category}</span>
                      <span className="eco-impact">🌱 {product.ecoImpact}</span>
                    </div>
                    
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    
{/* Only show the scents container if there are scents available */}
                    {product.scents && product.scents.length > 0 && (
                      <div className="scents-container">
                        <span className="scents-label">Scents:</span>
                        <div className="scent-tags">
                          {product.scents.map((scent, index) => (
                            <span key={index} className="scent-tag">{scent}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="product-footer">
                      <span className="product-price">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;