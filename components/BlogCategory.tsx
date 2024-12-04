/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import BlogPill from "./BlogPill";
import { useRouter } from "next/router";

type Props = {
  categories: any;
};

const BlogCategory = ({ categories }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const router = useRouter();
  const onActiveTab = (category: { name: string }, index: number) => {
    setActiveTab(index);
    router.push(`${router.pathname}#${category.name}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (router.isReady && router.asPath.split("#")[1]?.length > 0) {
      const hash = router.asPath.split("#")[1];
      const index = categories.findIndex(
        (item: any) => item.name === decodeURI(hash)
      );
      setActiveTab(index);
      console.log({ laura: decodeURI(hash), index });
    }
  }, [router]);

  return (
    <div className=" lg:w-4/4 md:w-5/6   bg-white rounded-lg shadow-md p-3 flex  flex-row  gap-4  overflow-x-auto">
      {categories?.length>0 && categories.map((category: any, index: any) => {
        return (
          <div key={index} className="flex items-center justify-center  ">
            <BlogPill
              title={category?.name}
              activeTab={activeTab}
              currentIndex={index}
              onClick={() => {
                onActiveTab(category, index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogCategory;
