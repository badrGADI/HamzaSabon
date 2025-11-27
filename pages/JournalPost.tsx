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

  // Format content with markdown-style syntax
  const formatContent = (text: string) => {
    return text.split('\n\n').map((paragraph, i) => {
      // Handle headings (with or without #)
      if (paragraph.startsWith('# ')) {
        return <h2 key={i} className="font-serif text-3xl text-primary mt-8 mb-4">{paragraph.substring(2)}</h2>;
      }
      if (paragraph.startsWith('## ')) {
        return <h3 key={i} className="font-serif text-2xl text-primary mt-6 mb-3">{paragraph.substring(3)}</h3>;
      }
      
      // Detect headings without # (short lines that look like titles)
      const lines = paragraph.split('\n');
      if (lines.length === 1 && paragraph.length < 60 && !paragraph.includes('.') && paragraph === paragraph.trim()) {
        // Check if it looks like a heading (capitalized, short)
        if (paragraph[0] === paragraph[0].toUpperCase()) {
          return <h3 key={i} className="font-serif text-2xl text-primary mt-6 mb-3">{paragraph}</h3>;
        }
      }
      
      // Handle quotes
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={i} className="border-l-4 border-accent pl-6 py-2 my-6 italic text-primary/80">
            {paragraph.substring(2)}
          </blockquote>
        );
      }
      
      // Handle numbered lists (1. 2. 3. etc)
      if (/^\d+\.\s/.test(paragraph) || paragraph.includes('\n1. ') || paragraph.includes('\n2. ')) {
        const items = paragraph.split('\n').filter(line => /^\d+\.\s/.test(line.trim()));
        if (items.length > 0) {
          return (
            <ol key={i} className="list-decimal list-inside mb-6 space-y-2 ml-4">
              {items.map((item, j) => (
                <li key={j} className="leading-relaxed">{item.replace(/^\d+\.\s/, '')}</li>
              ))}
            </ol>
          );
        }
      }
      
      // Handle bullet lists (- or •)
      if (paragraph.includes('\n- ') || paragraph.includes('\n• ') || paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
        const items = paragraph.split('\n').filter(line => line.trim().startsWith('- ') || line.trim().startsWith('• '));
        if (items.length > 0) {
          return (
            <ul key={i} className="list-disc list-inside mb-6 space-y-2 ml-4">
              {items.map((item, j) => (
                <li key={j} className="leading-relaxed">{item.replace(/^[•-]\s/, '').trim()}</li>
              ))}
            </ul>
          );
        }
      }
      
      // Handle regular paragraphs with inline formatting
      let formattedText = paragraph;
      
      // Bold: **text**
      formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Italic: *text*
      formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // Convert line breaks to <br> for multi-line paragraphs
      formattedText = formattedText.replace(/\n/g, '<br />');
      
      return (
        <p key={i} className="mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedText }} />
      );
    });
  };

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
          <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover rounded-lg" />
        </div>

        <div className="prose prose-stone prose-lg mx-auto text-primary/80 font-light leading-relaxed">
          <p className="lead text-xl text-primary font-serif italic mb-8 border-l-4 border-accent pl-6">
            {post.excerpt}
          </p>
          <div className="text-lg">
            {post.content ? formatContent(post.content) : (
              <>
                <p className="mb-6">
                  This article is currently being written. Please check back soon for the full content.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-primary/10">
          <h3 className="font-serif text-2xl text-primary mb-8 text-center">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journalPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link key={relatedPost.id} to={`/journal/${relatedPost.id}`} className="group">
                  <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-48 object-cover rounded mb-4 group-hover:opacity-90 transition" />
                  <div className="text-xs uppercase tracking-widest text-accent mb-2">{relatedPost.category}</div>
                  <h4 className="font-serif text-xl text-primary group-hover:text-accent transition">{relatedPost.title}</h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPost;
