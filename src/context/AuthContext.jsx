import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = useCallback(async (email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Simulate API call - replace with real authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data - replace with real API response
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          notifications: true,
          newsletter: true,
        }
      };

      localStorage.setItem('user', JSON.stringify(userData));
      dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      toast.success('Welcome back!');
      
      return userData;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      toast.error('Login failed. Please try again.');
      throw error;
    }
  }, []);

  const register = useCallback(async (name, email, password) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now(),
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          notifications: true,
          newsletter: false,
        }
      };

      localStorage.setItem('user', JSON.stringify(userData));
      dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      toast.success('Account created successfully!');
      
      return userData;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
      toast.error('Registration failed. Please try again.');
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('wishlist');
    localStorage.removeItem('cart');
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  }, []);

  const updateProfile = useCallback((updates) => {
    const updatedUser = { ...state.user, ...updates };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    dispatch({ type: 'UPDATE_PROFILE', payload: updates });
    toast.success('Profile updated successfully');
  }, [state.user]);

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};