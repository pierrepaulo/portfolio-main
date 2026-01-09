import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Techs } from "@/components/sections/Techs";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Techs />
        <Contact />
      </main>
    </div>
  );
}
