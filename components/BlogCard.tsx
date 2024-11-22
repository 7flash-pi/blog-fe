
import { blogs } from "@/common/blogs";
import React from "react";
import { useRouter } from "next/router";

type Props ={
  isReadMoreEnabled?: boolean;
}

const BlogCard = ({isReadMoreEnabled=true}:Props) => {
  const router = useRouter();
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "..."; // Add ellipsis when truncated
    } else {
      return str;
    }
  };

  const handleReadMoreClick = () => {
    router.push("/singleBlog");
  };

  const blog = blogs[0]; // Example blog from blogs array

  return (
    <div className="border-2 border-gray-200 p-6 w-7/5  rounded-lg flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300" onClick={handleReadMoreClick}>
      {/* Blog Title */}
      <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
        {blog.title}
      </h2>

      {/* Blog Description */}
      <div
        dangerouslySetInnerHTML={{
          __html: isReadMoreEnabled ? truncateString(blog.description, 200) : blog.description, // Truncate to 200 characters
        }}
        className="text-gray-700 mt-2"
      ></div>

      {/* Read More Link */}
     { isReadMoreEnabled && <p
        onClick={handleReadMoreClick}
        className="text-blue-500 cursor-pointer hover:text-blue-700 mt-4 font-medium transition-colors"
      >
        Read More...
      </p>}

      {/* Blog Meta Information */}
      <div className="flex justify-between items-center text-gray-600 text-sm mt-6">
        <p className="font-semibold">Published by: {blog.createdBy}</p>
        <p className="font-medium">{blog.createdAt}</p>
      </div>

      <div className="mt-2 text-gray-500">
        <p className="text-sm">{blog.type}</p>
      </div>
    </div>
  );
};

export default BlogCard;
