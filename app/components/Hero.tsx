"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mouse } from "lucide-react";
import { useRef } from "react";
import { useAnimationActionsStore } from "../stores/useAnimationActionsStore";
import styles from "../styles/hero.module.css";
import { Name } from "./Name";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const setActiveNav = useAnimationActionsStore((state) => state.setActiveNav);

  const container = useRef(null);
  const wrapperRef = useRef(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const nRef = useRef<HTMLElement>(null);
  const nameSectionRef = useRef<HTMLElement>(null);
  const nameInner = useRef<HTMLDivElement>(null);
  const details = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLParagraphElement>(null);
  const nameDetail = useRef<HTMLParagraphElement>(null);
  const mouse = useRef<SVGSVGElement>(null);

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
          duration: 2,
        },
        0.2,
      );

      tl.to(
        wrapperRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        1.8,
      );

      tl.to(
        details.current,
        {
          scale: 1.5,
          color: "black",
          flexDirection: "column",
          alignItems: "center",
        },
        1.8,
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
          scale: 1.5,
          color: "black",
        },
        1.8,
      );

      tl.to(
        mouse.current,
        {
          display: "block",
        },
        1.8,
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
        onStart: () => setActiveNav(false),
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
        onComplete: () => {
          setActiveNav(true);
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
          <div ref={details} className={styles.scroll}>
            <p ref={scroller}>Scroll</p>
            <Mouse ref={mouse} className={styles.mouse} />
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
