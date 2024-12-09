import { Link, Outlet } from 'react-router-dom'; // Import Link and Outlet from react-router-dom

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
      {/* Outlet renders the nested route components */}
      <Outlet />
    </div>
  );
}

export default Profile;
