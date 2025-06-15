import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/Aditya.png"
          alt="Aditya"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="arrow" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experince in crafting responsive,
                user-friendly web interfaces with modern tech and clean design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="server" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer with experince in devoloping fast and
                optimised back-end systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="arrow" />
            <div>
              <h3>AI Developer</h3>
              <p>
                AI enthusiast developing intelligent systems with a focus on
                deep learning, computer vision, and real-world applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
