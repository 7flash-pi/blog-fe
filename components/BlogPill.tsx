import React from "react";

type Props = {
  title: string;
};

const BlogPill = ({ title }: Props) => {
  return (
    <>
      <p className="px-2 py-4 text-lg w-32 flex justify-center rounded-lg hover:bg-blue-300">
        {title}
      </p>
    </>
  );
};

export default BlogPill;
