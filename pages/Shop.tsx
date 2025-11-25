import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const tagFilter = searchParams.get('filter');
  const searchQuery = searchParams.get('search');
  
  const [filteredProducts, setFilteredProducts] = React.useState(PRODUCTS);
  const [visibleCount, setVisibleCount] = React.useState(8);

  React.useEffect(() => {
    let result = PRODUCTS;

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query) ||
            p.tag?.toLowerCase().includes(query)
        );
    }

    if (categoryFilter) {
      if (categoryFilter === 'skincare') {
         result = result.filter(p => p.category === 'Skincare');
      } else if (categoryFilter === 'savon') {
         result = result.filter(p => p.category === 'Savon');
      } else if (categoryFilter === 'shampo') {
         result = result.filter(p => p.category === 'Shampo');
      } else if (categoryFilter === 'bomada') {
         result = result.filter(p => p.category === 'Bomada');
      } else if (categoryFilter === 'oil') {
         result = result.filter(p => p.category === 'Oil');
      } else if (categoryFilter === 'packs') {
         result = result.filter(p => p.category === 'Packs');
      }
    }

    if (tagFilter) {
      if (tagFilter === 'best-sellers') {
        result = result.filter(p => p.tag === 'Best Seller');
      } else if (tagFilter === 'new') {
        result = result.filter(p => p.isNew);
      }
    }

    setFilteredProducts(result);
  }, [categoryFilter, tagFilter, searchQuery]);

  const handleFilterChange = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
      // Clear the other filter to avoid confusion in this simple implementation
      if (key === 'category') newParams.delete('filter');
      if (key === 'filter') newParams.delete('category');
      // Clear search if filtering
      newParams.delete('search');
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
    setVisibleCount(8);
  };

  const loadMore = () => {
      setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="bg-secondary min-h-screen pt-10 pb-24 animate-fade-in">
      {/* Header */}
      <div className="bg-primary text-secondary py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Collection</h1>
          <p className="text-secondary/70 max-w-xl mx-auto font-light">
            Explore our complete range of organic skincare, meticulously crafted to nourish, restore, and illuminate your natural beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-primary/10 pb-6 gap-4">
          
          {/* Category Filters - Horizontal Line */}
          <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <button 
                onClick={() => handleFilterChange('category', null)}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${!categoryFilter && !tagFilter && !searchQuery ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                All
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'skincare')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'skincare' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Skincare
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'savon')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'savon' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Savon
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'shampo')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'shampo' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Shampo
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'bomada')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'bomada' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Bomada
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'oil')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'oil' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Oil
            </button>
            <button 
                onClick={() => handleFilterChange('category', 'packs')}
                className={`text-xs uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'packs' ? 'text-primary font-bold border-b-2 border-primary' : 'text-primary/60 hover:text-primary'}`}
            >
                Packs
            </button>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button 
                onClick={() => handleFilterChange('filter', tagFilter === 'best-sellers' ? null : 'best-sellers')}
                className={`text-xs uppercase tracking-widest transition-colors ${tagFilter === 'best-sellers' ? 'text-accent font-bold' : 'text-primary hover:text-accent'}`}
            >
                Best Sellers
            </button>
            <div className="h-4 w-[1px] bg-primary/20"></div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary cursor-pointer">
              Sort By <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Search Result Message */}
        {searchQuery && (
            <div className="mb-8 text-primary/60 text-sm">
                Showing results for "{searchQuery}"
                <button onClick={() => setSearchParams({})} className="ml-2 text-accent hover:underline">Clear Search</button>
            </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.slice(0, visibleCount).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-primary/60">
                No products found matching your criteria.
            </div>
        )}

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
            <div className="mt-20 text-center">
                <button onClick={loadMore} className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-12 py-4 uppercase text-xs tracking-widest">
                    Load More Products
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Shop;