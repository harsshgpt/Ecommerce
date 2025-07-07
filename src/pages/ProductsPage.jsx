import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/Products/ProductGrid';
import ProductFilters from '../components/Products/ProductFilters';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductsPage = () => {
  const { products, loading, error, pagination, fetchProducts } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    fetchProducts(currentPage, productsPerPage);
  }, [currentPage, fetchProducts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(50 / productsPerPage); // Assuming 50 total products

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
        <p className="text-gray-600">
          Discover our complete collection of products
        </p>
      </div>

      {/* Filters */}
      <ProductFilters />

      {/* Products Grid */}
      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        onRetry={() => fetchProducts(currentPage, productsPerPage)}
      />

      {/* Pagination */}
      {!loading && !error && products.length > 0 && (
        <div className="flex items-center justify-center space-x-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </button>

          {[...Array(Math.min(5, totalPages))].map((_, index) => {
            const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + index;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;