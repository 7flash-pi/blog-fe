import AppWrapper from "@/components/AppWrapper";
import BlogInput from "@/components/BlogInput";
import React from "react";

const index = () => {
  return (
    <>
      <AppWrapper isSearchEnabled={true} navbarEnable={true} padding={true}>
        <section className="p-8 flex justify-center items-center">
          <BlogInput />
        </section>
       
      </AppWrapper>
    </>
  );
};

export default index;
