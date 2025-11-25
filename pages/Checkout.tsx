import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
      return (
          <div className="min-h-screen bg-secondary flex items-center justify-center p-6 animate-fade-in">
              <div className="bg-white p-12 text-center max-w-lg border border-primary/5 shadow-lg">
                  <div className="flex justify-center mb-6">
                      <CheckCircle size={64} className="text-green-600" />
                  </div>
                  <h2 className="font-serif text-3xl text-primary mb-4">Order Confirmed!</h2>
                  <p className="text-primary/70 mb-8">
                      Thank you for your purchase. We've sent a confirmation email with your order details.
                  </p>
                  <Link to="/" className="bg-primary text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-accent transition-colors">
                      Return Home
                  </Link>
              </div>
          </div>
      );
  }

  return (
    <div className="bg-secondary min-h-screen pt-12 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="font-serif text-3xl text-primary mb-12 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Forms */}
            <div>
                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-12">
                    {/* Shipping */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest font-bold text-primary mb-6 border-b border-primary/10 pb-2">Shipping Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-xs text-primary/60 mb-1">Email</label>
                                <input required type="email" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs text-primary/60 mb-1">First Name</label>
                                <input required type="text" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs text-primary/60 mb-1">Last Name</label>
                                <input required type="text" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs text-primary/60 mb-1">Address</label>
                                <input required type="text" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs text-primary/60 mb-1">City</label>
                                <input required type="text" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs text-primary/60 mb-1">Postal Code</label>
                                <input required type="text" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                        </div>
                    </div>

                    {/* Payment */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest font-bold text-primary mb-6 border-b border-primary/10 pb-2">Payment Details</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs text-primary/60 mb-1">Card Number</label>
                                <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs text-primary/60 mb-1">Expiry</label>
                                    <input required type="text" placeholder="MM/YY" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                                </div>
                                <div>
                                    <label className="block text-xs text-primary/60 mb-1">CVC</label>
                                    <input required type="text" placeholder="123" className="w-full border border-primary/20 p-3 focus:outline-none focus:border-accent bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 h-fit border border-primary/5">
                <h3 className="font-serif text-xl text-primary mb-6">Your Order</h3>
                <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-secondary flex items-center justify-center overflow-hidden">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-primary font-medium">{item.name}</p>
                                    <p className="text-primary/60">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <span className="text-primary font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-primary/10 pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-primary/70 text-sm">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-primary/70 text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-4 mb-8">
                    <div className="flex justify-between text-primary font-bold text-lg">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <button form="checkout-form" type="submit" className="w-full bg-primary text-white py-4 uppercase text-xs tracking-widest hover:bg-accent transition-colors">
                    Place Order
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
