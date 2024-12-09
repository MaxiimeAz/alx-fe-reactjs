import { useParams } from 'react-router-dom';

function UserProfile() {
  // Use useParams to access the dynamic userId parameter from the URL
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile for user ID: {userId}</p>
      {/* You can fetch data based on userId from an API or local state */}
    </div>
  );
}

export default UserProfile;
