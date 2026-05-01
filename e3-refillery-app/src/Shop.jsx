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
    name: "Tiani Conditioner Bar",
    category: "Personal Care",
    brand: "Tiani Body Care",
    location: "Dexter, MI",
    highlights: "Women-owned, Michigan local",
    price: "$17 Full (3.5oz) | $8 Mini (1oz)",
    image: "/Table%20Top%201.png",
    description: "Packed with hair-friendly nutrients & salon-quality ingredients! Made with Vitamin E, jojoba, tucuma butter, and chamomile butter. Leaves hair detangled, light, and non-greasy.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender"]
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
                    
                    <div className="scents-container">
                      <span className="scents-label">Scents:</span>
                      <div className="scent-tags">
                        {product.scents.map((scent, index) => (
                          <span key={index} className="scent-tag">{scent}</span>
                        ))}
                      </div>
                    </div>

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