import Masthead from "@/components/portfolio/Masthead";
import StickyNav from "@/components/portfolio/StickyNav";
import Cover from "@/components/portfolio/Cover";
import Contents from "@/components/portfolio/Contents";
import About from "@/components/portfolio/About";
import Work from "@/components/portfolio/Work";
import Process from "@/components/portfolio/Process";
import Credentials from "@/components/portfolio/Credentials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <Masthead />
      <StickyNav />
      <main className="flex flex-col gap-5 px-3 pt-5 sm:gap-8 sm:px-6 sm:pt-6 lg:px-10">
        <Cover />
        <Contents />
        <About />
        <Work />
        <Process />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
