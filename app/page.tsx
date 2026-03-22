import About from "@/components/About";
import AccessLogs from "@/components/access-log";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FeaturedProject from "@/components/feature-project";
import Hero from "@/components/hero";
import HowIWork from "@/components/how-i-work";
import Projects from "@/components/project";
import Skills from "@/components/skill";

export default function Home() {

  return (
    <>
      <main className="pt-16">
        <AccessLogs />

        {/* Hero */}
        <Hero />

        {/* Hero */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Feature Projects */}
        <FeaturedProject />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Featured Project */}
        <HowIWork />

        {/* Contact */}
        <Contact />

      </main>
    </>
  );
}
