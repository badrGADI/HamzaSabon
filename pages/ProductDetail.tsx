import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Star, Minus, Plus, ChevronRight, Truck, ShieldCheck, Leaf, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useData();
    const product = products.find(p => p.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return <div className="h-screen flex items-center justify-center text-primary">Product not found</div>;
    }

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const totalPrice = product.price * quantity;

    const handleWhatsAppOrder = () => {
        const phoneNumber = "+212654352802";
        const message = `🛍️ *Nouvelle Commande - Naturvibe*\n\n` +
            `📦 *Produit:* ${product.name}\n` +
            `🏷️ *Catégorie:* ${product.category}\n` +
            `💰 *Prix unitaire:* ${product.price.toFixed(2)} DH\n` +
            `🔢 *Quantité:* ${quantity}\n` +
            `💵 *Prix Total:* ${totalPrice.toFixed(2)} DH\n\n` +
            `Je souhaite commander ce produit. Merci!`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleAddToCart = () => {
        // Only add to cart, don't open WhatsApp
        addToCart(product, quantity);
    };

    return (
        <div className="bg-secondary min-h-screen pt-10 pb-24 animate-fade-in">

            {/* Breadcrumbs */}
            <div className="container mx-auto px-6 md:px-12 mb-8 pt-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/50">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <ChevronRight size={10} />
                    <Link to="/shop" className="hover:text-primary">Shop</Link>
                    <ChevronRight size={10} />
                    <span className="text-primary">{product.name}</span>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/5] bg-[#F0ECE4] overflow-hidden relative">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            {product.tag && (
                                <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold uppercase tracking-widest py-1 px-3 backdrop-blur-sm">
                                    {product.tag}
                                </span>
                            )}
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-[#E8E4D9] cursor-pointer hover:opacity-80 transition"></div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-1 text-accent mb-4">
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <Star size={14} fill="currentColor" />
                            <span className="text-xs text-primary/60 ml-2 font-medium">(128 Reviews)</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-2">{product.name}</h1>
                        <p className="text-sm uppercase tracking-widest text-primary/60 mb-6">{product.category}</p>
                        <p className="text-2xl text-primary font-medium mb-2">{product.price.toFixed(2)} DH</p>
                        <p className="text-lg text-accent font-bold mb-8">Total: {totalPrice.toFixed(2)} DH</p>

                        <div className="prose text-primary/70 font-light mb-10 leading-relaxed">
                            <p>
                                A luxurious formulation designed to harmonize with your skin's natural rhythm.
                                Rich in botanical actives and antioxidants, this treatment deeply penetrates
                                to restore vitality and luminosity from within.
                            </p>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="flex items-center justify-between border border-primary/20 px-4 py-3 w-32">
                                <button onClick={handleDecrement} className="text-primary/60 hover:text-primary"><Minus size={16} /></button>
                                <span className="text-sm font-medium">{quantity}</span>
                                <button onClick={handleIncrement} className="text-primary/60 hover:text-primary"><Plus size={16} /></button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="bg-primary text-white flex-1 py-4 uppercase text-xs tracking-widest hover:bg-accent transition-colors"
                            >
                                Add to Cart - {totalPrice.toFixed(2)} DH
                            </button>
                        </div>

                        {/* WhatsApp Order Button */}
                        <button
                            onClick={handleWhatsAppOrder}
                            className="w-full bg-[#25D366] text-white py-4 uppercase text-xs tracking-widest hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2 mb-12"
                        >
                            <MessageCircle size={18} />
                            Commander via WhatsApp
                        </button>

                        {/* Benefits */}
                        <div className="border-t border-primary/10 pt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <Leaf className="text-accent mt-1" size={20} strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">100% Organic</h4>
                                    <p className="text-xs text-primary/60 font-light">Sourced from sustainable farms worldwide.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="text-accent mt-1" size={20} strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Dermatologist Tested</h4>
                                    <p className="text-xs text-primary/60 font-light">Safe for sensitive skin types.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Truck className="text-accent mt-1" size={20} strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Free Shipping</h4>
                                    <p className="text-xs text-primary/60 font-light">On all orders over $50.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;