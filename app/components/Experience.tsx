"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "../styles/experience.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const container = useRef(null);
  const wrapper = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "+=100%",
          scrub: 1,
          pin: false,
          pinType: "transform",
          anticipatePin: 1,
        },
      });

      tl.to(wrapper.current, {
        background: "var(--surface-inverse)",
        duration: 0.6,
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className={styles.container}>
      <div ref={wrapper} className={styles.wrapper}>
        Experience
      </div>
    </section>
  );
};
