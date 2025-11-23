import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen pt-10 pb-24 animate-fade-in">
      {/* Header */}
      <div className="bg-primary text-secondary py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Collection</h1>
          <p className="text-secondary/70 max-w-xl mx-auto font-light">
            Explore our complete range of organic skincare, meticulously crafted to nourish, restore, and illuminate your natural beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-primary/10 pb-6 gap-4">
          <div className="flex gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <button className="text-primary font-bold text-xs uppercase tracking-widest border-b border-primary">All</button>
            <button className="text-primary/60 hover:text-primary transition text-xs uppercase tracking-widest whitespace-nowrap">Face</button>
            <button className="text-primary/60 hover:text-primary transition text-xs uppercase tracking-widest whitespace-nowrap">Body</button>
            <button className="text-primary/60 hover:text-primary transition text-xs uppercase tracking-widest whitespace-nowrap">Sets</button>
            <button className="text-primary/60 hover:text-primary transition text-xs uppercase tracking-widest whitespace-nowrap">Best Sellers</button>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent">
              <Filter size={14} /> Filter
            </button>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary cursor-pointer">
              Sort By <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
            <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-12 py-4 uppercase text-xs tracking-widest">
                Load More Products
            </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;