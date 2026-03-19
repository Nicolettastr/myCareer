"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { experience } from "../data/Experience.data";
import styles from "../styles/experience.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const displayExperience = experience.map((work) => {
    return (
      <div className={styles.experience_section} key={work.id}>
        <div className={styles.experience_wrapper}>
          <div className={styles.period}>
            <hr />
            <p>{work.period}</p>
            <hr />
          </div>
          <div className={styles.experience_title}>
            <h2>{work.role}</h2>
            <p> {work.company}</p>
            <p>{work.location}</p>
            <p className={styles.work_desc}>{work.description}</p>
          </div>
          <div className={styles.experience_description}>
            <ul>
              {work.highlights.map((element) => {
                return <li key={element.text}>{element.text}</li>;
              })}
            </ul>
          </div>
        </div>
        <hr className={styles.line} />
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>{displayExperience}</div>
    </section>
  );
};
