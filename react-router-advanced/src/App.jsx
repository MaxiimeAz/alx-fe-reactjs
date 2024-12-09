import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';  // New dynamic route component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        
        {/* Profile route with nested routes */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} /> {/* Nested route for details */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Nested route for settings */}
        </Route>
        
        {/* Dynamic route for user profile */}
        <Route path="/user/:userId" element={<UserProfile />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

export default App;
