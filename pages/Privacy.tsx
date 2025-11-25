import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="font-serif text-4xl text-primary mb-12">Privacy Policy</h1>
        
        <div className="prose prose-stone text-primary/80 font-light leading-relaxed">
            <p className="mb-6">Last updated: November 24, 2025</p>
            
            <h3 className="font-serif text-xl text-primary mt-8 mb-4">1. Introduction</h3>
            <p>
                At Naturvibe, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h3 className="font-serif text-xl text-primary mt-8 mb-4">2. The Data We Collect</h3>
            <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 mb-6">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
            </ul>

            <h3 className="font-serif text-xl text-primary mt-8 mb-4">3. How We Use Your Data</h3>
            <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 mb-6">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            </ul>

            <h3 className="font-serif text-xl text-primary mt-8 mb-4">4. Data Security</h3>
            <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
