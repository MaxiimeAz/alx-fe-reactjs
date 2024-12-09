import { Link, Outlet } from 'react-router-dom'; // Import Link and Outlet

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          {/* Link to the Profile Details page */}
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          {/* Link to the Profile Settings page */}
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet renders the nested route components here */}
      <Outlet />
    </div>
  );
}

export default Profile;
