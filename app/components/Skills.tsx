"use client";
import { useRef } from "react";
import styles from "../styles/about.module.css";

export const Skills = () => {
  const container = useRef<HTMLElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const languages = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "ZUSTAND",
    "REACT QUERY",
  ];

  const tools = ["GIT", "VITE", "FIGMA", "POSTMAN", "DBEAVER"];

  const languagesDisplay = languages.map((lang) => {
    return <span key={lang}></span>;
  });

  return (
    <section ref={container} className={styles.container}>
      <div ref={wrapper} className={styles.wrapper}>
        <p>Skills</p>
        <h2>Technologies I work with</h2>
        <p>Languages and Frameworks</p>
      </div>
    </section>
  );
};
