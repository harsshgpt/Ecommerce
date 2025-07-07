import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

const initialState = {
  items: [],
  loading: false,
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_WISHLIST':
      return { ...state, items: action.payload };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_WISHLIST':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);
  const { user, isAuthenticated } = useAuth();

  // Load wishlist from localStorage when user changes
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedWishlist = localStorage.getItem(`wishlist_${user.id}`);
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          dispatch({ type: 'SET_WISHLIST', payload: wishlist });
        } catch (error) {
          console.error('Error loading wishlist:', error);
        }
      }
    } else {
      dispatch({ type: 'CLEAR_WISHLIST' });
    }
  }, [user, isAuthenticated]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(state.items));
    }
  }, [state.items, user, isAuthenticated]);

  const addToWishlist = useCallback((product) => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to wishlist');
      return;
    }

    const isAlreadyInWishlist = state.items.some(item => item.id === product.id);
    if (isAlreadyInWishlist) {
      toast.error('Item already in wishlist');
      return;
    }

    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    toast.success('Added to wishlist');
  }, [state.items, isAuthenticated]);

  const removeFromWishlist = useCallback((productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    toast.success('Removed from wishlist');
  }, []);

  const isInWishlist = useCallback((productId) => {
    return state.items.some(item => item.id === productId);
  }, [state.items]);

  const clearWishlist = useCallback(() => {
    dispatch({ type: 'CLEAR_WISHLIST' });
    if (isAuthenticated && user) {
      localStorage.removeItem(`wishlist_${user.id}`);
    }
    toast.success('Wishlist cleared');
  }, [isAuthenticated, user]);

  const value = {
    ...state,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};