import React from 'react';
import { Navigate } from 'react-router-dom';

// This component takes an `isAuthenticated` prop and a `children` prop
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/login" />;
  }

  // Render the protected content if the user is authenticated
  return children;
};

export default ProtectedRoute;
