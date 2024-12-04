/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetchData, useGetBlogCategories } from "@/api-fetchers/apiEndpoint";
import AppWrapper from "@/components/AppWrapper";
import BlogCard from "@/components/BlogCard";
import BlogCategory from "@/components/BlogCategory";
import React from "react";

export default function Home() {

  const { data: blogData } = useFetchData("blogs");
  const { data: category } = useGetBlogCategories("blog-categories");

  return (
    <div>
      <AppWrapper navbarEnable={true} padding={true} isSearchEnabled={true}>
        <section className="p-6 flex flex-col gap-8 lg:w-4/5 md:w-11/12 w-full mx-auto">
          <BlogCategory categories={category} />

          {/* Blog Cards Section */}
          <div className="px-6 py-12 w-full shadow-2xl transition-shadow duration-300 flex flex-col gap-8 rounded-2xl items-center">
            {blogData?.length > 0 &&
              blogData.map((blog: any) => (
                <React.Fragment key={blog.id}>
                  <BlogCard blog={blog} />
                </React.Fragment>
              ))}
          </div>
        </section>
      </AppWrapper>
    </div>
  );
}
