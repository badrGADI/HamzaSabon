import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen animate-fade-in">
      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Us" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="font-serif text-5xl md:text-7xl text-white">Get in Touch</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
                <span className="text-accent text-xs uppercase tracking-widest font-bold mb-6 block">Contact Us</span>
                <h2 className="font-serif text-4xl text-primary mb-8">We'd Love to Hear From You</h2>
                <p className="text-primary/70 mb-12 font-light leading-relaxed">
                    Have a question about our ingredients? Need help with your ritual? Or just want to say hello? 
                    Our team is here to guide you on your journey to natural radiance.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-full text-primary">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-primary mb-2">Visit Our Studio</h3>
                            <p className="text-primary/60 font-light">
                                123 Botanical Lane<br/>
                                Portland, OR 97204
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-full text-primary">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-primary mb-2">Email Us</h3>
                            <p className="text-primary/60 font-light">
                                hello@naturvibe.com<br/>
                                support@naturvibe.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-full text-primary">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-serif text-xl text-primary mb-2">Call Us</h3>
                            <p className="text-primary/60 font-light">
                                +1 (555) 123-4567<br/>
                                Mon-Fri, 9am - 5pm PST
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-primary/5">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-primary mb-2">First Name</label>
                            <input type="text" className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-primary mb-2">Last Name</label>
                            <input type="text" className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-primary mb-2">Email Address</label>
                        <input type="email" className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-primary mb-2">Subject</label>
                        <select className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors">
                            <option>General Inquiry</option>
                            <option>Order Support</option>
                            <option>Wholesale</option>
                            <option>Press</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-primary mb-2">Message</label>
                        <textarea rows={4} className="w-full border-b border-primary/20 py-2 focus:outline-none focus:border-accent bg-transparent transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 uppercase text-xs tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2">
                        Send Message <Send size={14} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
