"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/name.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Name = () => {
  const container = useRef(null);
  const imageTopLeft = useRef(null);
  const imageTopright = useRef(null);
  const imageBottomRight = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageTopLeft.current, {
        yPercent: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageTopright.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageBottomRight.current, {
        yPercent: -150,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className={styles.container}>
      <div ref={imageTopLeft} className={`${styles.img} ${styles.imgLeft}`}>
        <div className={styles.image_inner}>
          <Image
            className={styles.img_component}
            src="/1.jpg"
            alt="abstract image"
            fill
          />
        </div>
      </div>

      <div
        ref={imageTopright}
        className={`${styles.img} ${styles.imgRightTop}`}
      >
        <div className={styles.image_inner}>
          <Image
            className={styles.img_component}
            src="/yo.jpeg"
            alt="abstract image"
            fill
          />
        </div>
      </div>

      <div
        ref={imageBottomRight}
        className={`${styles.img} ${styles.imgRightBottom}`}
      >
        <div className={styles.image_inner}>
          <Image
            className={styles.img_component}
            src="/3.jpg"
            alt="abstract image"
            fill
          />
        </div>
      </div>

      <div className={styles.name_wrapper}>
        <h2>Nicole</h2>
        <h2>Struggia</h2>
      </div>
    </section>
  );
};
