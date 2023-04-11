import React from "react";
import styles from "../../src/styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.innerHeroContainer}>
        <h1 className={styles.heroTitle}>CARE SERVICES AND CONSULTANTS LTD</h1>
        <p className={styles.heroHeader}>
          {" "}
          Providing exceptional solutions for your transportation, training,
          consultancy, and cleaning needs.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
