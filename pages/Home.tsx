import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { REVIEWS, USER_REVIEWS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Star, Leaf, Droplets, Sun, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
    const { products } = useData();
    const { t } = useLanguage();

    // Get featured products (e.g., first 4 or marked as best seller)
    const bestSellers = products.filter(p => p.tag === 'Best Seller').slice(0, 4);
    // If no best sellers, just take the first 4
    const displayBestSellers = bestSellers.length > 0 ? bestSellers : products.slice(0, 4);

    const newArrivals = products.filter(p => p.isNew).slice(0, 3);
    const displayNewArrivals = newArrivals.length > 0 ? newArrivals : products.slice(4, 7);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
                {/* Mobile Image - Only visible on small screens */}
                <img
                    src="/images/hero_mobile_naturvibe.jpg"
                    alt="NaturVibe Botanical Skincare"
                    className="absolute inset-0 w-full h-full object-cover md:hidden"
                />
                {/* Desktop/Tablet Image - Hidden on mobile */}
                <img
                    src="/images/hero_naturvibe.png"
                    alt="NaturVibe Botanical Skincare"
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 z-10">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 text-[10px] uppercase tracking-[0.2em] mb-6 rounded-full animate-slide-up">
                        Pure Organic Ingredients
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t.home.heroTitle}
                    </h1>
                    <p className="max-w-lg text-lg font-light mb-10 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {t.home.heroSubtitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/shop" className="bg-secondary text-primary hover:bg-white transition-colors px-8 py-4 uppercase text-xs tracking-widest font-medium min-w-[160px] flex items-center justify-center">
                            {t.home.shopCollection}
                        </Link>
                        <Link to="/about" className="border border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 uppercase text-xs tracking-widest font-medium min-w-[160px] flex items-center justify-center">
                            {t.home.ourPhilosophy}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy / Icons Section */}
            <section className="py-16 bg-secondary border-b border-primary/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-primary/80">
                        <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                            <div className="p-4 rounded-full bg-[#E8E4D9] group-hover:bg-[#D6D0C0] transition-colors">
                                <Leaf size={24} strokeWidth={1} />
                            </div>
                            <span className="text-xs uppercase tracking-widest font-medium">{t.home.vegan}</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                            <div className="p-4 rounded-full bg-[#E8E4D9] group-hover:bg-[#D6D0C0] transition-colors">
                                <Droplets size={24} strokeWidth={1} />
                            </div>
                            <span className="text-xs uppercase tracking-widest font-medium">{t.home.cleanFormulas}</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                            <div className="p-4 rounded-full bg-[#E8E4D9] group-hover:bg-[#D6D0C0] transition-colors">
                                <Sun size={24} strokeWidth={1} />
                            </div>
                            <span className="text-xs uppercase tracking-widest font-medium">{t.home.ethicallySourced}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Naturvibe Section */}
            <section className="py-20 bg-[#F5F5F0]">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">{t.home.whyNaturvibe}</h2>
                    <p className="text-primary/70 text-lg leading-relaxed mb-8 font-light">
                        {t.home.whyNaturvibeDesc}
                    </p>
                    <Link to="/about" className="inline-block border-b border-primary text-primary uppercase text-xs tracking-widest pb-1 hover:text-accent hover:border-accent transition-colors">
                        {t.home.learnMore}
                    </Link>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-accent text-xs uppercase tracking-widest font-bold mb-2 block">{t.home.curatedForYou}</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-primary">{t.home.theEssentials}</h2>
                        </div>
                        <Link to="/shop" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors mt-4 md:mt-0 group">
                            {t.home.viewAllProducts}
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {displayBestSellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 md:hidden text-center">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-primary pb-1">{t.home.viewAllProducts}</Link>
                    </div>
                </div>
            </section>

            {/* Feature Split Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                <div className="bg-[#E6E2D6] flex flex-col justify-center items-center p-12 lg:p-24 text-center order-2 lg:order-1">
                    <Leaf className="text-accent mb-6" size={32} strokeWidth={1} />
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-primary">{t.home.ritualOfCalm}</h2>
                    <p className="text-primary/70 leading-relaxed max-w-md mb-10 font-light">
                        {t.home.ritualDescription}
                    </p>
                    <Link to="/product/2" className="bg-primary text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-accent transition-colors duration-300">
                        {t.home.discoverRitual}
                    </Link>
                </div>
                <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&auto=format&fit=crop"
                        alt="Ritual Setting"
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
            </section>

            {/* Feature Split Section 2 (Reversed) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&auto=format&fit=crop"
                        alt="Oil Application"
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                </div>
                <div className="bg-primary text-secondary flex flex-col justify-center items-center p-12 lg:p-24 text-center">
                    <Sun className="text-accent mb-6" size={32} strokeWidth={1} />
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">{t.home.morningRadiance}</h2>
                    <p className="text-secondary/70 leading-relaxed max-w-md mb-10 font-light">
                        {t.home.morningDescription}
                    </p>
                    <Link to="/shop?category=serums" className="border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary px-10 py-4 uppercase text-xs tracking-widest transition-colors duration-300">
                        {t.home.shopSerums}
                    </Link>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-accent text-xs uppercase tracking-widest font-bold mb-3 block">{t.home.justArrived}</span>
                        <h2 className="font-serif text-4xl text-primary">{t.home.freshFromLab}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayNewArrivals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* User Reviews */}
            <section className="py-24 bg-[#F0ECE4]">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">Loved by our Community</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {USER_REVIEWS.map(review => (
                            <div key={review.id} className="bg-white p-8 shadow-sm border border-primary/5 flex flex-col items-center">
                                <div className="flex text-accent mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="font-serif text-lg text-primary mb-6 leading-relaxed italic">"{review.comment}"</p>
                                <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                                    — {review.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog / Tips Placeholder */}
            <section className="py-16 bg-white border-t border-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl text-primary mb-2">{t.home.blogTitle}</h2>
                    <p className="text-primary/50 text-sm uppercase tracking-widest">{t.home.blogComingSoon}</p>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 bg-secondary border-t border-primary/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center gap-3">
                            <Leaf className="text-accent" size={24} strokeWidth={1} />
                            <span className="text-xs uppercase tracking-widest font-medium text-primary/80">{t.home.trust.botanical}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-1 border border-accent rounded-full">
                                <span className="block w-4 h-4 bg-accent rounded-full"></span>
                            </div>
                            <span className="text-xs uppercase tracking-widest font-medium text-primary/80">{t.home.trust.dermatologist}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Sun className="text-accent" size={24} strokeWidth={1} />
                            <span className="text-xs uppercase tracking-widest font-medium text-primary/80">{t.home.trust.delivery}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <MessageCircle className="text-accent" size={24} strokeWidth={1} />
                            <span className="text-xs uppercase tracking-widest font-medium text-primary/80">{t.home.trust.support}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-primary text-secondary text-center">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Glow?</h2>
                    <p className="text-secondary/70 text-lg mb-10 max-w-xl mx-auto font-light">
                        Join thousands of others who have transformed their skin with Naturvibe.
                    </p>
                    <Link to="/shop" className="inline-block bg-accent text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-white hover:text-primary transition-colors duration-300">
                        Shop Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;