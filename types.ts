export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating?: number;
  image: string;
  tag?: string; // e.g., "Meilleure Vente", "Rupture de Stock"
  isNew?: boolean;
}

export interface PressReview {
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating?: number;
  image: string;
  tag?: string; // e.g., "Meilleure Vente", "Rupture de Stock"
  isNew?: boolean;
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