import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import ProductGrid from '../components/Products/ProductGrid';
import ProductFilters from '../components/Products/ProductFilters';
import AnimatedCounter from '../components/UI/AnimatedCounter';
import { ShoppingBag, TrendingUp, Star } from 'lucide-react';

const HomePage = () => {
  const { products, loading, error, fetchProducts, fetchCategories } = useProducts();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  const featuredProducts = products.slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {isAuthenticated ? `Welcome back, ${user?.name}!` : 'Discover Amazing Products'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Explore our curated collection of products from various categories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              to="/manage"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-center transform hover:scale-105"
            >
              Manage Products
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      {products.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <AnimatedCounter value={products.length} />
              </div>
              <p className="text-gray-600">Total Products</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                <AnimatedCounter value={new Set(products.map(p => p.category)).size} />
              </div>
              <p className="text-gray-600">Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <AnimatedCounter 
                  value={Math.round(products.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0) / products.length)} 
                />
              </div>
              <p className="text-gray-600">Avg. Price ($)</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Legacy Hero Content - keeping for reference */}
      <div className="hidden">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Explore our curated collection of products from various categories
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Shop Now
            </Link>
            <Link
              to="/manage"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-center"
            >
              Manage Products
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            icon: ShoppingBag,
            title: 'Wide Selection',
            description: 'Browse through thousands of products across multiple categories',
            color: 'text-blue-600',
            delay: 0.1,
          },
          {
            icon: TrendingUp,
            title: 'Trending Products',
            description: 'Discover the most popular items and latest trends',
            color: 'text-green-600',
            delay: 0.2,
          },
          {
            icon: Star,
            title: 'Quality Assured',
            description: 'All products are carefully selected and quality checked',
            color: 'text-yellow-500',
            delay: 0.3,
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: feature.delay }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300"
          >
            <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Legacy Features - keeping for reference */}
      <div className="hidden">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ShoppingBag className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-600">
            Browse through thousands of products across multiple categories
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trending Products</h3>
          <p className="text-gray-600">
            Discover the most popular items and latest trends
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-gray-600">
            All products are carefully selected and quality checked
          </p>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ProductFilters />
      </motion.div>

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </Link>
        </div>
        <ProductGrid
          products={featuredProducts}
          loading={loading}
          error={error}
          onRetry={fetchProducts}
        />
      </motion.section>
    </div>
  );
};

export default HomePage;