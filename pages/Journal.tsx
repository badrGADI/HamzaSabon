import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Journal: React.FC = () => {
  const { journalPosts } = useData();

  return (
    <div className="bg-secondary min-h-screen pt-10 pb-24 animate-fade-in">
      <div className="bg-primary text-secondary py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Journal</h1>
          <p className="text-secondary/70 max-w-xl mx-auto font-light">
            Stories of wellness, ingredient sourcing, and the art of living slowly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {journalPosts.map(post => (
            <article key={post.id} className="group cursor-pointer flex flex-col">
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-primary/50 mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-accent rounded-full"></span>
                <span className="text-accent">{post.category}</span>
              </div>
              <h2 className="font-serif text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-primary/60 font-light leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link to={`/journal/${post.id}`} className="text-xs uppercase tracking-widest text-primary font-bold border-b border-primary self-start pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                Read Story
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-12 py-4 uppercase text-xs tracking-widest">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journal;