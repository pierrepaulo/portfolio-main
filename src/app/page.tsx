import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Techs } from "@/components/sections/Techs";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <Hero />
        <Projects />
        <About />
        <Techs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
