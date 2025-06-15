import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>📞Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul ckassName={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="contact" />
          <a href="mailto:adityaungati@gmail.com">
            Email:adityaungati@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="Linkedin" />
          <a href="https://www.linkedin.com/in/aditya-sai-ungati-a83619232/">
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="contact" />
          <a href="https://github.com/Aditya79l">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
