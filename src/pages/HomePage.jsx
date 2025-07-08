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
        className="relative p-8 overflow-hidden text-white bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl md:p-12"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            {isAuthenticated ? `Welcome back, ${user?.name}!` : 'Discover Amazing Products'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-xl text-blue-100 md:text-2xl"
          >
            Explore our curated collection of products from various categories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/products"
              className="px-8 py-3 font-semibold text-center text-blue-600 transition-colors transform bg-white rounded-lg hover:bg-gray-100 hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              to="/manage"
              className="px-8 py-3 font-semibold text-center text-white transition-colors transform bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-105"
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
          className="p-8 bg-white shadow-lg rounded-2xl"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl font-bold text-blue-600">
                <AnimatedCounter value={products.length} />
              </div>
              <p className="text-gray-600">Total Products</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-green-600">
                <AnimatedCounter value={new Set(products.map(p => p.category)).size} />
              </div>
              <p className="text-gray-600">Categories</p>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-purple-600">
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
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="mb-8 text-xl text-blue-100 md:text-2xl">
            Explore our curated collection of products from various categories
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/products"
              className="px-8 py-3 font-semibold text-center text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
            >
              Shop Now
            </Link>
            <Link
              to="/manage"
              className="px-8 py-3 font-semibold text-center text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400"
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
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
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
            className="p-6 text-center transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <feature.icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Legacy Features - keeping for reference */}
      <div className="hidden">
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="mb-2 text-xl font-semibold">Wide Selection</h3>
          <p className="text-gray-600">
            Browse through thousands of products across multiple categories
          </p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h3 className="mb-2 text-xl font-semibold">Trending Products</h3>
          <p className="text-gray-600">
            Discover the most popular items and latest trends
          </p>
        </div>
        <div className="p-6 text-center bg-white rounded-lg shadow-md">
          <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="mb-2 text-xl font-semibold">Quality Assured</h3>
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
            className="font-medium text-blue-600 hover:text-blue-700"
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