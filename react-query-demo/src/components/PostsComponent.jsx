import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  // useQuery with advanced options
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Data remains fresh for 1 minute (60000 ms)
    cacheTime: 300000, // Cached data persists for 5 minutes (300000 ms) after becoming stale
    refetchOnWindowFocus: false, // Prevent refetching data when the window regains focus
    keepPreviousData: true, // Keeps old data while fetching new data
  });

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
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch'}
      </button>
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
