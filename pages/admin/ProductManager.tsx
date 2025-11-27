import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Product } from '../../types';
import { Plus, Edit, Trash2, X, Save } from 'lucide-react';

const ProductManager: React.FC = () => {
    const { products, addProduct, updateProduct, deleteProduct, uploadImage } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [uploading, setUploading] = useState(false);

    const initialFormState: Omit<Product, 'id'> = {
        name: '',
        category: 'Skincare',
        price: 0,
        images: [],
        rating: 5,
        tag: '',
        isNew: false,
        shortDescription: '',
        benefits: [],
        howToUse: '',
        ingredients: ''
    };

    const [formData, setFormData] = useState(initialFormState);
    const [benefitsText, setBenefitsText] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Process text areas into arrays
        const processedData = {
            ...formData,
            benefits: benefitsText.split('\n').filter(b => b.trim() !== '')
        };

        if (editingId) {
            await updateProduct(editingId, processedData);
        } else {
            await addProduct(processedData);
        }
        closeModal();
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        
        setUploading(true);
        const newImages: string[] = [];
        
        try {
            for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files[i];
                const url = await uploadImage(file);
                if (url) newImages.push(url);
            }
            
            setFormData(prev => ({
                ...prev,
                images: [...(prev.images || []), ...newImages]
            }));
        } catch (error) {
            console.error("Upload failed", error);
            alert("Failed to upload images");
        } finally {
            setUploading(false);
        }
    };

    const removeImage = (indexToRemove: number) => {
        setFormData(prev => ({
            ...prev,
            images: (prev.images || []).filter((_, index) => index !== indexToRemove)
        }));
    };

    const openModal = (product?: Product) => {
        if (product) {
            setEditingId(product.id);
            setFormData({
                name: product.name,
                category: product.category,
                price: product.price,
                images: product.images || [],
                rating: product.rating || 5,
                tag: product.tag || '',
                isNew: product.isNew || false,
                shortDescription: product.shortDescription || '',
                benefits: product.benefits || [],
                howToUse: product.howToUse || '',
                ingredients: product.ingredients || ''
            });
            setBenefitsText((product.benefits || []).join('\n'));
        } else {
            setEditingId(null);
            setFormData(initialFormState);
            setBenefitsText('');
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setFormData(initialFormState);
        setBenefitsText('');
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-serif font-bold text-primary">Products</h1>
                <button
                    onClick={() => openModal()}
                    className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition"
                >
                    <Plus size={20} /> Add Product
                </button>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">Image</th>
                            <th className="p-4 font-medium text-gray-500">Name</th>
                            <th className="p-4 font-medium text-gray-500">Category</th>
                            <th className="p-4 font-medium text-gray-500">Price</th>
                            <th className="p-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {products.map(product => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="p-4">
                                    <img 
                                        src={product.images && product.images.length > 0 ? product.images[0] : ''} 
                                        alt={product.name} 
                                        className="w-12 h-12 object-cover rounded" 
                                    />
                                </td>
                                <td className="p-4 font-medium">{product.name}</td>
                                <td className="p-4 text-gray-500">{product.category}</td>
                                <td className="p-4">${product.price.toFixed(2)}</td>
                                <td className="p-4 flex gap-2">
                                    <button onClick={() => openModal(product)} className="text-blue-600 hover:text-blue-800 p-1">
                                        <Edit size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800 p-1">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
                            <button onClick={closeModal}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full border rounded p-2"
                                    >
                                        <option value="Skincare">Skincare</option>
                                        <option value="Savon">Savon</option>
                                        <option value="Shampo">Shampo</option>
                                        <option value="Bomada">Bomada</option>
                                        <option value="Oil">Oil</option>
                                        <option value="Packs">Packs</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Price</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        step="0.01"
                                        value={formData.price}
                                        onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tag (Optional)</label>
                                    <input
                                        type="text"
                                        value={formData.tag}
                                        onChange={e => setFormData({ ...formData, tag: e.target.value })}
                                        className="w-full border rounded p-2"
                                        placeholder="e.g., Best Seller"
                                    />
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Product Images</label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                        disabled={uploading}
                                    />
                                    <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center gap-2">
                                        <Plus className="text-gray-400" size={24} />
                                        <span className="text-sm text-gray-500">
                                            {uploading ? 'Uploading...' : 'Click to upload images'}
                                        </span>
                                    </label>
                                </div>
                                
                                {/* Image Previews */}
                                {formData.images && formData.images.length > 0 && (
                                    <div className="grid grid-cols-4 gap-2 mt-4">
                                        {formData.images.map((img, index) => (
                                            <div key={index} className="relative aspect-square group">
                                                <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover rounded border" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                                                >
                                                    <X size={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Short Description (One-liner)</label>
                                <input
                                    type="text"
                                    value={formData.shortDescription}
                                    onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
                                    className="w-full border rounded p-2"
                                    placeholder="A brief summary of the product..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Benefits (One per line)</label>
                                <textarea
                                    value={benefitsText}
                                    onChange={e => setBenefitsText(e.target.value)}
                                    className="w-full border rounded p-2 h-24"
                                    placeholder="Hydrates skin&#10;Reduces redness&#10;Anti-aging properties"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">How to Use</label>
                                <textarea
                                    value={formData.howToUse}
                                    onChange={e => setFormData({ ...formData, howToUse: e.target.value })}
                                    className="w-full border rounded p-2 h-24"
                                    placeholder="Apply a small amount to clean skin..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Ingredients</label>
                                <textarea
                                    value={formData.ingredients}
                                    onChange={e => setFormData({ ...formData, ingredients: e.target.value })}
                                    className="w-full border rounded p-2 h-24"
                                    placeholder="Aqua, Glycerin, Aloe Barbadensis Leaf Juice..."
                                />
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    id="isNew"
                                    checked={formData.isNew}
                                    onChange={e => setFormData({ ...formData, isNew: e.target.checked })}
                                    className="w-4 h-4"
                                />
                                <label htmlFor="isNew" className="text-sm font-medium">Mark as New Arrival</label>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded hover:bg-gray-50">Cancel</button>
                                <button type="submit" disabled={uploading} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 flex items-center gap-2 disabled:opacity-50">
                                    <Save size={18} /> {uploading ? 'Uploading...' : 'Save Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManager;
