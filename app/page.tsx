import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
    </>
  );
}
