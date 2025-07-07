import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

const CartContext = createContext();

const initialState = {
  items: [],
  loading: false,
  total: 0,
  itemCount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_CART':
      const items = action.payload;
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      return { ...state, items, total, itemCount };
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let newItems;
      
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const filteredTotal = filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const filteredItemCount = filteredItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: filteredItems,
        total: filteredTotal,
        itemCount: filteredItemCount,
      };
    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      const updatedTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const updatedItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
        itemCount: updatedItemCount,
      };
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0, itemCount: 0 };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user, isAuthenticated } = useAuth();

  // Load cart from localStorage when user changes
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`);
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          dispatch({ type: 'SET_CART', payload: cart });
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      }
    } else {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [user, isAuthenticated]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(state.items));
    }
  }, [state.items, user, isAuthenticated]);

  const addToCart = useCallback((product) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Added to cart');
  }, [isAuthenticated]);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.success('Removed from cart');
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
    if (isAuthenticated && user) {
      localStorage.removeItem(`cart_${user.id}`);
    }
    toast.success('Cart cleared');
  }, [isAuthenticated, user]);

  const getItemQuantity = useCallback((productId) => {
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }, [state.items]);

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};