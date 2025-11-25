import React from 'react';
import { useData } from '../../context/DataContext';
import { Package, FileText, TrendingUp } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const { products, journalPosts } = useData();

    const stats = [
        { label: 'Total Products', value: products.length, icon: <Package size={24} />, color: 'bg-blue-100 text-blue-600' },
        { label: 'Total Journal Posts', value: journalPosts.length, icon: <FileText size={24} />, color: 'bg-green-100 text-green-600' },
        { label: 'Categories', value: new Set(products.map(p => p.category)).size, icon: <TrendingUp size={24} />, color: 'bg-purple-100 text-purple-600' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-serif font-bold text-primary mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className={`p-4 rounded-full ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold mb-4">Recent Products</h2>
                    <div className="space-y-4">
                        {products.slice(-5).reverse().map(product => (
                            <div key={product.id} className="flex items-center gap-4 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
                                <div>
                                    <p className="font-medium text-sm">{product.name}</p>
                                    <p className="text-xs text-gray-500">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold mb-4">Recent Journal Posts</h2>
                    <div className="space-y-4">
                        {journalPosts.slice(-5).reverse().map(post => (
                            <div key={post.id} className="flex items-center gap-4 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                <img src={post.image} alt={post.title} className="w-10 h-10 rounded object-cover" />
                                <div>
                                    <p className="font-medium text-sm truncate max-w-[200px]">{post.title}</p>
                                    <p className="text-xs text-gray-500">{post.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
