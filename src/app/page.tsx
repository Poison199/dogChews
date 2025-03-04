import Description from "@/sections/Description";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Posts from "@/sections/Posts";

export default function Home() {
  return (
    <main id="main">
      <div className="page-background">
      <Description/>
      </div>
      <Hero/>
      <Posts/>
    </main>
  );
}
