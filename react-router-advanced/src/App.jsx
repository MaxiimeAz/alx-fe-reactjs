import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Your Home component
import Login from './pages/Login'; // Your Login component
import Profile from './components/Profile'; // Your Profile component
import ProfileDetails from './components/ProfileDetails'; // ProfileDetails component
import ProfileSettings from './components/ProfileSettings'; // ProfileSettings component

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/profile/*"
        element={
          isAuthenticated ? (
            <Profile />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        {/* Nested Routes for Profile */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
