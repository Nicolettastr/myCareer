"use client";
import { useRef } from "react";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import { TbStack } from "react-icons/tb";
import styles from "../styles/skills.module.css";

export const Skills = () => {
  const container = useRef<HTMLElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const languages = [
    {
      name: "HTML5",
      logo: <SiHtml5 className={styles.icon} />,
    },
    {
      name: "CSS3",
      logo: <SiCss className={styles.icon} />,
    },
    {
      name: "JAVASCRIPT",
      logo: <SiJavascript className={styles.icon} />,
    },
    {
      name: "REACT",
      logo: <SiReact className={styles.icon} />,
    },
    {
      name: "NEXT.JS",
      logo: <SiNextdotjs className={styles.icon} />,
    },
    {
      name: "TYPESCRIPT",
      logo: <SiTypescript className={styles.icon} />,
    },
    {
      name: "NODE.JS",
      logo: <SiNodedotjs className={styles.icon} />,
    },
    {
      name: "ZUSTAND",
      logo: <TbStack className={styles.icon} />,
    },
    {
      name: "REACT QUERY",
      logo: <SiReactquery className={styles.icon} />,
    },
    { name: "POSTGRESQL", logo: <SiPostgresql className={styles.icon} /> },
  ];

  const tools = [
    "GIT",
    "VITE",
    "FIGMA",
    "POSTMAN",
    "DBEAVER",
    "VS CODE",
    "JIRA",
    "SCRUM",
    "GITHUB",
    "GITLAB",
  ];

  const languagesDisplay = languages.map((lang) => {
    return (
      <div className={styles.lang_wrapper} key={lang.name}>
        {lang.logo}
        <p>{lang.name}</p>
      </div>
    );
  });

  const toolsDisplay = tools.map((tool) => {
    return (
      <div key={tool} className={styles.tool}>
        <p>{tool}</p>
      </div>
    );
  });

  return (
    <section ref={container} className={styles.container}>
      <h2 className={styles.title}>Skills and tools</h2>
      <div ref={wrapper} className={styles.wrapper}>
        <section className={styles.section_lang}>
          <div className={styles.tech_wrapper}>{languagesDisplay}</div>
        </section>
        <section className={styles.section_tools}>
          <div className={styles.tools_wrapper}>{toolsDisplay}</div>
        </section>
      </div>
    </section>
  );
};
