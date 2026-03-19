"use client";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import { useAnimationActionsStore } from "../stores/useAnimationActionsStore";
import styles from "../styles/nav.module.css";

export const Nav = () => {
  const width = useWindowWidth();
  const [showMenu, setShowMenu] = useState(false);
  const activeNav = useAnimationActionsStore((state) => state.activeNav);

  if (!width) return;

  const menuOptions = (
    <ul className={styles.menu_options}>
      <li>About me</li>
      <li>Skills</li>
      <li>Experience</li>
      <li>Contact me</li>
    </ul>
  );

  const handleMenuMobile = () => {
    setShowMenu((prev) => !prev);
  };

  console.log("activeNav", activeNav);

  return (
    <div className={`${activeNav ? "activeNav" : ""} ${styles.wrapper}`}>
      <div className={`${styles.logo} ${showMenu ? styles.shadow : ""}`}>
        <p>NS</p>
      </div>
      {width < 780 ? (
        <>
          <MenuIcon className={styles.menu_icon} onClick={handleMenuMobile} />
          <div
            className={`${styles.mobile_menu} ${showMenu ? styles.open : ""}`}
          >
            <div>{menuOptions}</div>
          </div>
        </>
      ) : (
        <div>{menuOptions}</div>
      )}
    </div>
  );
};
