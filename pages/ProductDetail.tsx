import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Star, Minus, Plus, ChevronRight, Truck, ShieldCheck, Leaf, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { products } = useData();
    const navigate = useNavigate();
    
    // Find product
    const product = products.find(p => p.id === Number(id));
    
    // State
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const { addToCart } = useCart();

    // Set initial image when product loads
    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            setSelectedImage(product.images[0]);
        }
        window.scrollTo(0, 0);
    }, [product, id]);

    if (!product) {
        return <div className="h-screen flex items-center justify-center text-primary">Product not found</div>;
    }

    // Related products (random 4 excluding current)
    const relatedProducts = products
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, 4);

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
        addToCart(product, quantity);
    };

    return (
        <div className="bg-secondary min-h-screen pt-10 pb-32 animate-fade-in relative">

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
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">

                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-[4/5] bg-[#F0ECE4] overflow-hidden relative mb-4">
                            <img src={selectedImage} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300" />
                            {product.tag && (
                                <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold uppercase tracking-widest py-1 px-3 backdrop-blur-sm">
                                    {product.tag}
                                </span>
                            )}
                        </div>
                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.map((img, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => setSelectedImage(img)}
                                        className={`aspect-square bg-[#E8E4D9] cursor-pointer hover:opacity-80 transition border-2 ${selectedImage === img ? 'border-primary' : 'border-transparent'}`}
                                    >
                                        <img src={img} alt={`${product.name} view ${i+1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-1 text-accent mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className={i < Math.floor(product.rating || 0) ? "fill-accent text-accent" : "text-gray-300"} />
                            ))}
                            <span className="text-xs text-primary/60 ml-2 font-medium">({product.rating} / 5)</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl text-primary mb-2">{product.name}</h1>
                        <p className="text-sm uppercase tracking-widest text-primary/60 mb-6">{product.category}</p>
                        <p className="text-2xl text-primary font-medium mb-2">{product.price.toFixed(2)} DH</p>
                        <p className="text-lg text-accent font-bold mb-8">Total: {totalPrice.toFixed(2)} DH</p>

                        <div className="prose text-primary/70 font-light mb-10 leading-relaxed">
                            <h3 className="font-serif text-lg text-primary mb-2">What it is</h3>
                            <p>{product.shortDescription || "A premium natural product designed for your wellness."}</p>
                        </div>

                        {/* Quantity & Add to Cart (Desktop) */}
                        <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-6">
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

                        {/* Detailed Info */}
                        <div className="border-t border-primary/10 pt-8 space-y-8">
                            
                            {/* Benefits */}
                            {product.benefits && (
                                <div>
                                    <h4 className="font-serif text-lg text-primary mb-4">Benefits</h4>
                                    <ul className="space-y-2">
                                        {product.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-primary/70 font-light">
                                                <Leaf className="text-accent mt-1 min-w-[16px]" size={16} />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* How to Use */}
                            {product.howToUse && (
                                <div>
                                    <h4 className="font-serif text-lg text-primary mb-2">How to use</h4>
                                    <p className="text-sm text-primary/70 font-light leading-relaxed">
                                        {product.howToUse}
                                    </p>
                                </div>
                            )}

                            {/* Ingredients */}
                            {product.ingredients && (
                                <div>
                                    <h4 className="font-serif text-lg text-primary mb-2">Ingredients</h4>
                                    <p className="text-xs text-primary/60 font-light leading-relaxed">
                                        {product.ingredients}
                                    </p>
                                </div>
                            )}

                            {/* Trust Badges (Static) */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-accent" size={18} />
                                    <span className="text-xs uppercase tracking-widest text-primary/80">Dermatologist Tested</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck className="text-accent" size={18} />
                                    <span className="text-xs uppercase tracking-widest text-primary/80">Free Shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="border-t border-primary/10 pt-16">
                        <h2 className="font-serif text-3xl text-primary mb-8 text-center">You may also like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Add to Cart (Mobile) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-primary/10 p-4 z-50 flex items-center gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-xs text-primary/60 uppercase tracking-widest">{product.name}</span>
                    <span className="font-bold text-primary">{product.price.toFixed(2)} DH</span>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary text-white py-3 uppercase text-xs tracking-widest font-bold"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;