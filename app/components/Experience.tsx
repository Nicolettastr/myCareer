"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { experience } from "../data/Experience.data";
import { highlightText } from "../helper/highlightText";
import styles from "../styles/experience.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const displayExperience = experience.map((work) => {
    const stats = work.stats
      ? work.stats.map((stat) => {
          return (
            <div key={stat.value}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          );
        })
      : null;

    const tags = work.tags.map((tag) => {
      return <span key={tag}>{tag}</span>;
    });

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
            <div>
              <p className={styles.company}>{work.company}</p>
              <p className={styles.location}>{work.location}</p>
            </div>
            <p className={styles.work_desc}>{work.description}</p>
          </div>
          <div className={styles.stats}>{stats}</div>
          <div className={styles.experience_description}>
            <ul>
              {work.highlights.map((element) => {
                return (
                  <li key={element.text}>
                    {highlightText(element.text, element.em)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.tags}>{tags}</div>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <h2>Professional Experience</h2>
      <div className={styles.wrapper}>{displayExperience}</div>
    </section>
  );
};
