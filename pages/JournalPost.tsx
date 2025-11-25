import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const JournalPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { journalPosts } = useData();
  const post = journalPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-primary mb-4">Article Not Found</h2>
          <Link to="/journal" className="text-accent hover:underline">Return to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen pt-10 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link to="/journal" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <div className="text-center mb-12">
          <span className="text-accent text-xs uppercase tracking-widest font-bold mb-4 block">{post.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">{post.title}</h1>

          <div className="flex justify-center items-center gap-6 text-primary/50 text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={14} /> By Naturvibe Team</span>
            <span className="flex items-center gap-2"><Clock size={14} /> 5 Min Read</span>
          </div>
        </div>

        <div className="mb-12">
          <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover" />
        </div>

        <div className="prose prose-stone prose-lg mx-auto text-primary/80 font-light leading-relaxed">
          <p className="lead text-xl text-primary font-serif italic mb-8">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-wrap">
            {post.content || (
              <>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3 className="font-serif text-2xl text-primary mt-8 mb-4">The Ritual</h3>
                <p className="mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <blockquote className="border-l-2 border-accent pl-6 py-2 my-8 font-serif text-xl text-primary italic">
                  "Nature does not hurry, yet everything is accomplished."
                </blockquote>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPost;
