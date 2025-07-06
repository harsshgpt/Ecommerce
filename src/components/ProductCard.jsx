import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
          />
          {discountPercentage > 0 && (
            <div className="absolute px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full top-3 left-3">
              -{discountPercentage}%
            </div>
          )}
          <button className="absolute p-2 transition-colors bg-white rounded-full shadow-md top-3 right-3 hover:bg-gray-50">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors line-clamp-2 group-hover:text-blue-600">
            {product.name}
          </h3>
          
          <p className="mb-3 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center mb-3">
            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;