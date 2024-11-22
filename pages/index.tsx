import AppWrapper from "@/components/AppWrapper";
import BlogCard from "@/components/BlogCard";
import BlogCategory from "@/components/BlogCategory";

export default function Home() {
  return (
    <div className="">
      <AppWrapper navbarEnable={true} padding={true} isSearchEnabled={true}>
        <section className=" p-12 flex flex-col gap-8">
          <BlogCategory />

          <div className="p-12 lg:w-4/5  md:w-full shadow-2xl transition-shadow duration-300 flex flex-col gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </AppWrapper>
    </div>
  );
}
