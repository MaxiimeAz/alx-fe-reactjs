import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // useQuery with error handling
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  // Show loading state
  if (isLoading) return <p>Loading...</p>;

  // Show error message
  if (isError) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }

  // Render posts
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
