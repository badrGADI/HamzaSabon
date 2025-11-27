import React, { useState } from 'react';
import { useData, JournalPost } from '../../context/DataContext';
import { Plus, Edit, Trash2, X, Save, Eye, Image as ImageIcon, Type, Layout } from 'lucide-react';

type Template = 'classic' | 'magazine' | 'minimal';

const JournalManager: React.FC = () => {
    const { journalPosts, addJournalPost, updateJournalPost, deleteJournalPost, uploadImage } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<Template>('classic');
    const [uploading, setUploading] = useState(false);

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
        // Template is only for preview UI, don't send to database
        if (editingId) {
            updateJournalPost(editingId, formData);
        } else {
            addJournalPost(formData);
        }
        closeModal();
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        
        setUploading(true);
        try {
            const file = e.target.files[0];
            const url = await uploadImage(file);
            if (url) {
                setFormData(prev => ({ ...prev, image: url }));
            }
        } catch (error) {
            console.error("Upload failed", error);
            alert("Failed to upload image");
        } finally {
            setUploading(false);
        }
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
        setShowPreview(false);
        setSelectedTemplate('classic');
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deleteJournalPost(id);
        }
    };

    // Format content with basic markdown-like syntax
    const formatContent = (text: string) => {
        return text
            .split('\n\n')
            .map((paragraph, i) => (
                <p key={i} className="mb-4 leading-relaxed">
                    {paragraph}
                </p>
            ));
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
                    <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold">{editingId ? 'Edit Post' : 'Add New Post'}</h2>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowPreview(!showPreview)}
                                    className="px-4 py-2 border rounded hover:bg-gray-50 flex items-center gap-2"
                                >
                                    <Eye size={18} /> {showPreview ? 'Edit' : 'Preview'}
                                </button>
                                <button onClick={closeModal}><X size={24} /></button>
                            </div>
                        </div>

                        {!showPreview ? (
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Template Selection */}
                                <div>
                                    <label className="block text-sm font-medium mb-3">
                                        <Layout className="inline mr-2" size={16} />
                                        Choose Template Style
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {/* Classic Template */}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTemplate('classic')}
                                            className={`p-4 border-2 rounded-lg text-left transition group ${
                                                selectedTemplate === 'classic' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className="font-semibold mb-1">Classic</div>
                                            <div className="text-xs text-gray-500 mb-3">Traditional blog layout</div>
                                            {/* Mini Preview */}
                                            <div className="bg-white border rounded p-2 text-[6px] leading-tight">
                                                <div className="text-center mb-1">
                                                    <div className="h-1 w-8 bg-accent mx-auto mb-1"></div>
                                                    <div className="h-2 w-full bg-gray-800 mb-1"></div>
                                                    <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
                                                </div>
                                                <div className="h-8 bg-gray-200 mb-1"></div>
                                                <div className="space-y-0.5">
                                                    <div className="h-1 bg-gray-300"></div>
                                                    <div className="h-1 bg-gray-300"></div>
                                                    <div className="h-1 bg-gray-300 w-3/4"></div>
                                                </div>
                                            </div>
                                        </button>

                                        {/* Magazine Template */}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTemplate('magazine')}
                                            className={`p-4 border-2 rounded-lg text-left transition group ${
                                                selectedTemplate === 'magazine' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className="font-semibold mb-1">Magazine</div>
                                            <div className="text-xs text-gray-500 mb-3">Bold editorial style</div>
                                            {/* Mini Preview */}
                                            <div className="bg-white border rounded overflow-hidden text-[6px] leading-tight">
                                                <div className="h-8 bg-gray-200 mb-1"></div>
                                                <div className="p-2">
                                                    <div className="h-1 w-8 bg-accent mb-1"></div>
                                                    <div className="h-2 w-full bg-gray-800 mb-1"></div>
                                                    <div className="border-l-2 border-accent pl-1 mb-1">
                                                        <div className="h-1 bg-gray-400"></div>
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="h-1 bg-gray-300"></div>
                                                        <div className="h-1 bg-gray-300"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>

                                        {/* Minimal Template */}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTemplate('minimal')}
                                            className={`p-4 border-2 rounded-lg text-left transition group ${
                                                selectedTemplate === 'minimal' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className="font-semibold mb-1">Minimal</div>
                                            <div className="text-xs text-gray-500 mb-3">Clean & simple</div>
                                            {/* Mini Preview */}
                                            <div className="bg-white border rounded p-2 text-[6px] leading-tight">
                                                <div className="mb-2">
                                                    <div className="h-1 w-12 bg-gray-300 mb-2"></div>
                                                    <div className="h-3 w-full bg-gray-800 mb-1"></div>
                                                    <div className="h-1 bg-gray-400 w-3/4"></div>
                                                </div>
                                                <div className="h-6 bg-gray-200 mb-1"></div>
                                                <div className="space-y-0.5">
                                                    <div className="h-1 bg-gray-300"></div>
                                                    <div className="h-1 bg-gray-300"></div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium mb-1">Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full border rounded p-3 text-lg font-serif"
                                            placeholder="Enter your article title..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Category</label>
                                        <select
                                            value={formData.category}
                                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full border rounded p-2"
                                        >
                                            <option>Wellness</option>
                                            <option>Ingredients</option>
                                            <option>Lifestyle</option>
                                            <option>Sustainability</option>
                                            <option>Beauty Tips</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Date</label>
                                        <input
                                            type="text"
                                            value={formData.date}
                                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        <ImageIcon className="inline mr-2" size={16} />
                                        Featured Image
                                    </label>
                                    {formData.image ? (
                                        <div className="relative">
                                            <img src={formData.image} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, image: '' })}
                                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                id="journal-image-upload"
                                                disabled={uploading}
                                            />
                                            <label htmlFor="journal-image-upload" className="cursor-pointer flex flex-col items-center gap-2">
                                                <ImageIcon className="text-gray-400" size={32} />
                                                <span className="text-sm text-gray-500">
                                                    {uploading ? 'Uploading...' : 'Click to upload image or enter URL below'}
                                                </span>
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="url"
                                                    value={formData.image}
                                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                                    className="w-full border rounded p-2 text-sm"
                                                    placeholder="Or paste image URL here..."
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Excerpt (Short Description)</label>
                                    <textarea
                                        required
                                        rows={2}
                                        value={formData.excerpt}
                                        onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                        className="w-full border rounded p-2"
                                        placeholder="A brief summary that appears on the journal listing page..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        <Type className="inline mr-2" size={16} />
                                        Content (Full Article)
                                    </label>
                                    
                                    {/* Formatting Toolbar */}
                                    <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex gap-2 flex-wrap">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
                                                const start = textarea.selectionStart;
                                                const end = textarea.selectionEnd;
                                                const selectedText = formData.content.substring(start, end);
                                                const newText = formData.content.substring(0, start) + `**${selectedText}**` + formData.content.substring(end);
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm font-bold"
                                            title="Bold"
                                        >
                                            B
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
                                                const start = textarea.selectionStart;
                                                const end = textarea.selectionEnd;
                                                const selectedText = formData.content.substring(start, end);
                                                const newText = formData.content.substring(0, start) + `*${selectedText}*` + formData.content.substring(end);
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm italic"
                                            title="Italic"
                                        >
                                            I
                                        </button>
                                        <div className="border-l mx-1"></div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newText = formData.content + '\n\n# Heading\n\n';
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm font-semibold"
                                            title="Add Heading"
                                        >
                                            H1
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newText = formData.content + '\n\n## Subheading\n\n';
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm"
                                            title="Add Subheading"
                                        >
                                            H2
                                        </button>
                                        <div className="border-l mx-1"></div>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newText = formData.content + '\n\n> Quote text here\n\n';
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm"
                                            title="Add Quote"
                                        >
                                            " "
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newText = formData.content + '\n\n- List item 1\n- List item 2\n- List item 3\n\n';
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm"
                                            title="Add Bullet List"
                                        >
                                            • List
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const newText = formData.content + '\n\n1. First item\n2. Second item\n3. Third item\n\n';
                                                setFormData({ ...formData, content: newText });
                                            }}
                                            className="px-3 py-1 border rounded hover:bg-gray-100 text-sm"
                                            title="Add Numbered List"
                                        >
                                            1. List
                                        </button>
                                    </div>
                                    
                                    <div className="text-xs text-gray-500 bg-blue-50 border border-blue-200 rounded p-2 mb-2 mt-2">
                                        💡 <strong>Tips:</strong>
                                        <ul className="ml-4 mt-1 space-y-1">
                                            <li>• Paste content from ChatGPT or Word directly</li>
                                            <li>• Use **bold** or *italic* for formatting</li>
                                            <li>• Use # for headings, ## for subheadings</li>
                                            <li>• Use &gt; for quotes</li>
                                            <li>• Double line breaks create new paragraphs</li>
                                        </ul>
                                    </div>
                                    
                                    <textarea
                                        id="content-editor"
                                        rows={16}
                                        value={formData.content}
                                        onChange={e => setFormData({ ...formData, content: e.target.value })}
                                        className="w-full border border-t-0 rounded-b-lg p-4 leading-relaxed font-serif"
                                        placeholder="Write your article content here...

You can paste content from ChatGPT or any text editor.

Use double line breaks to create new paragraphs.

**Bold text** or *italic text*

# Main Heading
## Subheading

> This is a quote

- Bullet point 1
- Bullet point 2"
                                    />
                                </div>

                                <div className="pt-4 flex justify-end gap-3 border-t">
                                    <button type="button" onClick={closeModal} className="px-6 py-2 border rounded hover:bg-gray-50">Cancel</button>
                                    <button type="submit" disabled={uploading} className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 flex items-center gap-2 disabled:opacity-50">
                                        <Save size={18} /> {uploading ? 'Uploading...' : 'Save Post'}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="p-8 bg-gray-50">
                                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                                    {/* Preview based on selected template */}
                                    {selectedTemplate === 'classic' && (
                                        <article className="p-12">
                                            <div className="text-center mb-8">
                                                <div className="text-xs uppercase tracking-widest text-accent mb-4">{formData.category}</div>
                                                <h1 className="font-serif text-4xl text-primary mb-4">{formData.title || 'Your Title Here'}</h1>
                                                <div className="text-sm text-gray-500">{formData.date}</div>
                                            </div>
                                            {formData.image && <img src={formData.image} alt={formData.title} className="w-full h-96 object-cover rounded-lg mb-8" />}
                                            <div className="prose max-w-none text-primary/80">
                                                <p className="text-xl font-light mb-6 italic">{formData.excerpt}</p>
                                                {formatContent(formData.content || 'Your content will appear here...')}
                                            </div>
                                        </article>
                                    )}

                                    {selectedTemplate === 'magazine' && (
                                        <article>
                                            {formData.image && <img src={formData.image} alt={formData.title} className="w-full h-[500px] object-cover" />}
                                            <div className="p-12">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="bg-accent text-white px-4 py-1 text-xs uppercase tracking-widest">{formData.category}</span>
                                                    <span className="text-sm text-gray-500">{formData.date}</span>
                                                </div>
                                                <h1 className="font-serif text-5xl text-primary mb-6 leading-tight">{formData.title || 'Your Title Here'}</h1>
                                                <p className="text-2xl font-light mb-8 border-l-4 border-accent pl-6">{formData.excerpt}</p>
                                                <div className="prose max-w-none text-primary/80 text-lg">
                                                    {formatContent(formData.content || 'Your content will appear here...')}
                                                </div>
                                            </div>
                                        </article>
                                    )}

                                    {selectedTemplate === 'minimal' && (
                                        <article className="p-16">
                                            <div className="mb-12">
                                                <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">{formData.category} • {formData.date}</div>
                                                <h1 className="font-serif text-6xl text-primary mb-8 font-light">{formData.title || 'Your Title Here'}</h1>
                                                <p className="text-xl text-gray-600 font-light max-w-2xl">{formData.excerpt}</p>
                                            </div>
                                            {formData.image && <img src={formData.image} alt={formData.title} className="w-full h-[400px] object-cover mb-12" />}
                                            <div className="prose max-w-2xl mx-auto text-primary/70 text-lg font-light leading-loose">
                                                {formatContent(formData.content || 'Your content will appear here...')}
                                            </div>
                                        </article>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default JournalManager;
