import React from 'react';
import { useProducts } from '../../context/ProductContext';

const ProductFilters = () => {
  const { categories, filters, fetchProductsByCategory, fetchProducts } = useProducts();

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      fetchProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      
      <div>
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category || 'all'}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;