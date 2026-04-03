"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "../styles/about.module.css";

gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.containerSection}>
        <div className={styles.wrapper}>
          <p>About me</p>
          <hr />
          <h2>Code that clicks & interfaces that work</h2>
          <hr />
          <p>
            I build clean, maintainable, and componentized web apps that are
            fast, responsive, and strong performance focused with scalable
            frontend solutions and architecture
          </p>
        </div>
      </div>
    </section>
  );
};
