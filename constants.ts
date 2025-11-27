import { Product, PressReview, UserReview, NavItem } from './types';

export const PROMO_MESSAGES = [
  "Complimentary botanical travel kit on orders over $150",
  "Free carbon-neutral shipping on all orders",
  "Join The Collective: 15% off your first purchase"
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { 
    label: 'Collections', 
    href: '/shop',
    subItems: [
      { label: 'Shop All', href: '/shop' },
      { label: 'Skincare', href: '/shop?category=skincare' },
      { label: 'Savon', href: '/shop?category=savon' },
      { label: 'Shampo', href: '/shop?category=shampo' },
      { label: 'Bomada', href: '/shop?category=bomada' },
      { label: 'Oil', href: '/shop?category=oil' },
      { label: 'Packs', href: '/shop?category=packs' },
    ]
  },
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  // Skincare
  {
    id: 11,
    name: "Midnight Recovery Serum",
    category: "Skincare",
    price: 85.00,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop"
    ],
    tag: "Best Seller",
    shortDescription: "Regenerating night serum for tired skin.",
    benefits: [
      "Calms redness and irritation",
      "Provides long-lasting hydration",
      "Absorbs quickly without stickiness"
    ],
    howToUse: "Apply a small amount to clean, dry skin morning and night. Gently massage until fully absorbed.",
    ingredients: "Aqua, Aloe Barbadensis Leaf Juice, Glycerin, Hyaluronic Acid, Chamomilla Recutita Flower Extract."
  },
  {
    id: 12,
    name: "Hydra-Glow Cream",
    category: "Skincare",
    price: 65.00,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop"
    ],
    tag: "Trending",
    shortDescription: "Deep hydration for a radiant glow.",
    benefits: [
      "Intense moisture boost",
      "Restores skin barrier",
      "Leaves skin glowing"
    ],
    howToUse: "Apply generously to face and neck after cleansing.",
    ingredients: "Aqua, Shea Butter, Jojoba Oil, Vitamin E, Rose Extract."
  },
  {
    id: 13,
    name: "Botanical Essence Toner",
    category: "Skincare",
    price: 38.00,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Refreshing toner with botanical extracts.",
    benefits: [
      "Balances skin pH",
      "Tightens pores",
      "Refreshes and hydrates"
    ],
    howToUse: "Soak a cotton pad and gently wipe over face and neck.",
    ingredients: "Rose Water, Witch Hazel, Aloe Vera, Cucumber Extract."
  },
  {
    id: 14,
    name: "Sacred Clay Mask",
    category: "Skincare",
    price: 55.00,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Purifying clay mask for deep cleansing.",
    benefits: [
      "Detoxifies skin",
      "Unclogs pores",
      "Controls oil"
    ],
    howToUse: "Apply a thin layer to face, leave for 10-15 minutes, then rinse.",
    ingredients: "Kaolin Clay, Bentonite Clay, Activated Charcoal, Tea Tree Oil."
  },

  // Savon (Soaps)
  {
    id: 1,
    name: "Savon Noir Beldi",
    category: "Savon",
    price: 15.00,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop"
    ],
    tag: "Best Seller",
    shortDescription: "Traditional Moroccan black soap.",
    benefits: [
      "Exfoliates dead skin cells",
      "Softens skin",
      "Prepares skin for scrubbing"
    ],
    howToUse: "Apply to wet skin in a warm bath or shower. Leave for 5-10 minutes, then rinse and scrub with a kessa glove.",
    ingredients: "Olive Oil, Macerated Olives, Water, Potassium Hydroxide."
  },
  {
    id: 2,
    name: "Savon Lavande & Karité",
    category: "Savon",
    price: 12.00,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Soothing lavender and shea butter soap.",
    benefits: [
      "Gentle cleansing",
      "Moisturizing",
      "Calming scent"
    ],
    howToUse: "Lather with water and apply to body. Rinse thoroughly.",
    ingredients: "Shea Butter, Coconut Oil, Lavender Essential Oil, Olive Oil."
  },
  
  // Shampo (Shampoos)
  {
    id: 3,
    name: "Shampo Argan Revitalisant",
    category: "Shampo",
    price: 25.00,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop"
    ],
    isNew: true,
    shortDescription: "Revitalizing argan oil shampoo.",
    benefits: [
      "Strengthens hair",
      "Adds shine",
      "Nourishes scalp"
    ],
    howToUse: "Massage into wet hair and scalp. Rinse well.",
    ingredients: "Argan Oil, Aloe Vera, Hydrolyzed Wheat Protein, Rosemary Extract."
  },
  {
    id: 4,
    name: "Shampo Solide Ortie",
    category: "Shampo",
    price: 18.00,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Solid nettle shampoo for oily hair.",
    benefits: [
      "Regulates sebum",
      "Reduces dandruff",
      "Eco-friendly packaging"
    ],
    howToUse: "Rub bar directly onto wet hair to lather. Rinse thoroughly.",
    ingredients: "Nettle Powder, Green Clay, Coconut Oil, Peppermint Oil."
  },

  // Bomada (Pomades/Balms)
  {
    id: 5,
    name: "Bomada Cicatrisante",
    category: "Bomada",
    price: 30.00,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop"
    ],
    tag: "Trending",
    shortDescription: "Healing balm for dry and damaged skin.",
    benefits: [
      "Accelerates healing",
      "Soothes irritation",
      "Protects skin barrier"
    ],
    howToUse: "Apply to affected areas as needed.",
    ingredients: "Calendula Oil, Beeswax, Lavender Oil, Vitamin E."
  },
  {
    id: 6,
    name: "Bomada Hydratation Intense",
    category: "Bomada",
    price: 28.00,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Intense hydration balm for all skin types.",
    benefits: [
      "Deeply moisturizes",
      "Softens rough patches",
      "Long-lasting protection"
    ],
    howToUse: "Massage into dry skin areas until absorbed.",
    ingredients: "Cocoa Butter, Sweet Almond Oil, Beeswax, Vanilla Extract."
  },

  // Oil (Oils)
  {
    id: 7,
    name: "Huile d'Argan Pure",
    category: "Oil",
    price: 45.00,
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop"
    ],
    tag: "Premium",
    shortDescription: "100% pure organic argan oil.",
    benefits: [
      "Anti-aging properties",
      "Deep hydration",
      "Versatile use (hair, skin, nails)"
    ],
    howToUse: "Apply a few drops to face, hair, or body.",
    ingredients: "100% Organic Argania Spinosa Kernel Oil."
  },
  {
    id: 8,
    name: "Huile de Pépin de Figue",
    category: "Oil",
    price: 55.00,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Anti-aging prickly pear seed oil.",
    benefits: [
      "Reduces fine lines",
      "Brightens dark circles",
      "Tightens pores"
    ],
    howToUse: "Apply 2-3 drops to face and neck at night.",
    ingredients: "100% Organic Opuntia Ficus-Indica Seed Oil."
  },

  // Packs (Gift Sets)
  {
    id: 9,
    name: "Pack Rituel Hammam",
    category: "Packs",
    price: 85.00,
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571781535009-2b948dee3183?w=800&auto=format&fit=crop"
    ],
    tag: "Gift Set",
    shortDescription: "Complete Hammam ritual set.",
    benefits: [
      "Spa experience at home",
      "Detoxifying and relaxing",
      "Complete body care"
    ],
    howToUse: "Follow the included guide for a traditional Hammam ritual.",
    ingredients: "Contains: Savon Noir, Kessa Glove, Ghassoul Clay, Argan Oil."
  },
  {
    id: 10,
    name: "Pack Découverte Visage",
    category: "Packs",
    price: 65.00,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1571781535009-2b948dee3183?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop"
    ],
    shortDescription: "Facial care discovery set.",
    benefits: [
      "Complete facial routine",
      "Travel-friendly sizes",
      "Great for gifting"
    ],
    howToUse: "Follow the step-by-step guide included in the box.",
    ingredients: "Contains: Cleanser, Toner, Serum, Moisturizer."
  }
];

