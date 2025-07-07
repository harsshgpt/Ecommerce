import React from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorMessage from '../UI/ErrorMessage';

const ProductGrid = ({ products, loading, error, showActions = false, onRetry }) => {
  if (loading) {
    return <LoadingSpinner size="xl" className="min-h-64" />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showActions={showActions}
        />
      ))}
    </div>
  );
};

export default ProductGrid;