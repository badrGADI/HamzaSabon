import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen animate-fade-in">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop" 
            alt="Nature Landscape" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="font-serif text-5xl md:text-7xl text-white">Our Philosophy</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-24 py-24">
        <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-xs uppercase tracking-widest font-bold mb-6 block">The Beginning</span>
            <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed mb-12">
                "We believe that true luxury lies in the purity of nature. Every drop of Naturvibe is a testament to the healing power of the earth."
            </p>
            <div className="w-24 h-[1px] bg-primary/20 mx-auto mb-12"></div>
            <div className="prose text-primary/70 font-light leading-loose text-lg text-justify">
                <p className="mb-6">
                    Founded in the lush valleys where ancient botanical traditions meet modern science, Naturvibe was born from a desire to slow down. In a world of fast beauty and synthetic fillers, we chose a different path.
                </p>
                <p className="mb-6">
                    Our journey began with a single ingredient: the rare wild rosehip, harvested by hand at high altitudes. We discovered that when ingredients are respected—sourced ethically, processed minimally, and formulated intentionally—they perform miracles.
                </p>
                <p>
                    Today, Naturvibe is more than skincare. It is a ritual. A moment of connection with yourself and the natural world. We invite you to breathe, apply, and feel the vibration of nature on your skin.
                </p>
            </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[600px]">
         <img 
            src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=1000&auto=format&fit=crop" 
            alt="Ingredients" 
            className="w-full h-full object-cover"
         />
         <div className="bg-[#E6E2D6] p-12 md:p-24 flex flex-col justify-center">
             <h2 className="font-serif text-4xl text-primary mb-6">Rooted in Sustainability</h2>
             <p className="text-primary/70 leading-relaxed mb-8 font-light">
                We don't just take from the earth; we give back. Our packaging is 100% recyclable, made from post-consumer glass and FSC-certified paper. We partner with local cooperatives to ensure fair wages for the hands that harvest our botanicals.
             </p>
             <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full"></span> Carbon Neutral Shipping
                 </li>
                 <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full"></span> Cruelty-Free Forever
                 </li>
                 <li className="flex items-center gap-3 text-primary font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full"></span> Traceable Supply Chain
                 </li>
             </ul>
         </div>
      </div>
    </div>
  );
};

export default About;