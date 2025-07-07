import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/Products/ProductGrid';
import { Plus, Package } from 'lucide-react';

const ManageProductsPage = () => {
  const { products, loading, error, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts(1, 50); // Fetch more products for management
  }, [fetchProducts]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
          <p className="text-gray-600 mt-1">
            Add, edit, or remove products from your store
          </p>
        </div>
        <Link
          to="/manage/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Product</span>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900">
                {new Set(products.map(p => p.category)).size}
              </p>
            </div>
            <Package className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Price</p>
              <p className="text-2xl font-bold text-gray-900">
                ${products.length > 0 ? (products.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0) / products.length).toFixed(2) : '0.00'}
              </p>
            </div>
            <Package className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Products Grid with Management Actions */}
      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        showActions={true}
        onRetry={fetchProducts}
      />
    </div>
  );
};

export default ManageProductsPage;