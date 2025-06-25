import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [expanded, setExpanded] = useState(false);

  const shouldShowMore = description.length > 120 || skills.length > 6;

  return (
    <div
      className={`${styles.container} ${
        expanded ? styles.containerExpanded : ""
      }`}
    >
      <img
        src={`/assets/${imageSrc}`}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>

      <p
        className={`${styles.description} ${
          expanded ? styles.descriptionExpanded : ""
        }`}
      >
        {description}
      </p>

      <ul
        className={`${styles.skills} ${expanded ? styles.skillsExpanded : ""}`}
      >
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {shouldShowMore && (
        <span
          className={styles.readMore}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Read more"}
        </span>
      )}

      <div className={styles.links}>
        <a
          href={demo}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={source}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};
