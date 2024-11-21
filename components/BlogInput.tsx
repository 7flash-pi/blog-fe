import React from "react";

type Props = {};

const BlogInput = ({}: Props) => {
  return (
      <div className="w-3/4 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <label className="block text-lg font-semibold text-gray-800 mb-3">Blog Title</label>
  <input
    type="text"
    id="title"
    placeholder="Enter the blog title"
    className="w-full border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm"
  />

  <label className="block text-lg font-semibold text-gray-800 mt-6 mb-3">Blog Content</label>
  <textarea
    id="content"
    rows={8}
    placeholder="Write your blog content here..."
    className="w-full lg:w-4/4 border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm overflow-auto" // Changed to lg:w-3/4 for larger size
  ></textarea>
  
    <label className="block text-lg font-semibold text-gray-800 mt-6 mb-3">Author</label>
  <input
    type="text"
    id="author"
    placeholder="Enter author's name"
    className="w-full border border-gray-300 rounded-md p-4 text-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800 shadow-sm"
  />

  <button className="mt-6 w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200 shadow-md">
    Publish Blog
  </button>
</div>

  );
};

export default BlogInput;
