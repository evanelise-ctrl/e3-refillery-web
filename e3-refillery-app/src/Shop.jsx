import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  // --- PRODUCT DATA ARRAY ---
  const products = [
    {
      id: 1,
      name: 'Dishwasher Detergent',
      price: '$0.40 / oz',
      category: 'Home Care',
      image: '/Dishwasher.png', 
      buttonText: '+ SELECT SIZE'
    },
    {
      id: 2,
      name: 'Nourishing Shampoo Bar',
      price: '$12.00 / bar',
      category: 'Personal Care',
      image: '/Shampoo-Bars.png',
      buttonText: '+ SELECT SIZE'
    },
    {
      id: 3,
      name: 'Mint Toothpaste Tabs',
      price: '$0.15 / tab',
      category: 'Personal Care',
      image: '/toothpaste-tabs.png',
      buttonText: '+ SELECT SIZE'
    },
    {
      id: 4,
      name: 'Reusable Glass Container',
      price: '$6.00',
      category: 'Containers',
      image: '/Container.png',
      buttonText: '+ ADD TO CART'
    },
    {
      id: 5,
      name: 'Unscented Laundry Detergent',
      price: '$0.35 / oz',
      category: 'Home Care',
      image: '/Table Top 1.png', /* Temporary placeholder */
      buttonText: '+ SELECT SIZE'
    },
    {
      id: 6,
      name: 'Lavender Hand Soap',
      price: '$0.45 / oz',
      category: 'Home Care',
      image: '/Table Top 2.png', /* Temporary placeholder */
      buttonText: '+ SELECT SIZE'
    }
  ];

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="shop-page-container">
      
      {/* HERO SECTION */}
      <section className="shop-hero">
        <h1>Shop Sustainable Goods</h1>
        <p>Clean, safe, and non-toxic products for your home and family. Order by the ounce to fill your own containers or purchase our reusable premium jars.</p>
      </section>

      {/* INFO BANNERS */}
      <div className="shop-banners">
        {/* Banner 1: Delivery Icon */}
        <div className="banner info-banner">
          <img src="/e3-icon-delivery-beige.png" alt="" aria-hidden="true" className="banner-custom-icon" />
          <p><strong>Pop-Up Refills:</strong> Order online and pick up at our next community event, or bring your empty e3 jars for in-person refills!</p>
        </div>

        {/* Banner 2: App Install */}
        <div className="banner app-banner">
          <div className="app-banner-text">
            <img src="/e3-icon-calendar-teal.png" alt="" aria-hidden="true" className="banner-custom-icon" />
            <div>
              <strong>Make Refilling Easier</strong>
              <p>Install the e3 Refillery app on your phone for quick, one-tap recurring orders.</p>
            </div>
          </div>
          <button className="btn-app-install">INSTALL APP</button>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="shop-filters">
        {['All Products', 'Home Care', 'Personal Care', 'Containers'].map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <section className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="btn-add-cart">{product.buttonText}</button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Shop;