"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "../styles/name.module.css";

export const Name = () => {
  const container = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        nameRef.current,
        {
          opacity: 0.6,
        },
        {
          opacity: 1,
          color: "var(--text-primary)",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container.current,
            start: "top 200%",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.name}>
        <h1 ref={nameRef}>Nicole Struggia</h1>
      </div>
    </div>
  );
};
