import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import { Star, ArrowLeft, ShoppingCart, Heart, Share2, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { currentProduct, loading, error, fetchProductById } = useProducts();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id, fetchProductById]);

  if (loading) {
    return <LoadingSpinner size="xl" className="min-h-96" />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => fetchProductById(id)}
      />
    );
  }

  if (!currentProduct) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Product not found.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return typeof price === 'number' ? `$${price.toFixed(2)}` : `$${price}`;
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(currentProduct.id)) {
      removeFromWishlist(currentProduct.id);
    } else {
      addToWishlist(currentProduct);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(currentProduct);
    }
    setQuantity(1);
  };

  const cartQuantity = getItemQuantity(currentProduct?.id);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-600">Products</Link>
        <span>/</span>
        <span className="text-gray-900 capitalize">{currentProduct.category}</span>
      </nav>

      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Products
      </Link>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={currentProduct.image || 'https://via.placeholder.com/600x600?text=No+Image'}
              alt={currentProduct.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x600?text=No+Image';
              }}
            />
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Category Badge */}
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full capitalize">
              {currentProduct.category}
            </span>
            {currentProduct.brand && (
              <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                {currentProduct.brand}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">
            {currentProduct.title}
          </h1>

          {/* Rating */}
          {currentProduct.rating && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(currentProduct.rating.rate)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {currentProduct.rating.rate} ({currentProduct.rating.count} reviews)
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-gray-900">
              {formatPrice(currentProduct.price)}
            </span>
            {currentProduct.discount && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(currentProduct.price * (1 + currentProduct.discount / 100))}
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {currentProduct.description}
            </p>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProduct.model && (
              <div>
                <span className="text-sm font-medium text-gray-900">Model:</span>
                <span className="text-sm text-gray-600 ml-2">{currentProduct.model}</span>
              </div>
            )}
            {currentProduct.color && (
              <div>
                <span className="text-sm font-medium text-gray-900">Color:</span>
                <span className="text-sm text-gray-600 ml-2 capitalize">{currentProduct.color}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {cartQuantity > 0 && (
                <span className="text-sm text-gray-600">
                  ({cartQuantity} in cart)
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  isInWishlist(currentProduct.id)
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(currentProduct.id) ? 'fill-current' : ''}`} />
                <span>
                  {isInWishlist(currentProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </span>
              </button>
              <button className="bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          {cartQuantity > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 p-4 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-800">
                  {cartQuantity} item(s) in your cart
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(currentProduct.id, cartQuantity - 1)}
                    className="p-1 text-blue-600 hover:bg-blue-200 rounded"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium text-blue-800 w-8 text-center">
                    {cartQuantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(currentProduct.id, cartQuantity + 1)}
                    className="p-1 text-blue-600 hover:bg-blue-200 rounded"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Legacy buttons - keeping for compatibility */}
          <div className="hidden">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Add to Wishlist</span>
            </button>
            <button className="bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Product Information</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Free shipping on orders over $50</li>
              <li>• 30-day return policy</li>
              <li>• 2-year warranty included</li>
              <li>• Customer support available 24/7</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;