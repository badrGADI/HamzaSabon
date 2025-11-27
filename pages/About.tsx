import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplet, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop" 
          alt="Nature Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-serif text-6xl md:text-8xl mb-6 animate-fade-in">Our Story</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Where nature meets science in perfect harmony
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-sm uppercase tracking-[0.3em] font-semibold mb-8 block">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
            True luxury lies in the purity of nature
          </h2>
          <p className="text-primary/70 text-lg md:text-xl leading-relaxed font-light">
            Every drop of Naturvibe is a testament to the healing power of the earth. 
            We believe in creating products that honor both your skin and our planet.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=1000&auto=format&fit=crop" 
                alt="Natural Ingredients" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-primary mb-6">
                The Beginning
              </h3>
              <div className="space-y-4 text-primary/70 leading-relaxed">
                <p>
                  Founded in the lush valleys where ancient botanical traditions meet modern science, 
                  Naturvibe was born from a desire to slow down. In a world of fast beauty and 
                  synthetic fillers, we chose a different path.
                </p>
                <p>
                  Our journey began with a single ingredient: the rare wild rosehip, harvested by 
                  hand at high altitudes. We discovered that when ingredients are respected—sourced 
                  ethically, processed minimally, and formulated intentionally—they perform miracles.
                </p>
                <p>
                  Today, Naturvibe is more than skincare. It is a ritual. A moment of connection 
                  with yourself and the natural world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl text-primary mb-4">
              Our Commitments
            </h3>
            <p className="text-primary/60 text-lg">
              The values that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Leaf className="text-accent" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl text-primary mb-3">100% Natural</h4>
              <p className="text-primary/60 text-sm leading-relaxed">
                Only pure botanical ingredients, nothing synthetic
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="text-accent" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl text-primary mb-3">Cruelty-Free</h4>
              <p className="text-primary/60 text-sm leading-relaxed">
                Never tested on animals, certified and verified
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Droplet className="text-accent" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl text-primary mb-3">Sustainable</h4>
              <p className="text-primary/60 text-sm leading-relaxed">
                Eco-friendly packaging and carbon-neutral shipping
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Shield className="text-accent" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl text-primary mb-3">Dermatologist Tested</h4>
              <p className="text-primary/60 text-sm leading-relaxed">
                Clinically proven safe for all skin types
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6 bg-primary text-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl md:text-5xl mb-8">
            Rooted in Sustainability
          </h3>
          <p className="text-secondary/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            We don't just take from the earth; we give back. Our packaging is 100% recyclable, 
            made from post-consumer glass and FSC-certified paper. We partner with local 
            cooperatives to ensure fair wages for the hands that harvest our botanicals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">Carbon Neutral Shipping</h4>
                <p className="text-secondary/70 text-sm">
                  Every delivery offset with verified carbon credits
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">Cruelty-Free Forever</h4>
                <p className="text-secondary/70 text-sm">
                  Certified by leading animal welfare organizations
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold mb-2">Traceable Supply Chain</h4>
                <p className="text-secondary/70 text-sm">
                  Know exactly where every ingredient comes from
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-5xl md:text-6xl text-primary mb-6">
            Ready to Glow?
          </h3>
          <p className="text-primary/60 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of others who have transformed their skin with Naturvibe.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;