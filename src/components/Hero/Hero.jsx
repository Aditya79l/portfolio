import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aditya Ungati</h1>
        <p className={styles.description}>
          I'm a full-stack developer and AI Developer with a Bachelor's degree
          at SRM University. Passionate about crafting user-centric web
          applications and leveraging data and AI to build intelligent,
          real-world solutions. With experience in both development and
          research, I enjoy solving complex problems that blend creativity,
          logic, and emerging technologies.
        </p>
        <a href="mailto:adityaungati@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/Aditya.png"
        alt="Aditya"
        className={styles.heroImg}
      />
      <div className={StyleSheet.topBlur}></div>
      <div className={StyleSheet.bottomBlur}></div>
    </section>
  );
};
