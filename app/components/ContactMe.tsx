"use client";

import styles from "../styles/contactMe.module.css";

export const ContactMe = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <header>
          <span className={styles.subtitle}>Contact Me</span>
          <hr className={styles.divider} />
        </header>

        <h2 className={`title ${styles.contactTitle}`}>CONNECT WITH ME</h2>

        <p className={styles.contactDescription}>
          Reach out, and let&apos;s explore about web technologies, new
          projects, or just to say hi
        </p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="NAME" required />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="EMAIL" required />
          </div>
          <div className={styles.inputGroup}>
            <textarea placeholder="YOUR MESSAGE" rows={5} required></textarea>
          </div>

          <button type="submit" className={styles.sendButton}>
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};
