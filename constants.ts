import { Product, PressReview, NavItem } from './types';

export const PROMO_MESSAGES = [
  "Complimentary botanical travel kit on orders over $150",
  "Free carbon-neutral shipping on all orders",
  "Join The Collective: 15% off your first purchase"
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop All', href: '/shop' },
  { label: 'Best Sellers', href: '/shop?filter=best-sellers', isSpecial: true },
  { label: 'Skincare', href: '/shop?category=skincare' },
  { label: 'Body & Bath', href: '/shop?category=body' },
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Midnight Recovery Serum",
    category: "Restorative Night Oil",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Bamboo & Rice Scrub",
    category: "Gentle Exfoliant",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1601049541289-9b3b7b5d7131?q=80&w=800&auto=format&fit=crop",
    tag: "Sold Out"
  },
  {
    id: 3,
    name: "Hydra-Glow Cream",
    category: "Daily Moisturizer",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Botanical Essence",
    category: "Balancing Toner",
    price: "$38.00",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Sacred Clay Mask",
    category: "Purifying Treatment",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Wild Rose Body Oil",
    category: "Nourishing Body Care",
    price: "$48.00",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Vitamin C Radiance",
    category: "Brightening Serum",
    price: "$92.00",
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: 8,
    name: "Lavender Mist",
    category: "Calming Spray",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9b6d40?q=80&w=800&auto=format&fit=crop",
    date: "October 12, 2024",
    category: "Rituals"
  },
  {
    id: 2,
    title: "Sourcing Wild Rosehip in Patagonia",
    excerpt: "We traveled to the edge of the world to find the most potent source of Vitamin A.",
    image: "https://images.unsplash.com/photo-1490750967868-58cb75063ed4?q=80&w=800&auto=format&fit=crop",
    date: "September 28, 2024",
    category: "Ingredients"
  },
  {
    id: 3,
    title: "5 Minutes to Mindfulness",
    excerpt: "Incorporating meditation into your morning skincare routine for a balanced day.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    date: "September 15, 2024",
    category: "Wellness"
  }
];