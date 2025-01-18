import { useMutation } from 'react-query';
import { postBlog } from './apiEndpoint';
 // Import the new fetcher

interface BlogData {
  createdAt: string;
  type: string;
  title: string;
  description: string;
  createdBy: string;
}

export const usePostBlog = () => {
  const mutation = useMutation(
    async (blogData: BlogData) => {
      return postBlog(blogData); // Use the postBlog fetcher function
    },
    {
      onSuccess: (data) => {
        console.log('Blog posted successfully:', data);
      },
      onError: (error) => {
        console.error('Error posting blog:', error);
      },
    }
  );

  return mutation; // Returns mutate and related properties (isLoading, isSuccess, etc.)
};
