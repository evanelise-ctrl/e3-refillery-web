import React, { useState } from 'react';
import './Shop.css';

// --- YOUR INVENTORY DATA (Fully updated with Starter Kits, Containers & Spouts!) ---
const productsData = [
  // --- PERSONAL CARE ---
  {
    id: 1,
    name: "Tiani Shampoo Bar",
    category: "Personal Care",
    brand: "Tiani Body Care", 
    location: "Dexter, MI",
    highlights: "Women-owned, Michigan local",
    price: "$16 Full (3.5oz) | $7 Mini (1oz)",
    image: "/tiani_shampoo_bar.png",
    description: "Very long-lasting, effectively removes build-up, and lathers beautifully to maintain healthy hair follicles. Safe for all hair types (even curly!) and kid-friendly.",
    ecoImpact: "Saves 2-3 plastic bottles",
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender"],
    ingredients: "Grapefruit Patchouli: Sodium Cocoyl Isethionate, Organic Cocoa Butter, Cetyl Alcohol, Cupuacu Butter, Sweet Orange Essential Oil, Lemon Peel Powder, Pro-Vitamin B5, Organic Coconut Oil, Grapefruit Essential Oil, Patchouli Essential Oil, Calendula Oil, Aritha Powder, Shikakai Powder, Lemongrass Essential Oil, Chamomile Oil, Rose Clay, Beet Root Powder, Rosemary Extract, Vitamin E.\n\nLemongrass: Sodium Cocoyl Isethionate, Organic Cocoa Butter, Cetyl Alcohol, Cupuacu Butter, Lemongrass Essential Oil, Lemon Peel Powder, Pro-Vitamin B5, Calendula Oil, Aritha Powder, Shikakai Powder, Chamomile Oil, Turmeric Powder, Rosemary Extract, Vitamin E.\n\nOrange Clove: Sodium Cocoyl Isethionate, Organic Cocoa Butter, Cetyl Alcohol, Cupuacu Butter, Lemon Peel Powder, Pro-Vitamin B5, Organic Coconut Oil, Orange Essential Oil, Calendula Oil, Aritha Powder, Shikakai Powder, Chamomile Oil, Clove Essential Oil, Cardamom Essential Oil, Annatto Powder, Rosemary Extract, Vitamin E.\n\nEnglish Lavender: Sodium Cocoyl Isethionate, Organic Cocoa Butter, Cetyl Alcohol, Cupuacu Butter, English Lavender Essential Oil, Lemon Peel Powder, Pro-Vitamin B5, Organic Coconut Oil, Calendula Oil, Aritha Powder, Shikakai Powder, Chamomile Oil, Rose Kaolin Clay, Indigo Plant Powder, Rosemary Extract, Vitamin E."
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
    scents: ["Grapefruit Patchouli", "Lemongrass", "Orange Clove", "English Lavender"],
    ingredients: "Grapefruit Patchouli: BTMS-50, Jojoba Oil, Tucuma Butter, Cetyl Alcohol, Stearic Acid, Chamomile Butter, Hydrolyzed Rice Protein, DL-Panthenol, Cyclomethicone, Vitamin E, Sweet Orange Essential Oil, Patchouli Essential Oil, Grapefruit Essential Oil, Lemongrass Essential Oil, Optiphen, Madder Root Powder.\n\nLemongrass: BTMS-50, Jojoba Oil, Tucuma Butter, Cetyl Alcohol, Stearic Acid, Chamomile Butter, Hydrolyzed Rice Protein, DL-Panthenol, Cyclomethicone, Vitamin E, Lemongrass Essential Oil, Optiphen, Turmeric Powder.\n\nOrange Clove: BTMS-50, Jojoba Oil, Tucuma Butter, Cetyl Alcohol, Stearic Acid, Chamomile Butter, Hydrolyzed Rice Protein, DL-Panthenol, Cyclomethicone, Vitamin E, Orange Essential Oil, Clove Essential Oil, Brazilian Red Clay, Optiphen, Activated Charcoal.\n\nEnglish Lavender: BTMS-50, Jojoba Oil, Tucuma Butter, Cetyl Alcohol, Stearic Acid, Chamomile Butter, Hydrolyzed Rice Protein, DL-Panthenol, Cyclomethicone, Vitamin E, Lavender Essential Oil, Rose Kaolin Clay, Optiphen, Organic Indigo Powder."
  },
  {
    id: 3,
    name: "Huppy Toothpaste Tablets",
    category: "Personal Care",
    brand: "Huppy",
    location: "California, USA",
    highlights: "AAPI-Owned",
    price: "Refills: $9.00 (1mo) | $18.00 (2mo)",
    image: "/huppy_toothpaste.png", 
    description: "A fluoride-free, zero-waste alternative to traditional paste that naturally whitens, freshens breath, and fights plaque. Made with clean ingredients like peppermint oil, aloe vera extract, and nano-hydroxyapatite.\n\nStarters (includes premium jar): 1 Month Supply ($10.50) | 2 Month Supply ($20.00).",
    ecoImpact: "Eliminates plastic tubes",
    scents: ["Peppermint"],
    ingredients: "Xylitol, Calcium Carbonate, Nano-Hydroxyapatite (5% Concentration), Bentonite Clay, Natural Mint Flavor, Sodium Lauryl Sulfoacetate, Caesalpinia Spinosa (Tara) Gum, Hydroxypropyl Cellulose, Silicon Dioxide, Zinc Citrate, Menthol*, Sodium Bicarbonate, Ammonium Glycyrrhizate, Cocamidopropyl Betaine, Mentha Piperita Oil*, Cocos Nucifera Oil*, Aloe Barbadensis Extract*, Melaleuca Alternifolia Oil*. *Organic."
  },
  {
    id: 4,
    name: "Artisan Bar Soap",
    category: "Personal Care",
    brand: "Lincoln Street Soap",
    location: "Dearborn, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$9.00 (4oz bar)",
    image: "/lincolnst_oatmeal_soap.png",
    description: "Crafted with natural ingredients and wrapped in sustainable, minimal packaging. Designed for those who value clean beauty and a lighter environmental footprint. Rich lather, long-lasting bars.",
    ecoImpact: "Sustainable, minimal packaging",
    scents: ["Oatmeal", "Almond", "Bergamot & Sandalwood"],
    ingredients: "Oatmeal: Avocado, castor, coconut, olive oils; shea butter; colloidal oats.\n\nAlmond: Olive oil, coconut oil, almond oil, rice bran oil, castor oil, shea butter, fragrance (bitter almond & soft orange notes).\n\nBergamot and Sandalwood: Avocado oil, castor oil, coconut oil, olive oil, shea butter, bergamot essential oil, Egyptian sandalwood fragrance."
  },

  // --- CLEANING ---
  {
    id: 5,
    name: "Dishwashing Trio Set",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$28.00",
    image: "/mamasuds_solid_dish_soap.png", 
    description: "All you need to get started at the kitchen sink! Includes pure castile dish soap, a natural bamboo and sisal pot brush, and an alder wood soap dish.",
    ecoImpact: "Plastic-free, Vegan",
    scents: ["Unscented"],
    ingredients: "Sodium Olivate (saponified olive oil). Free of any synthetic ingredients."
  },
  {
    id: 6,
    name: "Toilet Bomb Cleaning Tabs",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$15.00 (10 pack)",
    image: "/mamasuds-toilet-refil-bag.png",
    description: "PLOP. FIZZ. SCRUB. FLUSH. Naturally. A safer, smarter way to keep your bathroom fresh, made from scratch with simple, honest ingredients that work.",
    ecoImpact: "Plastic-free, Leaping Bunny Certified",
    scents: ["Peppermint, Tea Tree & Lemon"],
    ingredients: "Sodium bicarbonate, non-GMO citric acid, water, essential oils of organic peppermint, tea tree + lemon. Safe for septic systems."
  },
  {
    id: 7,
    name: "All Purpose Cleaner Spray",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "Refills: $3.50 (14oz)",
    image: "/mamasuds_all_purpose.png",
    description: "This cleaner is good for sinks, counters, doorknobs, stove-tops, garbage lids, etc. Safe for natural stone and granite.\n\nStarters: 14oz Basic ($6.00) includes regular mouth pint jar & lid. 14oz Starter Plus ($12.99) adds a reCAP mason sprayer attachment.",
    ecoImpact: "Biodegradable, Vegan",
    scents: ["Clove, Cinnamon, Lemon & Eucalyptus"],
    ingredients: "Water, MamaSuds handcrafted Castile Soap (potassium olivate), organic whole leaf aloe vera gel juice with citric acid*, pure essential oils of clove bud, organic cinnamon leaf, lemon, eucalyptus radiata, and rosemary."
  },
  {
    id: 8,
    name: "Dishwasher Tabs",
    category: "Cleaning",
    brand: "Green Llama",
    location: "Johnson City, TN",
    highlights: "Woman-owned, EWG Verified",
    price: "$0.52 per tablet",
    image: "/green_llama_dishwasher_tabs.png", 
    description: "Sparkling dishes. Zero plastic. 100% peace of mind. Deliver powerful, mineral and plant-based cleaning in plastic-free, compostable packaging.",
    ecoImpact: "Zero Waste, No PVA or microplastics",
    scents: ["Unscented"],
    ingredients: "Sodium Carbonate, Sodium Percarbonate, Citric Acid, Sodium Metasilicate, Polyitaconic acid, TAED, Sodium Lauryl Sulfoacetate, Amylase, Protease."
  },
  {
    id: 9,
    name: "All-Purpose Cleaning Tablet",
    category: "Cleaning",
    brand: "Green Llama",
    location: "Johnson City, TN",
    highlights: "Woman-owned, EWG Verified",
    price: "$3.00 (2 tablets)",
    image: "/green_llama_glass_cleaner.png", 
    description: "Expertly formulated with natural, non-toxic ingredients. Your surfaces will be left impeccably clean with no harsh chemicals. Dissolve 2 tablets in 16oz of water.",
    ecoImpact: "Compostable packaging, zero plastic",
    scents: ["Lemongrass & Geranium"],
    ingredients: "Citric acid, Citrus Essential Oil Blend, Sodium Benzoate, Sodium Carbonate, Sodium Coco Sulfate, Sorbitol."
  },
  {
    id: 10,
    name: "Castile Soap",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "Refills: $6.86 (14oz) | $14.70 (30oz)",
    image: "/mama_suds_logo.png", 
    description: "Staying true to traditional soap-making, this is one of the best natural and bio-degradable soaps available. Perfect for washing body, laundry, hair, and shaving.\n\nStarters: 14oz Basic ($9.36) | 14oz Starter Plus with reCAP pump ($14.99) | 30oz Basic ($18.45).",
    ecoImpact: "Biodegradable, Leaping Bunny",
    scents: ["Unscented", "Lemon"],
    ingredients: "Water, 100% Castile potassium olivate (saponified olive oil) - no palm, no coconut, no synthetic blends. (Optional lemon essential oil for scented version)."
  },
  {
    id: 20,
    name: "Glass Cleaner Tablet",
    category: "Cleaning",
    brand: "Green Llama",
    location: "Johnson City, TN",
    highlights: "Woman-owned, EWG Verified",
    price: "Price TBD", 
    image: "/green_llama_glass_cleaner.png", 
    description: "Achieve brilliantly clean, streak-free windows and glass surfaces all while prioritizing the well-being of our planet. Simply dissolve 1 tablet in 16oz of warm water.",
    ecoImpact: "Compostable packaging, zero plastic",
    scents: ["Citrus"],
    ingredients: "Sodium Gluconate."
  },

  // --- LAUNDRY CARE ---
  {
    id: 11,
    name: "Powder Laundry Soap",
    category: "Laundry Care",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "Refills starting at $3.08",
    image: "/mamasuds_laundry_powder.png",
    description: "Discover a laundry detergent that truly cares for your clothes, your family, and the planet. Powerful, nontoxic laundry detergent made with simple, natural ingredients.",
    ecoImpact: "Biodegradable, Leaping Bunny Certified",
    scents: ["Unscented"],
    ingredients: "Sodium carbonate, sodium percarbonate, sodium olivate (saponified olive oil)."
  },
  {
    id: 12,
    name: "Liquid Laundry Soap",
    category: "Laundry Care",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "Refills: $5.04 (14oz) | $10.80 (30oz)",
    image: "/mamasuds_liquid_laundry_soap.png", 
    description: "Formulated based on the owner's need for a laundry soap that would clean cloth diapers but be gentle enough to not irritate her baby's skin. Gentle, safe, and effective. (14oz = approx 28 TBSP | 30oz = approx 60 TBSP).\n\nStarters: 14oz Basic ($7.79) | 14oz Starter Plus with Brewing America pour spout ($14.00) | 30oz Basic ($14.55) | 30oz Starter Plus with Brewing America pour spout ($20.00).",
    ecoImpact: "Biodegradable, Refillable",
    scents: ["Unscented", "Lavender"],
    ingredients: "Unscented: Water, potassium olivate (saponified olive oil), sodium carbonate, and sodium borate.\n\nLavender: Water, potassium olivate (saponified olive oil), sodium carbonate, sodium borate, lavender essential oil."
  },
  {
    id: 13,
    name: "Laundry Stain Stick",
    category: "Laundry Care",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    price: "$7.00",
    image: "/mama_suds_logo.png", 
    description: "This spot-treating super-hero is here to keep your couches, clothes, and even upholstery stain- and toxin-free. A lot of cleaning power is packed into this little stick that lasts forever!",
    ecoImpact: "Biodegradable, Vegan",
    scents: ["Unscented"],
    ingredients: "Sodium olivate (saponified olive oil). Palm free, coconut free, SLS-free, dye-free, phthalate free."
  },
  {
    id: 14,
    name: "Alpaca Dryer Balls (Set of 3)",
    category: "Laundry Care",
    brand: "Cotton Creek Farms",
    location: "Thompsonville, MI",
    highlights: "Family-owned, Michigan local",
    price: "$22.00",
    image: "/alpaca_dryer_balls.png", 
    description: "Made from 100% humanely sheared alpaca fiber from our own Michigan farm. Hypoallergenic, dye-free, and chemical-free. Lasts hundreds of loads!",
    ecoImpact: "Saves 25-30% in drying costs",
    scents: []
  },

  // --- ACCESSORIES ---
  {
    id: 15,
    name: "Ultimate Unsponge",
    category: "Accessories",
    brand: "Modern Cottage NC",
    location: "Nevada City, CA",
    highlights: "Handmade, Women, Black & Indigenous-owned",
    price: "$8.00",
    image: "/ultimate-unsponge.png",
    description: "A quilted, washable, reusable household sponge made from all-natural fabrics and fibers. 100% cotton on one side, burlap on the other.",
    ecoImpact: "Zero-waste, plastic-free",
    scents: []
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
    name: "Reusable Paper Towels (6 Pack)",
    category: "Accessories",
    brand: "Craftinista Girl",
    location: "Farmington Hills, MI",
    highlights: "Women-owned, Michigan local",
    price: "$18.00",
    image: "/craftinista_girl_reusable_paper_towel.png", 
    description: "Made with absorbent flannel material. Each individual towel measures 10\" x 12\". Wash with like items in the washing machine.",
    ecoImpact: "Reduces single-use plastic",
    scents: []
  },
  {
    id: 19,
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
  },
  {
    id: 26,
    name: "reCAP Mason Pump",
    category: "Accessories",
    brand: "reCAP Mason Jars",
    location: "Erie, Pennsylvania",
    highlights: "Women-owned, made in USA",
    price: "$8.99",
    image: "/reCap_mason_pump.png",
    description: "The reCAP® Pump Lid transforms Mason jars into refillable dispensers for liquid soaps, lotions, condiments, and more.\n\nThis 2 cc (0.0676 fl oz) pump features a lock-down saddle head and glass ball mechanism for smooth dispensing and long-lasting performance.\n\n- BPA-Free\n- Top-Rack Dishwasher Safe\n- Freezer Safe\n- Stain Resistant\n- Made in the USA",
    ecoImpact: "Repurposes mason jars for a variety of uses"
  },
  {
    id: 27,
    name: "reCAP Mason Sprayer",
    category: "Accessories",
    brand: "reCAP Mason Jars",
    location: "Erie, Pennsylvania",
    highlights: "Women-owned, made in USA",
    price: "$8.99",
    image: "/recap_mason_sprayer.png",
    description: "This trigger sprayer features a wide ergonomic head for comfort and an adjustable nozzle that goes from a fine mist to a strong, high-output spray. Built with a no-leak design, it provides smooth operation and consistent coverage on every use.\n\n- BPA-Free\n- Top-Rack Dishwasher Safe\n- Freezer Safe\n- Stain Resistant\n- Made in the USA",
    ecoImpact: "Repurposes mason jars for a variety of uses"
  },
  {
    id: 28,
    name: "Mason Jar Pour Spout",
    category: "Accessories",
    brand: "Brewing America",
    location: "Cove, Oregon",
    highlights: "Veteran-owned, made in USA",
    price: "$8.25",
    image: "/brewingamerica_spout.png",
    description: "This patent-pending design is made in the USA and engineered to be alcohol-resistant and leakproof; great for wet or dry food and liquids. Features a screw down flip cap with a handy notched hinge to give you a neatly controlled pour spout.",
    ecoImpact: "Repurposes mason jars for a variety of uses"
  },

  // --- CONTAINERS ---
  {
    id: 21,
    name: "2oz Glass Jar (Metal Lid)",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "Reusable",
    price: "$1.50",
    image: "/2ozjar.png",
    description: "Fill with a 1 month supply of toothpaste tablets (62 tablets). Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 22,
    name: "4oz Glass Jar (Metal Lid)",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "Reusable",
    price: "$2.00",
    image: "/2ozjar.png", 
    description: "Sample size. Fill with 3.75 oz of liquid or powder laundry soap. Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 23,
    name: "16oz Regular Mouth Pint Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    price: "$2.50",
    image: "/16ozjarregular.png",
    description: "Premium glass mason pint jar with metal lid. Fill with 14 oz powder laundry soap, castile soap, or all-purpose cleaner. Compatible with reCAP mason spray and pump attachments (regular mouth). Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 24,
    name: "16oz Wide Mouth Pint Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    price: "$2.75",
    image: "/16ozjarwide.png",
    description: "Premium glass mason pint jar with metal lid. Fill with 14 oz of liquid or powder laundry soap. Compatible with Brewing America pour spout (wide mouth). Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 25,
    name: "32oz Wide Mouth Quart Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    price: "$3.75",
    image: "/32ozjar.png",
    description: "Premium glass mason quart jar with metal lid. Fill with 30 oz of liquid or powder laundry soap. Compatible with Brewing America pour spout (wide mouth). Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  }
];

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          {product.ecoImpact && <span className="eco-impact">🌱 {product.ecoImpact}</span>}
        </div>
        
        <h3>{product.name}</h3>
        
        <div className="maker-block">
          <p className="maker-name">{product.brand}</p>
          <div className="maker-tags">
            <span className="maker-location">📍 {product.location}</span>
            <span className="maker-highlight">✨ {product.highlights}</span>
          </div>
        </div>
        
        {/* Render description paragraphs cleanly, highlighting starter kit text */}
        <div className="product-description">
          {product.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="product-description" style={idx > 0 ? { marginTop: '-1rem', fontSize: '0.85rem', opacity: 0.85, fontWeight: 500 } : {}}>
              {paragraph}
            </p>
          ))}
        </div>
        
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

        {/* --- INGREDIENTS TOGGLE --- */}
        {product.ingredients && (
          <div className="ingredients-section">
            <button 
              className="ingredients-toggle"
              onClick={() => setShowIngredients(!showIngredients)}
            >
              {showIngredients ? '− Hide Ingredients' : '+ View Ingredients'}
            </button>
            
            {showIngredients && (
              <div className="ingredients-content">
                {product.ingredients.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '0.75rem' }}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="product-footer">
          <span className="product-price">{product.price}</span>
        </div>
      </div>
    </div>
  );
};


// --- MAIN SHOP COMPONENT ---
const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

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

      <div className="product-grid-container">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;