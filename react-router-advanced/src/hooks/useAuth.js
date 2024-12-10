import { useState, useEffect } from 'react';

const useAuth = () => {
  // Step 1: Create a state to store the authentication status (initially false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Step 2: Use useEffect to check the authentication status on component mount
  useEffect(() => {
    // Here, we simulate authentication by checking a value in localStorage
    // In a real app, you might want to fetch this from an API or check a JWT token

    const authStatus = localStorage.getItem('auth'); // Retrieve 'auth' from localStorage

    // Step 3: Set the state based on the value of 'auth'
    // If the value is 'true', consider the user authenticated
    setIsAuthenticated(authStatus === 'true');
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return isAuthenticated; // Return the current authentication status
};

export default useAuth;
