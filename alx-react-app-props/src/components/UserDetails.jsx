
import React, { useContext } from "react";
import UserContext from "../context/UserContext";  // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext);  // Access context value

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
import UserContext from '../context/UserContext'; // Import UserContext relative to UserDetails.jsx
export default UserDetails;
