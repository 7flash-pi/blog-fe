import AppWrapper from "@/components/AppWrapper";
import BlogCategory from "@/components/BlogCategory";


export default function Home() {
  return (
    <div className=""
    >
      <AppWrapper navbarEnable={true} padding={true} isSearchEnabled={true}>
        <section className=" flex flex-row p-12 ">
            <BlogCategory />
        </section>

         </AppWrapper>
 
    </div>
  );
}
