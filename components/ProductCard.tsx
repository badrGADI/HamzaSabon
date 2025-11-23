import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Logic for adding to cart
    console.log('Added to cart:', product.name);
  };

  return (
    <div onClick={handleNavigate} className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[3/4] bg-[#F0ECE4] overflow-hidden mb-5">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Tags */}
        {product.tag && (
          <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest py-1 px-2 bg-white/90 text-primary backdrop-blur-sm">
            {product.tag}
          </span>
        )}

        {/* Quick Add Overlay */}
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-0 right-0 bg-white text-primary p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out border-tl-lg hover:bg-primary hover:text-white z-10"
        >
            <Plus size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col items-start space-y-1">
        <h3 className="font-serif text-lg text-primary group-hover:text-accent transition-colors duration-300">
            {product.name}
        </h3>
        <p className="text-primary/60 text-[10px] uppercase tracking-widest font-medium">
            {product.category}
        </p>
        <span className="text-sm font-medium text-primary mt-1">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;