import { useQuery, useMutation } from "react-query";
import { fetchData, postData } from "./client";

export const getBlogs = "blogs";

export function useFetchData(queryKey: string) {
  return useQuery([queryKey], () => fetchData(getBlogs), {
    retry: false,
  });
}

export const getBlogCategories = "blog-categories";
export function useGetBlogCategories(queryKey: string) {
  return useQuery([queryKey], () => fetchData(getBlogCategories), {
    retry: false,
  });
}

export const getSingleBlog = (blogId: string) => {
  return `blog/${blogId}`;
};

export function useGetSingleBlog(blogId: string) {
  return useQuery(
    ["singleBlog", blogId],
    () => fetchData(getSingleBlog(blogId)),
    {
      retry: false,
      enabled: !!blogId, // Ensure query is not fired if blogId is undefined
    }
  );
}

export const validateUserUrl = "validate-user";

export const blogPostUrl ='blog'
interface BlogData {
  createdAt: string;
  type: string;
  title: string;
  description: string;
  createdBy: string;
}

// Fetcher function for posting a blog
export const postBlog = async (blogData: BlogData) => {
  return await postData("blog", blogData); // Endpoint assumed to be "blog"
};