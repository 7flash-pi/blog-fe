import { useQuery } from "react-query";
import { fetchData } from "./client";

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
