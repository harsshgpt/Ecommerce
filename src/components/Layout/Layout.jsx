import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from '../UI/FloatingActionButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Layout;