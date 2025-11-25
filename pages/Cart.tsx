import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleWhatsAppOrder = () => {
    const phoneNumber = "+212654352802";
    
    // Build cart items list
    let itemsList = '';
    cart.forEach((item, index) => {
      itemsList += `${index + 1}. *${item.name}*\n`;
      itemsList += `   Catégorie: ${item.category}\n`;
      itemsList += `   Prix unitaire: ${item.price.toFixed(2)} DH\n`;
      itemsList += `   Quantité: ${item.quantity}\n`;
      itemsList += `   Sous-total: ${(item.price * item.quantity).toFixed(2)} DH\n\n`;
    });
    
    const message = `🛍️ *Nouvelle Commande - Naturvibe*\n\n` +
                   `📦 *Produits commandés:*\n\n${itemsList}` +
                   `💵 *TOTAL: ${cartTotal.toFixed(2)} DH*\n\n` +
                   `Je souhaite passer cette commande. Merci!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-secondary animate-fade-in">
        <h2 className="font-serif text-3xl text-primary mb-4">Your Cart is Empty</h2>
        <p className="text-primary/60 mb-8">Looks like you haven't added any rituals yet.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-accent transition-colors">
            Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen pt-12 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl text-primary mb-12 text-center">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
                {cart.map(item => (
                    <div key={item.id} className="flex gap-6 p-6 bg-white border border-primary/5 items-center">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                        
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-serif text-xl text-primary">{item.name}</h3>
                                <button onClick={() => removeFromCart(item.id)} className="text-primary/40 hover:text-red-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                            <p className="text-primary/60 text-sm mb-4">{item.price.toFixed(2)} DH</p>
                            
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-primary/20">
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-2 hover:bg-primary/5 text-primary"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="px-4 text-sm font-medium text-primary">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 hover:bg-primary/5 text-primary"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <span className="ml-auto font-medium text-primary">
                                    {(item.price * item.quantity).toFixed(2)} DH
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 border border-primary/5 sticky top-24">
                    <h3 className="font-serif text-xl text-primary mb-6">Order Summary</h3>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-primary/70 text-sm">
                            <span>Subtotal</span>
                            <span>{cartTotal.toFixed(2)} DH</span>
                        </div>
                        <div className="flex justify-between text-primary/70 text-sm">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                    </div>
                    
                    <div className="border-t border-primary/10 pt-6 mb-8">
                        <div className="flex justify-between text-primary font-medium text-lg">
                            <span>Total</span>
                            <span>{cartTotal.toFixed(2)} DH</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-[#25D366] text-white py-4 uppercase text-xs tracking-widest hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} />
                        Commander via WhatsApp
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
