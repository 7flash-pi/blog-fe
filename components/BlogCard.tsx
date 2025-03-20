import React from "react";
import { useRouter } from "next/router";

type Props = {
  isReadMoreEnabled?: boolean;
  blog?: any;
};

const BlogCard = ({ isReadMoreEnabled = true, blog }: Props) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    console.log(blog);
    router.push(`/singleBlog/${blog?.id}`);
  };
  const truncatedDescription = blog.description.slice(0, 200);

  return (
    <div
      className={`border-2 border-gray-200 p-6 w-full lg:w-4/5 md:w-3/4 rounded-lg flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 `}
      onClick={handleReadMoreClick}
    >
      {/* Blog Title */}
      <h2
        className="text-2xl font-semibold text-gray-800 hover:text-[#8e8c8c] transition-colors"
        onClick={handleReadMoreClick}
      >
        {blog.title}
      </h2>

      {/* Blog Description */}
      <div
        dangerouslySetInnerHTML={{
          __html: isReadMoreEnabled ? truncatedDescription : blog.description,
        }}
        className="text-gray-700 mt-2"
      ></div>

      {/* Read More Link */}
      {isReadMoreEnabled && (
        <p
          onClick={handleReadMoreClick}
          className="text-blue-500 cursor-pointer hover:text-blue-700 mt-4 font-medium transition-colors"
        >
          Read More...
        </p>
      )}

      {/* Blog Meta Information */}
      <div className="flex justify-between items-center text-gray-600 text-sm mt-6">
        <p
          className="font-semibold cursor-pointer"
          onClick={() => {
            router.push("/profile");
          }}
        >
          Published by: {blog.author}
        </p>
        <p className="font-medium">{blog.createdAt}</p>
      </div>

      <div className="mt-2 text-gray-500">
        <p className="text-sm">{blog.category.name}</p>
      </div>
    </div>
  );
};

export default BlogCard;
