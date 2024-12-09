import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile'; // Import Profile component
import ProfileDetails from './components/ProfileDetails'; // Import ProfileDetails
import ProfileSettings from './components/ProfileSettings'; // Import ProfileSettings

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for home page */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} /> {/* Nested route for details */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Nested route for settings */}
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;  {/* Home page */}
}

export default App;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;
}

export default App;
