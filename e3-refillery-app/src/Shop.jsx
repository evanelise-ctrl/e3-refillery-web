import React, { useState } from 'react';
import './Shop.css';

// --- YOUR INVENTORY DATA ---
const productsData = [
  {
    id: 1,
    name: "Tiani Shampoo Bar",
    category: "Personal Care",
    maker: "Tiani Body Care | Dexter, MI",
    price: "$16 Full (3.5oz) | $7 Mini (1oz)",
    image: "/Shampoo-Bars.png",
    description: "Very long-lasting, effectively removes build-up, and lathers beautifully to maintain healthy hair follicles and a moisturized scalp. Safe for all hair types (even curly!) and kid-friendly.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender (Mini)"]
  },
  {
    id: 2,
    name: "Tiani Conditioner Bar",
    category: "Personal Care",
    maker: "Tiani Body Care | Dexter, MI",
    price: "$17 Full (3.5oz) | $8 Mini (1oz)",
    image: "/Table%20Top%201.png",
    description: "Packed with hair-friendly nutrients & salon-quality ingredients! Made with Vitamin E, jojoba, tucuma butter, and chamomile butter. Leaves hair detangled, light, and non-greasy.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender (Mini)"]
  }
  // You can continue adding her other products here following this exact format!
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  const categories = ['All', ...new Set(productsData.map(item => item.category))];

  return (
    <div className="shop-page-wrapper">
      
      <section className="shop-header">
        <h1>Our Goods</h1>
        <p>Browse our curated selection of clean, non-toxic essentials. <br/> Bring your own container to the refillery, or grab one of ours!</p>
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

      <section className="product-grid-container">
        {filteredProducts.map(product => (
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
              <p className="product-maker">{product.maker}</p>
              
              <p className="product-description">{product.description}</p>
              
              <div className="scents-container">
                <span className="scents-label">Available in:</span>
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
      </section>

    </div>
  );
};

export default Shop;