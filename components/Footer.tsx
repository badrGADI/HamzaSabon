import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <div className="lg:w-1/3">
                <h2 className="font-serif text-3xl mb-6">Stay Connected</h2>
                <p className="text-secondary/70 mb-8 font-light leading-relaxed">
                    Join our newsletter for exclusive access to new botanical discoveries, wellness tips, and community events.
                </p>
                <form className="flex border-b border-secondary/30 pb-2 w-full max-w-md">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="bg-transparent w-full outline-none placeholder-secondary/40 text-secondary"
                    />
                    <button className="text-secondary hover:text-accent transition-colors">
                        <ArrowRight size={20} />
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
                <div>
                    <h4 className="font-serif text-lg mb-6 text-accent">Shop</h4>
                    <ul className="space-y-3 text-sm text-secondary/70 font-light">
                        <li><a href="#" className="hover:text-white transition">Skincare</a></li>
                        <li><a href="#" className="hover:text-white transition">Body & Bath</a></li>
                        <li><a href="#" className="hover:text-white transition">Gift Sets</a></li>
                        <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-serif text-lg mb-6 text-accent">About</h4>
                    <ul className="space-y-3 text-sm text-secondary/70 font-light">
                        <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                        <li><a href="#" className="hover:text-white transition">Ingredients</a></li>
                        <li><a href="#" className="hover:text-white transition">Sustainability</a></li>
                        <li><a href="#" className="hover:text-white transition">Journal</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h4 className="font-serif text-lg mb-6 text-accent">Support</h4>
                    <ul className="space-y-3 text-sm text-secondary/70 font-light">
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <span className="font-serif text-xl font-medium">naturvibe</span>
          </div>
          
          <p className="text-xs text-secondary/40 uppercase tracking-widest">© 2024 Naturvibe Inc. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="text-secondary hover:text-accent transition"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-secondary hover:text-accent transition"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-secondary hover:text-accent transition"><Twitter size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;