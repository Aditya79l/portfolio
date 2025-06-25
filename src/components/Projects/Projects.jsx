import React, { useRef, useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  const [swiper, setSwiper] = useState(null);

  const goToPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const goToNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.swiperOuter}>
        {/* Custom Previous Button */}
        <button onClick={goToPrev} className={styles.customPrev}>
          &#8249;
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiper}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <button onClick={goToNext} className={styles.customNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
