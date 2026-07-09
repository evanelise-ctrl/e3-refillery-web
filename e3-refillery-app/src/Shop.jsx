import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Shop.css';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';
import OrderForm from './OrderForm';

// --- YOUR INVENTORY DATA ---
const productsData = [
  // --- PERSONAL CARE ---
  {
    id: 1,
    name: "Tiani Shampoo Bar",
    category: "Personal Care",
    brand: "Tiani Body Care",
    location: "Dexter, MI",
    highlights: "Women-owned, Michigan local",
    options: [
      { label: "Full (3.5oz)", price: 16.00 },
      { label: "Mini (1oz)", price: 7.00 }
    ],
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
    options: [
      { label: "Full (3.5oz)", price: 17.00 },
      { label: "Mini (1oz)", price: 8.00 }
    ],
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
    options: [
      { label: "1-Month Starter (incl. jar)", price: 10.50 },
      { label: "2-Month Starter (incl. jar)", price: 20.00 },
      { label: "1-Month Refill", price: 9.00 },
      { label: "2-Month Refill", price: 18.00 }
    ],
    image: "/huppy_toothpaste.png",
    description: "A fluoride-free, zero-waste alternative to traditional paste that naturally whitens, freshens breath, and fights plaque. Made with clean ingredients like peppermint oil, aloe vera extract, and nano-hydroxyapatite.",
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
    options: [
      { label: "4oz Bar", price: 9.00 }
    ],
    image: "/lincolnst_oatmeal_soap.png",
    description: "Crafted with natural ingredients and wrapped in sustainable, minimal packaging. Designed for those who value clean beauty and a lighter environmental footprint. Rich lather, long-lasting bars.",
    ecoImpact: "Sustainable, minimal packaging",
    scents: ["Oatmeal", "Almond", "Bergamot & Sandalwood", "Black Orchid", "Dirtbag", "Livernois Lavender", "Orange Blossom"],
    ingredients: "Oatmeal: Avocado, castor, coconut, olive oils; shea butter; colloidal oats.\n\nAlmond: Olive oil, coconut oil, almond oil, rice bran oil, castor oil, shea butter, fragrance (bitter almond & soft orange notes).\n\nBergamot and Sandalwood: Avocado oil, castor oil, coconut oil, olive oil, shea butter, bergamot essential oil, Egyptian sandalwood fragrance.\n\nBlack Orchid: Saponified oils of olive, babassu, sesame, apricot kernel, macadamia nut, and castor oils, activated charcoal, alkanet root, fragrance (amber, Tahitian vanilla, sandalwood).\n\nDirtbag: Saponified oils of olive, coconut palm, sesame, safflower, castor; oils of grapefruit, Virginia cedarwood, Siberian fir; cornmeal, poppy seed.\n\nLivernois Lavender: Olive, coconut, sesame, castor oils; water; lavender and benzoin essential oils, alkanet root, linalool*, benzyl benzoate*, benzyl cinnamate*. *Naturally occurring components of essential oils."
  },

  // --- CLEANING ---
  {
    id: 5,
    name: "Dishwashing Trio Set",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    options: [
      { label: "Trio Set", price: 28.00 }
    ],
    image: "/mamasuds_solid_dish_soap.png",
    description: "All you need to get started at the kitchen sink! Includes pure castile dish soap, a natural bamboo and sisal pot brush, and an alder wood soap dish.",
    ecoImpact: "Plastic-free, Vegan",
    scents: ["Unscented"],
    ingredients: "Sodium Olivate (saponified olive oil). Free of any synthetic ingredients."
  },
  {
    id: 6,
    name: "Toilet Bomb Cleaning Tab",
    category: "Cleaning",
    brand: "Mama Suds",
    location: "Goodrich, MI",
    highlights: "Woman-owned, Michigan local",
    options: [
      { label: "Individual Tab", price: 1.75 }
    ],
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
    options: [
      { label: "14oz Basic Starter", price: 6.00 },
      { label: "14oz Starter Plus (w/ sprayer)", price: 12.99 },
      { label: "14oz Refill", price: 3.50 }
    ],
    image: "/mamasuds_all_purpose.png",
    description: "This cleaner is good for sinks, counters, doorknobs, stove-tops, garbage lids, etc. Safe for natural stone and granite.",
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
    options: [
      { label: "Per Tablet", price: 0.52 }
    ],
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
    options: [
      { label: "2 Tablets", price: 3.00 }
    ],
    image: "/green_llama_all_purpose.png",
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
    options: [
      { label: "14oz Basic Starter", price: 9.36 },
      { label: "14oz Starter Plus (w/ pump)", price: 14.99 },
      { label: "14oz Refill", price: 6.86 },
      { label: "30oz Basic Starter", price: 18.45 },
      { label: "30oz Refill", price: 14.70 }
    ],
    image: "/mamasudscastillesoap.png",
    description: "Staying true to traditional soap-making, this is one of the best natural and bio-degradable soaps available. Perfect for washing body, laundry, hair, and shaving.",
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
    options: [
      { label: "1 Tablet", price: 3.00 }
    ],
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
    options: [
      { label: "14oz Starter", price: 5.83 },
      { label: "14oz Refill", price: 3.08 },
      { label: "30oz Starter", price: 10.35 },
      { label: "30oz Refill", price: 6.60 }
    ],
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
    options: [
      { label: "14oz Basic Starter", price: 7.79 },
      { label: "14oz Starter Plus (w/ spout)", price: 14.00 },
      { label: "14oz Refill", price: 5.04 },
      { label: "30oz Basic Starter", price: 14.55 },
      { label: "30oz Starter Plus (w/ spout)", price: 20.00 },
      { label: "30oz Refill", price: 10.80 }
    ],
    image: "/mamasuds_liquid_laundry_soap.png",
    description: "Formulated based on the owner's need for a laundry soap that would clean cloth diapers but be gentle enough to not irritate her baby's skin. Gentle, safe, and effective. (14oz = approx 28 TBSP | 30oz = approx 60 TBSP).",
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
    options: [
      { label: "Stain Stick", price: 7.00 }
    ],
    image: "/mamasuds_stainstick.png",
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
    options: [
      { label: "Set of 3", price: 22.00 }
    ],
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
    options: [
      { label: "Single", price: 8.00 }
    ],
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
    options: [
      { label: "Soap Dish", price: 5.00 }
    ],
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
    options: [
      { label: "Single", price: 4.00 }
    ],
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
    options: [
      { label: "6-Pack", price: 18.00 }
    ],
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
    options: [
      { label: "16oz", price: 6.00 },
      { label: "32oz", price: 8.00 }
    ],
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
    options: [
      { label: "Pump Lid", price: 8.99 }
    ],
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
    options: [
      { label: "Sprayer Lid", price: 8.99 }
    ],
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
    options: [
      { label: "Pour Spout", price: 8.25 }
    ],
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
    location: "",
    highlights: "Reusable",
    options: [
      { label: "2oz Jar", price: 1.50 }
    ],
    image: "/2ozjar.png",
    description: "Fill with a 1 month supply of toothpaste tablets (62 tablets).",
    containerNote: "Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 22,
    name: "4oz Glass Jar (Metal Lid)",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "",
    highlights: "Reusable",
    options: [
      { label: "4oz Jar", price: 2.00 }
    ],
    image: "/4ozwlid.png",
    description: "Sample size. Fill with 3.75 oz of liquid or powder laundry soap.",
    containerNote: "Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 23,
    name: "16oz Regular Mouth Pint Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    options: [
      { label: "16oz Regular Mouth Jar", price: 2.50 }
    ],
    image: "/16ozjarregular.png",
    description: "Premium glass mason pint jar with metal lid. Fill with 14 oz powder laundry soap, castile soap, or all-purpose cleaner. Compatible with reCAP mason spray and pump attachments (regular mouth).",
    containerNote: "Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 24,
    name: "16oz Wide Mouth Pint Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    options: [
      { label: "16oz Wide Mouth Jar", price: 2.75 }
    ],
    image: "/16ozjarwide.png",
    description: "Premium glass mason pint jar with metal lid. Fill with 14 oz of liquid or powder laundry soap. Compatible with Brewing America pour spout (wide mouth).",
    containerNote: "Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  },
  {
    id: 25,
    name: "32oz Wide Mouth Quart Jar",
    category: "Containers",
    brand: "e3 Premium Jars",
    location: "USA",
    highlights: "USA Made",
    options: [
      { label: "32oz Wide Mouth Jar", price: 3.75 }
    ],
    image: "/32ozjar.png",
    description: "Premium glass mason quart jar with metal lid. Fill with 30 oz of liquid or powder laundry soap. Compatible with Brewing America pour spout (wide mouth).",
    containerNote: "Must be purchased with an accompanying product.",
    ecoImpact: "Zero-waste"
  }
];

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, onAddToCart }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedScent, setSelectedScent] = useState(
    product.scents && product.scents.length > 0 ? product.scents[0] : null
  );
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        productId: product.id,
        name: product.name,
        scent: selectedScent,
        sizeLabel: selectedOption.label,
        unitPrice: selectedOption.price,
        qty,
      });
    }
  };

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
            {product.location && <span className="maker-location">📍 {product.location}</span>}
            {product.highlights && <span className="maker-highlight">✨ {product.highlights}</span>}
          </div>
        </div>

        <div className="product-description">
          {product.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="product-description" style={{
              whiteSpace: 'pre-line',
              marginTop: idx > 0 ? '0.5rem' : '0',
              fontSize: idx > 0 ? '0.85rem' : '0.95rem',
              opacity: idx > 0 ? 0.85 : 1,
              fontWeight: idx > 0 ? 500 : 400
            }}>
              {paragraph}
            </p>
          ))}
        </div>

        {product.containerNote && (
          <p className="container-note">{product.containerNote}</p>
        )}

        {/* Scent Selector */}
        {product.scents && product.scents.length > 0 && (
          <div className="card-selector">
            <label className="selector-label">Scent</label>
            <select
              className="selector-select"
              value={selectedScent}
              onChange={e => setSelectedScent(e.target.value)}
            >
              {product.scents.map(scent => (
                <option key={scent} value={scent}>{scent}</option>
              ))}
            </select>
          </div>
        )}

        {/* Size / Tier Selector */}
        {product.options.length > 1 && (
          <div className="card-selector">
            <label className="selector-label">Size / Option</label>
            <select
              className="selector-select"
              value={selectedOption.label}
              onChange={e => setSelectedOption(product.options.find(o => o.label === e.target.value))}
            >
              {product.options.map(opt => (
                <option key={opt.label} value={opt.label}>
                  {opt.label} — ${opt.price.toFixed(2)}
                </option>
              ))}
            </select>
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
          <span className="product-price">${selectedOption.price.toFixed(2)}</span>
        </div>

        <div className="card-actions">
          <div className="qty-control">
            <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span className="qty-display">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


// --- MAIN SHOP COMPONENT ---
const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartStep, setCartStep] = useState('cart'); // 'cart' | 'order'
  const { addToCart, items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => { setIsCartOpen(false); setCartStep('cart'); };

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  const categories = ['All', ...new Set(productsData.map(item => item.category))];

  return (
    <div className="shop-page-wrapper">
      <Helmet>
        <title>Shop Sustainable Refills & Zero-Waste Goods | e3 Refillery</title>
        <meta name="description" content="Shop zero-waste refills: personal care, cleaning, laundry, containers, and accessories from women-owned and local brands." />
      </Helmet>
      <section className="shop-header">
        <h1>Shop Sustainable Goods</h1>
        <p>Clean, safe, and non-toxic products for your home and family. <br/> Supporting our community, one refill at a time.</p>

        {/* CART CTA */}
        <div className="order-cta-container">
          <button className="shop-cart-cta-btn" onClick={openCart}>
            {totalItems > 0
              ? `View Cart (${totalItems} item${totalItems !== 1 ? 's' : ''})`
              : 'Start Your Order'}
          </button>

          {/* Task 6 — static service area info, display only */}
          <div className="service-area-info">
            <p>
              <strong>Tuesday pickup</strong> is free.{' '}
              <strong>Wednesday delivery</strong> to Westland, Garden City, Wayne,
              Dearborn Heights, Taylor, Allen Park, Lincoln Park, and Melvindale
              is $5, free over $40.
            </p>
          </div>
        </div>
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
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

      {/* Floating cart button — appears once something is in the cart */}
      {totalItems > 0 && (
        <button className="floating-cart-btn" onClick={openCart}>
          <span className="cart-badge">{totalItems}</span>
          View Cart
        </button>
      )}

      {cartStep === 'cart' ? (
        <CartDrawer
          isOpen={isCartOpen}
          onClose={closeCart}
          onCheckout={() => setCartStep('order')}
        />
      ) : (
        <OrderForm
          isOpen={isCartOpen}
          onClose={closeCart}
          onBack={() => setCartStep('cart')}
        />
      )}
    </div>
  );
};

export default Shop;
