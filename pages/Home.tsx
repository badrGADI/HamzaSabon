import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, REVIEWS } from '../constants';
import { ArrowRight, Star, Leaf, Droplets, Sun } from 'lucide-react';

const Home: React.FC = () => {
  const bestSellers = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.slice(4, 7);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop" 
            alt="Botanical Skincare Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 z-10">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 text-[10px] uppercase tracking-[0.2em] mb-6 rounded-full animate-slide-up">
                Pure Organic Ingredients
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                Nature Meets <br/> <i className="font-serif italic">Science</i>
            </h1>
            <p className="max-w-lg text-lg font-light mb-10 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Experience the transformative power of wild-crafted botanicals. Sustainable luxury for the mindful ritualist.
            </p>
            <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
                <Link to="/shop" className="bg-secondary text-primary hover:bg-white transition-colors px-8 py-4 uppercase text-xs tracking-widest font-medium min-w-[160px] flex items-center justify-center">
                    Shop Collection
                </Link>
                <Link to="/about" className="border border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 uppercase text-xs tracking-widest font-medium min-w-[160px] flex items-center justify-center">
                    Our Philosophy
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
                    <span className="text-xs uppercase tracking-widest font-medium">100% Vegan</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                    <div className="p-4 rounded-full bg-[#E8E4D9] group-hover:bg-[#D6D0C0] transition-colors">
                        <Droplets size={24} strokeWidth={1} />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-medium">Clean Formulas</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                    <div className="p-4 rounded-full bg-[#E8E4D9] group-hover:bg-[#D6D0C0] transition-colors">
                        <Sun size={24} strokeWidth={1} />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-medium">Ethically Sourced</span>
                </div>
            </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-accent text-xs uppercase tracking-widest font-bold mb-2 block">Curated For You</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary">The Essentials</h2>
                </div>
                <Link to="/shop" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors mt-4 md:mt-0 group">
                    View All Products 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {bestSellers.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
            <div className="mt-12 md:hidden text-center">
                    <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-primary pb-1">View All Products</Link>
            </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="bg-[#E6E2D6] flex flex-col justify-center items-center p-12 lg:p-24 text-center order-2 lg:order-1">
            <Leaf className="text-accent mb-6" size={32} strokeWidth={1} />
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-primary">The Ritual of Calm</h2>
            <p className="text-primary/70 leading-relaxed max-w-md mb-10 font-light">
                Our Bamboo & Rice Scrub isn't just skincare—it's a reset button for your mind and body. Formulated with micro-exfoliants from wild-harvested bamboo stems.
            </p>
            <Link to="/product/2" className="bg-primary text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-accent transition-colors duration-300">
                Discover the Ritual
            </Link>
        </div>
        <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden">
                <img 
                src="https://images.unsplash.com/photo-1575268857798-4288c647a7c3?q=80&w=1200&auto=format&fit=crop" 
                alt="Ritual Setting" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
        </div>
      </section>

      {/* Feature Split Section 2 (Reversed) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img 
                src="https://images.unsplash.com/photo-1612217118974-548fac06b7dd?q=80&w=1200&auto=format&fit=crop" 
                alt="Oil Application" 
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
        </div>
        <div className="bg-primary text-secondary flex flex-col justify-center items-center p-12 lg:p-24 text-center">
            <Sun className="text-accent mb-6" size={32} strokeWidth={1} />
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Morning Radiance</h2>
            <p className="text-secondary/70 leading-relaxed max-w-md mb-10 font-light">
                Start your day with our Vitamin C Radiance serum. A potent blend of organic citrus extracts that brightens, protects, and awakens your complexion.
            </p>
            <Link to="/shop?category=serums" className="border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary px-10 py-4 uppercase text-xs tracking-widest transition-colors duration-300">
                Shop Serums
            </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-secondary">
            <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
                <span className="text-accent text-xs uppercase tracking-widest font-bold mb-3 block">Just Arrived</span>
                <h2 className="font-serif text-4xl text-primary">Fresh From The Lab</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newArrivals.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F0ECE4]">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {REVIEWS.map(review => (
                    <div key={review.id} className="bg-secondary p-10 hover:-translate-y-2 transition-transform duration-300 shadow-sm border border-primary/5">
                        <div className="flex text-accent mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} fill="currentColor" />
                            ))}
                        </div>
                        <p className="font-serif text-lg text-primary mb-6 leading-relaxed">"{review.quote}"</p>
                        <div className="flex items-center gap-3 border-t border-primary/10 pt-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                {review.source}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Instagram Feed / Community */}
      <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl text-primary mb-3">@naturvibe.official</h2>
            <p className="text-primary/60 mb-12 font-light">Join our community of mindful beauty lovers.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <img src="https://images.unsplash.com/photo-1597936069379-c0e9b2247494?q=80&w=600&auto=format&fit=crop" alt="Community 1" className="w-full aspect-square object-cover hover:opacity-80 transition cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1629353696311-d1131ccf87d4?q=80&w=600&auto=format&fit=crop" alt="Community 2" className="w-full aspect-square object-cover hover:opacity-80 transition cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1596450531853-27dfd331c688?q=80&w=600&auto=format&fit=crop" alt="Community 3" className="w-full aspect-square object-cover hover:opacity-80 transition cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1556228720-19de75d65243?q=80&w=600&auto=format&fit=crop" alt="Community 4" className="w-full aspect-square object-cover hover:opacity-80 transition cursor-pointer" />
            </div>
            </div>
      </section>
    </div>
  );
};

export default Home;