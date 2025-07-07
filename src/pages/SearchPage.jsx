import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/Products/ProductGrid';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { products, loading, error, fetchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts(1, 50); // Fetch more products for search
  }, [fetchProducts]);

  useEffect(() => {
    if (query && products.length > 0) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Search className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
        <p className="text-gray-600">
          {query ? (
            <>
              Found {filteredProducts.length} results for "{query}"
            </>
          ) : (
            'Enter a search term to find products'
          )}
        </p>
      </div>

      {/* Search Results */}
      {query && (
        <ProductGrid
          products={filteredProducts}
          loading={loading}
          error={error}
          onRetry={fetchProducts}
        />
      )}

      {/* No Results */}
      {query && !loading && !error && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            Try searching with different keywords or browse all products
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;