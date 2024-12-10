import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link> {/* Link to ProfileDetails */}
          </li>
          <li>
            <Link to="settings">Profile Settings</Link> {/* Link to ProfileSettings */}
          </li>
        </ul>
      </nav>

      {/* Define nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet can also render child components, if defined elsewhere */}
      <Outlet />
    </div>
  );
}

export default Profile;
