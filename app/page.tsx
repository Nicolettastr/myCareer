import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Name } from "./components/Name";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Name />
      <Experience />
    </>
  );
}
