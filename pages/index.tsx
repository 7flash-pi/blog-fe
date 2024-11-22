import AppWrapper from "@/components/AppWrapper";
import BlogCard from "@/components/BlogCard";
import BlogCategory from "@/components/BlogCategory";

export default function Home() {
  return (
    <div>
      <AppWrapper navbarEnable={true} padding={true} isSearchEnabled={true}>
        <section className="p-6 flex flex-col gap-8 lg:w-4/5 md:w-11/12 w-full mx-auto">
          {/* Blog Categories Section */}
          <BlogCategory />

          {/* Blog Cards Section */}
          <div className="px-6 py-12 w-full shadow-2xl transition-shadow duration-300 flex flex-col gap-8 rounded-2xl items-center">
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
