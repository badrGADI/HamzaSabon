import React from 'react';
import { Product } from '../types';
import { Plus, Star, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello, I'm interested in ${product.name}.`;
    const url = `https://wa.me/212654352802?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleNavigate} className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-[3/4] bg-[#F0ECE4] overflow-hidden mb-5">
        <img 
          src={product.images[0]} 
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
        <p className="text-primary/60 text-[10px] uppercase tracking-widest font-medium line-clamp-1">
            {product.shortDescription || product.category}
        </p>
        
        {/* Rating */}
        {product.rating && (
            <div className="flex items-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={12} 
                        className={i < Math.floor(product.rating || 0) ? "fill-accent text-accent" : "text-gray-300"} 
                    />
                ))}
                <span className="text-[10px] text-primary/40 ml-1">({product.rating})</span>
            </div>
        )}

        <div className="flex justify-between items-center w-full mt-2">
            <span className="text-sm font-medium text-primary">{product.price.toFixed(2)} DH</span>
            <button 
                onClick={handleWhatsApp}
                className="text-[10px] uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors flex items-center gap-1"
            >
                Shop Now <MessageCircle size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;