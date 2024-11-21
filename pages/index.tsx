import AppWrapper from "@/components/AppWrapper";


export default function Home() {
  return (
    <div className=" w-full"
    >
      <AppWrapper navbarEnable={true} padding={true} isSearchEnabled={true}>
        <section className="p-12">
            Hello paro
        </section>

         </AppWrapper>
 
    </div>
  );
}
