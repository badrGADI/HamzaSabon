import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf, ChevronDown, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import TopBanner from './TopBanner';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const { cartCount } = useCart();
    const { language, setLanguage, t } = useLanguage();
    const navigate = useNavigate();

    const navItems = [
        { label: t.nav.home, href: '/' },
        {
            label: t.nav.collections,
            href: '/shop',
            subItems: [
                { label: t.nav.shopAll, href: '/shop' },
                { label: t.nav.skincare, href: '/shop?category=skincare' },
                { label: t.nav.savon, href: '/shop?category=savon' },
                { label: t.nav.shampo, href: '/shop?category=shampo' },
                { label: t.nav.bomada, href: '/shop?category=bomada' },
                { label: t.nav.oil, href: '/shop?category=oil' },
                { label: t.nav.packs, href: '/shop?category=packs' },
            ]
        },
        { label: t.nav.ourStory, href: '/about' },
        { label: t.nav.journal, href: '/journal' },
        { label: t.nav.contact, href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu and search on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [location]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <header className="fixed w-full z-40 top-0">
            <TopBanner />

            {/* Search Overlay */}
            <div className={`fixed inset-0 bg-secondary/95 backdrop-blur-md z-50 transition-all duration-500 flex items-center justify-center ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute top-8 right-8 p-2 text-primary hover:text-accent transition-colors"
                >
                    <X size={32} strokeWidth={1} />
                </button>
                <div className="w-full max-w-3xl px-6">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="text"
                            placeholder={t.shop.searchPlaceholder}
                            className="w-full bg-transparent border-b-2 border-primary/20 py-4 text-3xl md:text-5xl font-serif text-primary placeholder-primary/30 focus:outline-none focus:border-primary transition-colors text-center"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus={isSearchOpen}
                        />
                        <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/50 hover:text-primary transition-colors">
                            <Search size={32} strokeWidth={1.5} />
                        </button>
                    </form>
                    <p className="text-center mt-8 text-primary/40 text-sm uppercase tracking-widest">Press Enter to Search</p>
                </div>
            </div>

            <div
                className={`transition-all duration-500 border-b border-transparent ${isScrolled
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
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-primary hover:text-accent transition-colors flex items-center gap-2 group"
                        >
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
                            {/* Language Switcher */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-xs uppercase tracking-widest font-medium hover:text-accent transition-colors">
                                    <Globe size={16} strokeWidth={1.5} />
                                    <span>{language.toUpperCase()}</span>
                                </button>
                                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[100px]">
                                    <div className="bg-white/95 backdrop-blur-md border border-primary/10 shadow-lg p-2 flex flex-col">
                                        <button onClick={() => setLanguage('en')} className={`text-xs uppercase tracking-widest px-4 py-2 text-left hover:bg-primary/5 transition-colors ${language === 'en' ? 'text-accent font-bold' : 'text-primary'}`}>English</button>
                                        <button onClick={() => setLanguage('fr')} className={`text-xs uppercase tracking-widest px-4 py-2 text-left hover:bg-primary/5 transition-colors ${language === 'fr' ? 'text-accent font-bold' : 'text-primary'}`}>Français</button>
                                        <button onClick={() => setLanguage('ar')} className={`text-xs uppercase tracking-widest px-4 py-2 text-left hover:bg-primary/5 transition-colors ${language === 'ar' ? 'text-accent font-bold' : 'text-primary'}`}>العربية</button>
                                    </div>
                                </div>
                            </div>

                            <Link to="/login" className="text-xs uppercase tracking-widest font-medium hover:text-accent transition-colors">Sign In</Link>
                            <Link to="/cart" aria-label="Cart" className="relative group">
                                <ShoppingBag size={20} strokeWidth={1.5} className="text-primary group-hover:text-accent transition-colors" />
                                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
                            </Link>
                        </div>
                        {/* Mobile Cart */}
                        <Link to="/cart" className="md:hidden relative">
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation - Below Logo */}
                <nav className={`hidden md:flex justify-center space-x-10 transition-all duration-500 overflow-visible ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100 mt-4'}`}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.href.split('?')[0] &&
                            (item.href.includes('?') ? location.search === `?${item.href.split('?')[1]}` : true);

                        if (item.subItems) {
                            return (
                                <div key={item.label} className="relative group">
                                    <Link
                                        to={item.href}
                                        className={`text-xs tracking-[0.15em] uppercase hover:text-accent transition-colors relative flex items-center gap-1 ${isActive ? 'text-accent font-semibold' : 'text-primary'
                                            }`}
                                    >
                                        {item.label}
                                        <ChevronDown size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-180" />
                                        <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </Link>

                                    {/* Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                                        <div className="bg-white/95 backdrop-blur-md border border-primary/10 shadow-lg p-2 flex flex-col">
                                            {item.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.label}
                                                    to={subItem.href}
                                                    className="text-xs uppercase tracking-widest text-primary hover:text-accent hover:bg-primary/5 px-4 py-3 transition-colors text-center whitespace-nowrap"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={`text-xs tracking-[0.15em] uppercase hover:text-accent transition-colors relative group ${isActive ? 'text-accent font-semibold' : 'text-primary'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        );
                    })}
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
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <Link
                                    to={item.href}
                                    className="font-serif text-2xl text-primary hover:text-accent transition-colors block"
                                >
                                    {item.label}
                                </Link>
                                {item.subItems && (
                                    <div className="pl-4 mt-2 space-y-2 border-l border-primary/10 ml-2">
                                        {item.subItems.map(subItem => (
                                            <Link
                                                key={subItem.label}
                                                to={subItem.href}
                                                className="block text-sm uppercase tracking-widest text-primary/70 hover:text-accent transition-colors"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-8 border-t border-primary/10 mt-4 space-y-4">
                            <Link to="/login" className="block text-sm uppercase tracking-widest text-primary/60">Account</Link>
                            <Link to="/wishlist" className="block text-sm uppercase tracking-widest text-primary/60">Wishlist</Link>
                        </div>

                        <div className="pt-8 border-t border-primary/10 mt-4">
                            <p className="text-sm uppercase tracking-widest text-primary/40 mb-4">Language</p>
                            <div className="flex gap-4">
                                <button onClick={() => setLanguage('en')} className={`text-sm uppercase tracking-widest ${language === 'en' ? 'text-accent font-bold' : 'text-primary'}`}>EN</button>
                                <button onClick={() => setLanguage('fr')} className={`text-sm uppercase tracking-widest ${language === 'fr' ? 'text-accent font-bold' : 'text-primary'}`}>FR</button>
                                <button onClick={() => setLanguage('ar')} className={`text-sm uppercase tracking-widest ${language === 'ar' ? 'text-accent font-bold' : 'text-primary'}`}>AR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;