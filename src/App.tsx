import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ManageProductsPage from './pages/ManageProductsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import SearchPage from './pages/SearchPage';
import WishlistPage from './components/Wishlist/WishlistPage';
import ProfilePage from './components/Profile/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductDetailsPage />} />
                  <Route path="/manage" element={<ManageProductsPage />} />
                  <Route path="/manage/new" element={<AddProductPage />} />
                  <Route path="/manage/edit/:id" element={<EditProductPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </Layout>
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                }}
              />
            </Router>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;