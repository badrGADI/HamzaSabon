import { Product, PressReview, NavItem } from './types';

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
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 12,
    name: "Hydra-Glow Cream",
    category: "Skincare",
    price: 65.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: 13,
    name: "Botanical Essence Toner",
    category: "Skincare",
    price: 38.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Sacred Clay Mask",
    category: "Skincare",
    price: 55.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop"
  },

  // Savon (Soaps)
  {
    id: 1,
    name: "Savon Noir Beldi",
    category: "Savon",
    price: 15.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Savon Lavande & Karité",
    category: "Savon",
    price: 12.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop"
  },
  
  // Shampo (Shampoos)
  {
    id: 3,
    name: "Shampo Argan Revitalisant",
    category: "Shampo",
    price: 25.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 4,
    name: "Shampo Solide Ortie",
    category: "Shampo",
    price: 18.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&auto=format&fit=crop"
  },

  // Bomada (Pomades/Balms)
  {
    id: 5,
    name: "Bomada Cicatrisante",
    category: "Bomada",
    price: 30.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: 6,
    name: "Bomada Hydratation Intense",
    category: "Bomada",
    price: 28.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&auto=format&fit=crop"
  },

  // Oil (Oils)
  {
    id: 7,
    name: "Huile d'Argan Pure",
    category: "Oil",
    price: 45.00,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop",
    tag: "Premium"
  },
  {
    id: 8,
    name: "Huile de Pépin de Figue",
    category: "Oil",
    price: 55.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop"
  },

  // Packs (Gift Sets)
  {
    id: 9,
    name: "Pack Rituel Hammam",
    category: "Packs",
    price: 85.00,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop",
    tag: "Gift Set"
  },
  {
    id: 10,
    name: "Pack Découverte Visage",
    category: "Packs",
    price: 65.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571781535009-2b948dee3183?w=800&auto=format&fit=crop"
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