export const USER_REVIEWS: UserReview[] = [
  {
    id: 1,
    name: "Sara M.",
    rating: 5,
    comment: "My skin improved in just 2 weeks! The Midnight Serum is a miracle worker."
  },
  {
    id: 2,
    name: "Amine K.",
    rating: 5,
    comment: "Lightweight and soothing. Perfect for my sensitive skin. Highly recommend!"
  },
  {
    id: 3,
    name: "Leila B.",
    rating: 4,
    comment: "Fast delivery and beautiful packaging. The products smell amazing."
  }
];

export const REVIEWS: PressReview[] = [
  {
    id: 1,
    source: "Vogue",
    title: "Nature's Best Kept Secret",
    quote: "Naturvibe bridges the gap between raw organic ingredients and luxury scientific formulation."
  },
  {
    id: 2,
    source: "Allure",
    title: "The Clean Beauty Revolution",
    quote: "Finally, a sustainable brand that doesn't compromise on efficacy. The Midnight Serum is a game changer."
  },
  {
    id: 3,
    source: "Elle",
    title: "A Sensory Experience",
    quote: "From the packaging to the texture, everything about Naturvibe screams intentionality and calm."
  },
  {
    id: 4,
    source: "Marie Claire",
    title: "Sustainable Luxury",
    quote: "Your bathroom counter needs this. Ethically sourced, beautifully packaged, and incredibly effective."
  }
];

export const JOURNAL_POSTS = [
  {
    id: 1,
    title: "The Ancient Art of Gua Sha",
    excerpt: "Discover how this traditional technique can sculpt your face and calm your mind.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9b6d40?w=800&auto=format&fit=crop",
    date: "October 12, 2024",
    category: "Rituals"
  },
  {
    id: 2,
    title: "Sourcing Wild Rosehip in Patagonia",
    excerpt: "We traveled to the edge of the world to find the most potent source of Vitamin A.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    date: "September 28, 2024",
    category: "Ingredients"
  },
  {
    id: 3,
    title: "5 Minutes to Mindfulness",
    excerpt: "Incorporating meditation into your morning skincare routine for a balanced day.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    date: "September 15, 2024",
    category: "Wellness"
  }
];