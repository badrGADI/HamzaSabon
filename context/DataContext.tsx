import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { supabase } from '../lib/supabase';

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
    loading: boolean;
    addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
    updateProduct: (id: number, product: Partial<Product>) => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
    addJournalPost: (post: Omit<JournalPost, 'id'>) => Promise<void>;
    updateJournalPost: (id: number, post: Partial<JournalPost>) => Promise<void>;
    deleteJournalPost: (id: number) => Promise<void>;
    uploadImage: (file: File) => Promise<string | null>;
    sendMessage: (data: { firstName: string; lastName: string; email: string; subject: string; message: string }) => Promise<void>;
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
    const [products, setProducts] = useState<Product[]>([]);
    const [journalPosts, setJournalPosts] = useState<JournalPost[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });
        
        if (error) {
            console.error('Error fetching products:', error);
        } else if (data) {
            // Map snake_case to camelCase
            const mappedProducts = data.map((p: any) => ({
                ...p,
                isNew: p.is_new,
                shortDescription: p.short_description,
                howToUse: p.how_to_use,
                // Ensure images is an array
                images: Array.isArray(p.images) ? p.images : (p.image ? [p.image] : [])
            }));
            setProducts(mappedProducts);
        }
    };

    const fetchJournalPosts = async () => {
        const { data, error } = await supabase
            .from('journal_posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching journal posts:', error);
        } else if (data) {
            setJournalPosts(data);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await Promise.all([fetchProducts(), fetchJournalPosts()]);
            setLoading(false);
        };
        loadData();
    }, []);

    const addProduct = async (product: Omit<Product, 'id'>) => {
        const { isNew, shortDescription, howToUse, images, benefits, ...rest } = product;
        
        // Handle arrays: ensure they're valid arrays or null
        const imageArray = Array.isArray(images) && images.length > 0 ? images : [];
        const benefitsArray = Array.isArray(benefits) && benefits.length > 0 ? benefits : null;
        
        const dbProduct = {
            ...rest,
            is_new: isNew,
            short_description: shortDescription,
            how_to_use: howToUse,
            images: imageArray,
            benefits: benefitsArray
        };

        console.log('Attempting to add product:', dbProduct);

        const { error } = await supabase
            .from('products')
            .insert([dbProduct]);

        if (error) {
            console.error('Error adding product:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
            alert(`Error adding product: ${error.message || 'Unknown error'}`);
        } else {
            fetchProducts();
        }
    };

    const updateProduct = async (id: number, updatedProduct: Partial<Product>) => {
        const { isNew, shortDescription, howToUse, images, benefits, ...rest } = updatedProduct;
        const dbUpdate: any = { ...rest };
        
        if (isNew !== undefined) dbUpdate.is_new = isNew;
        if (shortDescription !== undefined) dbUpdate.short_description = shortDescription;
        if (howToUse !== undefined) dbUpdate.how_to_use = howToUse;
        if (images !== undefined) dbUpdate.images = images;
        if (benefits !== undefined) dbUpdate.benefits = Array.isArray(benefits) && benefits.length > 0 ? benefits : null;

        const { error } = await supabase
            .from('products')
            .update(dbUpdate)
            .eq('id', id);

        if (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        } else {
            fetchProducts();
        }
    };

    const deleteProduct = async (id: number) => {
        const { error } = await supabase
            .from('products')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product');
        } else {
            fetchProducts();
        }
    };

    const addJournalPost = async (post: Omit<JournalPost, 'id'>) => {
        console.log('Attempting to add journal post:', post);
        
        const { error } = await supabase
            .from('journal_posts')
            .insert([post]);

        if (error) {
            console.error('Error adding journal post:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
            alert(`Error adding journal post: ${error.message || 'Unknown error'}`);
        } else {
            fetchJournalPosts();
        }
    };

    const updateJournalPost = async (id: number, updatedPost: Partial<JournalPost>) => {
        const { error } = await supabase
            .from('journal_posts')
            .update(updatedPost)
            .eq('id', id);

        if (error) {
            console.error('Error updating journal post:', error);
            alert('Error updating journal post');
        } else {
            fetchJournalPosts();
        }
    };

    const deleteJournalPost = async (id: number) => {
        const { error } = await supabase
            .from('journal_posts')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting journal post:', error);
            alert('Error deleting journal post');
        } else {
            fetchJournalPosts();
        }
    };

    const uploadImage = async (file: File): Promise<string | null> => {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
            const filePath = `products/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('product-images')
                .upload(filePath, file);

            if (uploadError) {
                console.error('Upload error:', uploadError);
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('product-images')
                .getPublicUrl(filePath);

            return data.publicUrl;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const sendMessage = async (data: { firstName: string; lastName: string; email: string; subject: string; message: string }) => {
        const { error } = await supabase
            .from('messages')
            .insert([{
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                subject: data.subject,
                message: data.message
            }]);

        if (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    };

    return (
        <DataContext.Provider value={{
            products,
            journalPosts,
            loading,
            addProduct,
            updateProduct,
            deleteProduct,
            addJournalPost,
            updateJournalPost,
            deleteJournalPost,
            uploadImage,
            sendMessage
        }}>
            {children}
        </DataContext.Provider>
    );
};
