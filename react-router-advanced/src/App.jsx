import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import Login from './pages/Login';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

const App = () => {
  const isAuthenticated = true; // Simulate authentication

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile/*"
        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
