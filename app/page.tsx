import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { SoftSkils } from "./components/SoftSkils";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <SoftSkils />
      <ContactMe />
    </>
  );
}
