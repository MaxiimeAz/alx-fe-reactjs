import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'; // Import Profile component
import ProfileDetails from './components/ProfileDetails'; // Import ProfileDetails component
import ProfileSettings from './components/ProfileSettings'; // Import ProfileSettings component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the home page */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} /> {/* Nested route for ProfileDetails */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Nested route for ProfileSettings */}
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;  {/* Home page content */}
}

export default App;
