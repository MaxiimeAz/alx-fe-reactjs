import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} /> {/* Nested route for ProfileDetails */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Nested route for ProfileSettings */}
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Welcome to the Home Page!</div>;  {/* Home page */}
}

export default App;
