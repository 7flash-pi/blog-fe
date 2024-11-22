import React from "react";

type Props = {
  title: string;
  activeTab: number;
  currentIndex: number;
  onClick: () => void;
};

const BlogPill = ({ title, activeTab, currentIndex, onClick }: Props) => {
  return (
    <>
      <p
        className={`flex-1 py-2 text-center transition whitespace-nowrap ${
          activeTab === currentIndex
            ? "text-blue-500 border-b-2 border-blue-500 font-semibold"
            : "text-gray-500 hover:text-blue-500"
        }`}
        onClick={onClick}
      >
        {title}
      </p>
    </>
  );
};

export default BlogPill;
