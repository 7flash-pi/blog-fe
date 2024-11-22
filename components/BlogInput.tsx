import { blog } from "@/common/blogs";
import { formatDate } from "@/common/util";
import React, { useState } from "react";
import { categories } from "./BlogCategory";

const BlogInput = () => {
  const [blogData, setBlogData] = useState<blog | null>(null);

  // List of categories (you can modify this as per your needs)

  // Handle form submission and update blogData with selected category
  const handleBlogsubmit = () => {
    if (blogData) {
      setBlogData((prevBlogData) => ({
        ...prevBlogData,
        createdAt: formatDate(new Date()), // Add current date
        type: prevBlogData?.type || 'General', // Default type to 'General' if undefined
      }) as blog);
    }
    console.log(blogData);
  };

  return (
    <div className="w-3/4 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <label className="block text-lg font-semibold text-gray-800 mb-3">
        Blog Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Enter the blog title"
        value={blogData?.title || ''}
        className="w-full border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm"
        onChange={(e) => {
          setBlogData(
            (prevBlogData) =>
              ({
                ...prevBlogData,
                title: e.target.value,
              } as blog)
          );
        }}
      />

      <label className="block text-lg font-semibold text-gray-800 mt-6 mb-3">
        Blog Content
      </label>
      <textarea
        id="content"
        rows={8}
        placeholder="Write your blog content here..."
        value={blogData?.description || ''}
        onChange={(e) => {
          setBlogData(
            (prevBlogData) =>
              ({
                ...prevBlogData,
                description: e.target.value,
              } as blog)
          );
        }}
        className="w-full lg:w-4/4 border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm overflow-auto"
      ></textarea>

      {/* Author and Category in the same row */}
      <div className="flex items-center gap-4 mt-6">
        <div className="w-full">
          <label className="block text-lg font-semibold text-gray-800 mb-3">
            Author
          </label>
          <input
            type="text"
            id="author"
            placeholder="Enter author's name"
            value={blogData?.createdBy || ''}
            onChange={(e) => {
              setBlogData(
                (prevBlogData) =>
                  ({
                    ...prevBlogData,
                    createdBy: e.target.value,
                  } as blog)
              );
            }}
            className="w-full border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm"
          />
        </div>

        <div className="w-full">
          <label className="block text-lg font-semibold text-gray-800 mb-3">
            Category
          </label>
          <select
            id="category"
            value={blogData?.type || ''}
            onChange={(e) => {
              setBlogData(
                (prevBlogData) =>
                  ({
                    ...prevBlogData,
                    type: e.target.value,
                  } as blog)
              );
            }}
            className="w-full border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm"
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="mt-6 w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
        onClick={handleBlogsubmit}
      >
        Publish Blog
      </button>
    </div>
  );
};

export default BlogInput;
