import React, { useState } from 'react';
import { useData, JournalPost } from '../../context/DataContext';
import { Plus, Edit, Trash2, X, Save } from 'lucide-react';

const JournalManager: React.FC = () => {
    const { journalPosts, addJournalPost, updateJournalPost, deleteJournalPost } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const initialFormState: Omit<JournalPost, 'id'> = {
        title: '',
        excerpt: '',
        image: '',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        category: 'Wellness',
        content: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId) {
            updateJournalPost(editingId, formData);
        } else {
            addJournalPost(formData);
        }
        closeModal();
    };

    const openModal = (post?: JournalPost) => {
        if (post) {
            setEditingId(post.id);
            setFormData({
                title: post.title,
                excerpt: post.excerpt,
                image: post.image,
                date: post.date,
                category: post.category,
                content: post.content || ''
            });
        } else {
            setEditingId(null);
            setFormData({
                ...initialFormState,
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
            });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setFormData(initialFormState);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deleteJournalPost(id);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-serif font-bold text-primary">Journal Posts</h1>
                <button
                    onClick={() => openModal()}
                    className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition"
                >
                    <Plus size={20} /> Add Post
                </button>
            </div>

            {/* Post List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">Image</th>
                            <th className="p-4 font-medium text-gray-500">Title</th>
                            <th className="p-4 font-medium text-gray-500">Category</th>
                            <th className="p-4 font-medium text-gray-500">Date</th>
                            <th className="p-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {journalPosts.map(post => (
                            <tr key={post.id} className="hover:bg-gray-50">
                                <td className="p-4">
                                    <img src={post.image} alt={post.title} className="w-16 h-12 object-cover rounded" />
                                </td>
                                <td className="p-4 font-medium max-w-xs truncate">{post.title}</td>
                                <td className="p-4 text-gray-500">{post.category}</td>
                                <td className="p-4 text-gray-500">{post.date}</td>
                                <td className="p-4 flex gap-2">
                                    <button onClick={() => openModal(post)} className="text-blue-600 hover:text-blue-800 p-1">
                                        <Edit size={18} />
                                    </button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-800 p-1">
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
                    <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h2 className="text-xl font-bold">{editingId ? 'Edit Post' : 'Add New Post'}</h2>
                            <button onClick={closeModal}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Image URL</label>
                                    <input
                                        type="url"
                                        required
                                        value={formData.image}
                                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">Excerpt (Short Description)</label>
                                    <textarea
                                        required
                                        rows={2}
                                        value={formData.excerpt}
                                        onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">Content (Full Article)</label>
                                    <textarea
                                        rows={8}
                                        value={formData.content}
                                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                                        className="w-full border rounded p-2 font-mono text-sm"
                                        placeholder="Write your article content here..."
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button type="button" onClick={closeModal} className="px-4 py-2 border rounded hover:bg-gray-50">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 flex items-center gap-2">
                                    <Save size={18} /> Save Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JournalManager;
