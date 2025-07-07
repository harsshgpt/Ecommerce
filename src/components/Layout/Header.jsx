import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Plus, Heart, User, LogOut } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import LoginModal from '../Auth/LoginModal';
import CartSidebar from '../Cart/CartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { categories, fetchProductsByCategory, fetchProducts } = useProducts();
  const { user, isAuthenticated, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleCategorySelect = (category) => {
    if (category === 'all') {
      fetchProducts();
    } else {
      fetchProductsByCategory(category);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 space-x-3">
            <ShoppingCart className="text-blue-600 h-9 w-9" />
            <span className="text-2xl font-bold text-gray-900">TrendWave</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden ml-12 space-x-10 lg:flex">
            <Link to="/" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                Categories
              </button>
              <div className="absolute left-0 invisible mt-3 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 w-52 group-hover:opacity-100 group-hover:visible">
                <div className="py-3">
                  <button
                    onClick={() => handleCategorySelect('all')}
                    className="block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 capitalize transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/manage" className="font-medium text-gray-700 transition-colors hover:text-blue-600">
              Manage
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8 lg:mx-12">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full py-3 pl-12 pr-5 transition-all duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            {isAuthenticated && (
              <Link
                to="/wishlist"
                className="relative p-2.5 text-gray-700 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
              >
                <Heart className="w-6 h-6" />
                {wishlistItems.length > 0 && (
                  <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full -top-1 -right-1">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            )}

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-500 rounded-full -top-1 -right-1">
                  {itemCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="border-2 border-gray-200 rounded-full w-9 h-9"
                  />
                  <span className="hidden text-sm font-medium text-gray-700 lg:block">
                    {user?.name}
                  </span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 z-50 mt-3 bg-white border border-gray-100 shadow-xl w-52 rounded-xl">
                    <div className="py-3">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                      <Link
                        to="/wishlist"
                        className="flex items-center space-x-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Heart className="w-4 h-4" />
                        <span>Wishlist</span>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}

            <Link
              to="/manage/new"
              className="hidden lg:flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 lg:hidden bg-gray-50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 font-medium text-gray-700 transition-colors rounded-lg hover:text-blue-600 hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-3 text-sm font-semibold tracking-wide text-gray-700 uppercase">Categories</div>
              <button
                onClick={() => handleCategorySelect('all')}
                className="block w-full text-left px-8 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors"
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="block w-full text-left px-8 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg capitalize transition-colors"
                >
                  {category}
                </button>
              ))}
              <Link
                to="/manage"
                className="block px-4 py-3 font-medium text-gray-700 transition-colors rounded-lg hover:text-blue-600 hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Manage
              </Link>
              <Link
                to="/manage/new"
                className="block px-4 py-3 font-medium text-blue-600 transition-colors rounded-lg hover:text-blue-700 hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Product
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
};

export default Header;