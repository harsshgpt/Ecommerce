import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/Products/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Edit Product
      </h1>
      <ProductForm productId={id} />
    </div>
  );
};

export default EditProductPage;