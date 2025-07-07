import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { productAPI } from '../services/api';

const ProductContext = createContext();

const initialState = {
  products: [],
  categories: [],
  currentProduct: null,
  loading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: 1,
    limit: 20,
  },
  filters: {
    category: '',
    sort: 'asc',
    searchTerm: '',
  },
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.payload, loading: false };
    case 'SET_PAGINATION':
      return { ...state, pagination: { ...state.pagination, ...action.payload } };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = useCallback(async (page = 1, limit = 20) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const data = await productAPI.getProducts(page, limit);
      dispatch({ type: 'SET_PRODUCTS', payload: data.products || [] });
      dispatch({ type: 'SET_PAGINATION', payload: { currentPage: page, limit } });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, []);

  const fetchProductById = useCallback(async (id) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const data = await productAPI.getProductById(id);
      dispatch({ type: 'SET_CURRENT_PRODUCT', payload: data.product });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, []);

  const fetchProductsByCategory = useCallback(async (category) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const data = await productAPI.getProductsByCategory(category);
      dispatch({ type: 'SET_PRODUCTS', payload: data.products || [] });
      dispatch({ type: 'SET_FILTERS', payload: { category } });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await productAPI.getCategories();
      dispatch({ type: 'SET_CATEGORIES', payload: data.categories || [] });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  }, []);

  const createProduct = useCallback(async (productData) => {
    try {
      const data = await productAPI.createProduct(productData);
      dispatch({ type: 'ADD_PRODUCT', payload: data.product });
      return data;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  }, []);

  const updateProduct = useCallback(async (id, productData) => {
    try {
      const data = await productAPI.updateProduct(id, productData);
      dispatch({ type: 'UPDATE_PRODUCT', payload: data.product });
      return data;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  }, []);

  const deleteProduct = useCallback(async (id) => {
    try {
      await productAPI.deleteProduct(id);
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      throw error;
    }
  }, []);

  const value = {
    ...state,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    fetchCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    dispatch,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};