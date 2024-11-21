import React from "react";
import BlogPill from "./BlogPill";



const BlogCategory = () => {
  return (
    <div className="flex p-2 overflow-x-scroll  h-24 rounded-lg">
      {category.map((category, index) => {
        return (
          <div
            key={index}
            className="px-4 py-2 flex justify-center items-center"
          >
            <BlogPill title={category?.title} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogCategory;

const category = [
  {
    title: "All Blogs",
  },
  {
    title: "Constitution and Law",
  },
  {
    title: "Society",
  },
  {
    title: "Current Events",
  },
  {
    title: "International Affairs",
  },
  {
    title: "Exam",
  },
  {
    title: "Social Justice",
  },
];
