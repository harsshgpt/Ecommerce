const BASE_URL = 'https://fakestoreapi.in/api';

// Generic API function with error handling
const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Product API functions
export const productAPI = {
  // Get all products
  getProducts: (page = 1, limit = 20) => 
    apiCall(`${BASE_URL}/products?page=${page}&limit=${limit}`),

  // Get single product by ID
  getProductById: (id) => 
    apiCall(`${BASE_URL}/products/${id}`),

  // Get products by category
  getProductsByCategory: (category) => 
    apiCall(`${BASE_URL}/products/category?type=${category}`),

  // Get all categories
  getCategories: () => 
    apiCall(`${BASE_URL}/products/category`),

  // Create new product
  createProduct: (productData) => 
    apiCall(`${BASE_URL}/products`, {
      method: 'POST',
      body: JSON.stringify(productData),
    }),

  // Update product (full update)
  updateProduct: (id, productData) => 
    apiCall(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    }),

  // Partial update product
  patchProduct: (id, updates) => 
    apiCall(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    }),

  // Delete product
  deleteProduct: (id) => 
    apiCall(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    }),
};