"use client";

import { useState } from "react";
import styles from "../styles/contactMe.module.css";

const FORMSPREE_ID = "xdapwlnj";

export const ContactMe = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          mensaje: (form.elements.namedItem("message") as HTMLTextAreaElement)
            .value,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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

        {submitted ? (
          <p className={styles.contactDescription}>
            ✅ Message sent! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.inputGroup}>
              <input name="name" type="text" placeholder="NAME" required />
            </div>
            <div className={styles.inputGroup}>
              <input name="email" type="email" placeholder="EMAIL" required />
            </div>
            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                rows={5}
                required
              ></textarea>
            </div>

            {error && <p>Something went wrong. Please try again.</p>}

            <button
              type="submit"
              className={styles.sendButton}
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
