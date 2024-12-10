import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Get authentication status from useAuth hook

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected content (children)
  return children;
};

export default ProtectedRoute;
