import React from 'react';

function UserProfile() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="profile-image.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out mx-auto mt-4"
      />
      <h2 className="text-2xl font-semibold hover:text-blue-500 transition-colors duration-300 ease-in-out text-center mt-4">
        John Doe
      </h2>
      <p className="text-gray-600 text-center mt-2">
        A passionate developer and tech enthusiast.
      </p>
    </div>
  );
}

export default UserProfile;
