"use client";
import React from "react";

import AppWrapper from "@/components/AppWrapper";
import { useGetSingleBlog } from "@/api-fetchers/apiEndpoint";
import BlogCard from "@/components/BlogCard";
import { useRouter } from "next/router";
import { ColorRing } from "react-loader-spinner";
// import { blogs } from "@/common/blogs";

const Singleblog = () => {
  const router = useRouter();

  console.log(router);
  const { data, isLoading } = useGetSingleBlog(
    router.asPath.split("/")[2] as string
  );
  return (
    <AppWrapper isSearchEnabled={true} padding={true} navbarEnable={true}>
      {isLoading ? (
        <section className="flex justify-center items-center h-[70vh]">
          <ColorRing
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
          />
        </section>
      ) : (
        <div className="w-full p-6 shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center gap-8 lg:mt-30 md:mt-18">
          <BlogCard isReadMoreEnabled={false} blog={data} />
        </div>
      )}
    </AppWrapper>
  );
};

export default Singleblog;
