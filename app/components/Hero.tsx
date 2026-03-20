"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "../styles/hero.module.css";
import { Name } from "./Name";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const container = useRef(null);
  const wrapperRef = useRef(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const nRef = useRef<HTMLElement>(null);
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameInner = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLParagraphElement>(null);
  const nameDetail = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!nRef.current || !letterRef.current) return;

      const nRect = nRef.current.getBoundingClientRect();
      const titleRect = letterRef.current.getBoundingClientRect();

      const originX =
        ((nRect.left - titleRect.left + nRect.width / 2) / titleRect.width) *
        100;
      const originY =
        ((nRect.top - titleRect.top + nRect.height / 2) / titleRect.height) *
        100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        },
      });

      tl.to(wrapperRef.current, {
        background: "#000",
        duration: 1,
      });

      tl.to(
        letterRef.current,
        {
          scale: 80,
          transformOrigin: `${originX}% ${originY}%`,
          ease: "none",
          duration: 1.6,
        },
        0.2,
      );

      tl.to(
        wrapperRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        2.5,
      );

      tl.to(
        nameDetail.current,
        {
          opacity: 0,
        },
        1,
      );

      tl.to(
        scroller.current,
        {
          fontSize: "1.2rem",
        },
        1,
      );

      tl.to(
        scroller.current,
        {
          onStart: () => {
            const menu = document.getElementById("nav_menu_wrapper");
            if (menu) menu.classList.add("scrolled");
          },
          y: 200,
          color: "black",
          ease: "none",
          duration: 0.5,
          onReverseComplete: () => {
            const menu = document.getElementById("nav_menu_wrapper");
            if (menu) menu.classList.remove("scrolled");
          },
          onComplete: () => {
            const menu = document.getElementById("nav_menu_wrapper");
            if (menu) menu.classList.add("scrolled");
          },
        },
        1.2,
      );

      tl.to(
        scroller.current,
        {
          x: 200,
          ease: "none",
          duration: 1,
        },
        1.6,
      );

      tl.to(
        document.body,
        {
          backgroundColor: "var(--text-muted)",
          duration: 0.5,
        },
        1,
      );

      gsap.to(nameInner.current, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: nameSectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    },

    { scope: container },
  );

  return (
    <>
      <div ref={container} className={styles.container}>
        <div ref={wrapperRef} className={styles.wrapper}>
          <div ref={letterRef} className={styles.title}>
            <div className={styles.title_frontend}>
              <h3>FRO</h3>
              <span ref={nRef}>N</span>
              <h3>TEND</h3>
            </div>
            <hr />
            <div className={styles.title_engineer}>
              <h3>ENGINEER</h3>
            </div>
          </div>
          <div className={styles.scroll}>
            <p ref={scroller} className={styles.scroller}>
              Scroll
            </p>
            <p ref={nameDetail}>Nicole Struggia</p>
          </div>
        </div>
      </div>
      <section ref={nameSectionRef} className={styles.name_section}>
        <div ref={nameInner} className={styles.name_inner}>
          <Name />
        </div>
      </section>
    </>
  );
};
