export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating?: number;
  images: string[]; // Changed from image: string to images: string[]
  tag?: string; // e.g., "Meilleure Vente", "Rupture de Stock"
  isNew?: boolean;
  shortDescription?: string;
  benefits?: string[];
  howToUse?: string;
  ingredients?: string;
}

export interface UserReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export interface PressReview {
  id: number;
  source: string;
  quote: string;
  title: string;
}

export interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
  subItems?: NavItem[];
}