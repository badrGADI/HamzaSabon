import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { PRODUCTS, JOURNAL_POSTS } from '../constants';

// Define Journal Post Type locally as it might not be in types.ts yet
export interface JournalPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    content?: string; // Add content field for full articles
}

interface DataContextType {
    products: Product[];
    journalPosts: JournalPost[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
    addJournalPost: (post: Omit<JournalPost, 'id'>) => void;
    updateJournalPost: (id: number, post: Partial<JournalPost>) => void;
    deleteJournalPost: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(() => {
        const saved = localStorage.getItem('products');
        return saved ? JSON.parse(saved) : PRODUCTS;
    });

    const [journalPosts, setJournalPosts] = useState<JournalPost[]>(() => {
        const saved = localStorage.getItem('journalPosts');
        // Map the constant posts to match the interface if needed
        const initialPosts = JOURNAL_POSTS.map(p => ({ ...p, content: '' }));
        return saved ? JSON.parse(saved) : initialPosts;
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('journalPosts', JSON.stringify(journalPosts));
    }, [journalPosts]);

    const addProduct = (product: Omit<Product, 'id'>) => {
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        setProducts(prev => [...prev, { ...product, id: newId }]);
    };

    const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    };

    const deleteProduct = (id: number) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const addJournalPost = (post: Omit<JournalPost, 'id'>) => {
        const newId = Math.max(...journalPosts.map(p => p.id), 0) + 1;
        setJournalPosts(prev => [...prev, { ...post, id: newId }]);
    };

    const updateJournalPost = (id: number, updatedPost: Partial<JournalPost>) => {
        setJournalPosts(prev => prev.map(p => p.id === id ? { ...p, ...updatedPost } : p));
    };

    const deleteJournalPost = (id: number) => {
        setJournalPosts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <DataContext.Provider value={{
            products,
            journalPosts,
            addProduct,
            updateProduct,
            deleteProduct,
            addJournalPost,
            updateJournalPost,
            deleteJournalPost
        }}>
            {children}
        </DataContext.Provider>
    );
};
