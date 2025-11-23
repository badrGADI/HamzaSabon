import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import TopBanner from './TopBanner';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-40 top-0">
      <TopBanner />
      
      <div 
        className={`transition-all duration-500 border-b border-transparent ${
          isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md shadow-sm py-3 border-primary/5' 
          : 'bg-secondary py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-1 text-primary"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
            >
                <Menu size={24} strokeWidth={1.5} />
            </button>

            {/* Desktop Search (Left Balance) */}
            <div className="hidden md:flex items-center w-1/4">
                <button className="text-primary hover:text-accent transition-colors flex items-center gap-2 group">
                    <Search size={18} strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">Search</span>
                </button>
            </div>

            {/* Logo - Centered */}
            <Link to="/" className="flex items-center gap-2 group">
                <Leaf className="text-primary group-hover:text-accent transition-colors duration-500" size={24} strokeWidth={1.5} />
                <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-primary">
                    naturvibe
                </span>
            </Link>

            {/* Icons (Right) */}
            <div className="flex items-center justify-end space-x-6 w-auto md:w-1/4">
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/login" className="text-xs uppercase tracking-widest font-medium hover:text-accent transition-colors">Sign In</Link>
                    <button aria-label="Cart" className="relative group">
                        <ShoppingBag size={20} strokeWidth={1.5} className="text-primary group-hover:text-accent transition-colors" />
                        <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                    </button>
                </div>
                {/* Mobile Cart */}
                <button className="md:hidden relative">
                    <ShoppingBag size={22} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
                </button>
            </div>
        </div>

        {/* Desktop Navigation - Below Logo */}
        <nav className={`hidden md:flex justify-center space-x-10 transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100 mt-4'}`}>
            {NAV_ITEMS.map((item) => (
            <Link 
                key={item.label}
                to={item.href}
                className={`text-xs tracking-[0.15em] uppercase hover:text-accent transition-colors relative group ${item.isSpecial ? 'text-accent font-semibold' : 'text-primary'}`}
            >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
            ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-secondary z-50 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-primary/10">
                <div className="flex items-center gap-2">
                    <Leaf className="text-primary" size={20} />
                    <span className="font-serif text-xl font-medium">naturvibe</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X size={24} strokeWidth={1.5} />
                </button>
            </div>
            
            <div className="flex flex-col p-8 space-y-6 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                    <Link 
                        key={item.label}
                        to={item.href}
                        className="font-serif text-2xl text-primary hover:text-accent transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
                <div className="pt-8 border-t border-primary/10 mt-4 space-y-4">
                    <Link to="/login" className="block text-sm uppercase tracking-widest text-primary/60">Account</Link>
                    <Link to="/wishlist" className="block text-sm uppercase tracking-widest text-primary/60">Wishlist</Link>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;