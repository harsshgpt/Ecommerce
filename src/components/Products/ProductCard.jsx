import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Edit, Trash2, Heart, ShoppingCart } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product, showActions = false }) => {
  const { deleteProduct } = useProducts();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(product.id);
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const formatPrice = (price) => {
    return typeof price === 'number' ? `$${price.toFixed(2)}` : `$${price}`;
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
          <img
            src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
            }}
          />
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
              isInWishlist(product.id)
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full capitalize">
              {product.category}
            </span>
            {product.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{product.rating.rate}</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {!showActions && (
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            )}
            {showActions && (
              <div className="flex items-center space-x-2">
                <Link
                  to={`/manage/edit/${product.id}`}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Edit className="h-4 w-4" />
                </Link>
                <button
                  onClick={handleDelete}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;