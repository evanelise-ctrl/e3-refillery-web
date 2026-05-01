import React, { useState } from 'react';
import './Shop.css';

// --- YOUR INVENTORY DATA (Now with real images!) ---
const productsData = [
  {
    id: 1,
    name: "Tiani Shampoo Bar",
    category: "Personal Care",
    brand: "Tiani Body Care", 
    location: "Dexter, MI",
    highlights: "Women-owned, Michigan local",
    price: "$16 Full (3.5oz) | $7 Mini (1oz)",
    image: "/tiani_shampoo_bar.png",
    description: "Very long-lasting, effectively removes build-up, and lathers beautifully to maintain healthy hair follicles. Safe for all hair types.",
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
    image: "/tiani_conditioner_bar.png",
    description: "Packed with hair-friendly nutrients! Made with Vitamin E, jojoba, tucuma butter, and chamomile butter. Leaves hair detangled, light, and non-greasy.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender"]
  },
  {
    id: 3,
    name: "Laundry Powder",
    category: "Laundry Care",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$0.35 / oz",
    image: "/mamasuds_laundry_powder.png",
    description: "A powerful, safe, and non-toxic laundry powder that is tough on stains but gentle on sensitive skin and the environment.",
    ecoImpact: "Plastic-free, Vegan",
    scents: ["Unscented", "Lemon"]
  },
  {
    id: 4,
    name: "Ultimate Unsponge",
    category: "Accessories",
    brand: "Modern Cottage NC",
    location: "Nevada City, CA",
    highlights: "Women & Indigenous-owned",
    price: "$8.00",
    image: "/ultimate-unsponge.png",
    description: "A quilted, washable, reusable household sponge made from all-natural fabrics and fibers. 100% cotton on one side, burlap on the other.",
    ecoImpact: "Zero-waste, plastic-free",
    scents: []
  },
  {
    id: 5,
    name: "Wooden Soap Dish",
    category: "Accessories",
    brand: "Howells Wood Products",
    location: "Redmond, OR",
    highlights: "Handmade, eco-friendly",
    price: "$5.00",
    image: "/howells-wood-soap-dish.png",
    description: "Handmade out of red alder wood. The original design prevents soap from sticking, and deep channels allow water to quickly run off.",
    ecoImpact: "Plastic-free",
    scents: []
  },
  {
    id: 6,
    name: "Sisal Soap Saver Bag",
    category: "Accessories",
    brand: "Four Peaks Soapery",
    location: "New Mexico",
    highlights: "Handmade, Woman/Veteran-owned",
    price: "$4.00",
    image: "/sisal_soap_saver.png",
    description: "Slip your soap bar or broken pieces inside to prolong the life of the soap. Creates an excellent lather and gently exfoliates.",
    ecoImpact: "Biodegradable, compostable",
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
    image: "/Jarket assortment.png",
    description: "Protect your mason jar glass with a handmade, colorful 'jarket'. Slip over the bottom of your mason jar to add protection. Machine washable.",
    ecoImpact: "Plastic-free alternative to silicone",
    scents: []
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products by category (No more brand grouping!)
  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

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

      {/* FLAT PRODUCT GRID */}
      <div className="product-grid-container">
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
              
              {/* NEW MAKER BLOCK INSIDE THE CARD */}
              <div className="maker-block">
                <p className="maker-name">{product.brand}</p>
                <div className="maker-tags">
                  <span className="maker-location">📍 {product.location}</span>
                  <span className="maker-highlight">✨ {product.highlights}</span>
                </div>
              </div>
              
              <p className="product-description">{product.description}</p>
              
              {/* Conditional Scents Rendering */}
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
  );
};

export default Shop;