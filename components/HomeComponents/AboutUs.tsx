import React from 'react'
import styles from '../../src/styles/AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsContent}>
            <div className={styles.aboutUsHeader}>
                <h4>ABOUT US</h4>
                <h1>Discover The World Of Business</h1>
            </div>
            <p>
            Our mission is to empower individuals and businesses with comprehensive and innovative solutions, offering top-notch services in transportation, training, consultancy, cleaning, car wash, and gardening. We strive to deliver excellence through our unique approach, leveraging our expertise and dedication to exceed customer expectations.
            </p>
            <button>READ MORE</button>
            </div>
            <div className={styles.imageAboutUsContainer}>
                <img src='/about.jpg' className={styles.imageAboutUs} alt="about"/> 
            </div>
    </section>
  )
}

export default AboutUs