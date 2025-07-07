import React from 'react';
import ProductForm from '../components/Products/ProductForm';

const AddProductPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Add New Product
      </h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;