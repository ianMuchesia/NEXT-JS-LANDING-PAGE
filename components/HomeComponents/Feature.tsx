import React from 'react'
import {BsTruckFront} from 'react-icons/bs'
import {GiVacuumCleaner, GiGardeningShears} from 'react-icons/gi'
import {SiConsul} from 'react-icons/si'
import styles from '../../src/styles/Feature.module.css'
const Feature = () => {
  return (
    <section className={styles.featureSection}>
        <div className={styles.headerFeature}>
            <h3>FEATURE</h3>
            <h2>Discover Our Services</h2>
        </div>
        <div className={styles.cardsFeatureSection}>
            <div className={styles.cardFeature}>
                <BsTruckFront className={styles.iconFeature}/>
                <h3>Transportation</h3>
                <p>Efficient and reliable transportation services for all your needs, delivered with professionalism and care</p>
            </div>
            <div className={styles.cardFeature}>
                <GiVacuumCleaner className={styles.iconFeature}/>
                <h3>Cleaning</h3>
                <p>Efficient and thorough cleaning services to keep your surroundings clean and safe, delivered with modern techniques and eco-friendly products.</p>
            </div>
            <div className={styles.cardFeature}>
                <SiConsul className={styles.iconFeature}/>
                <h3>Consulting</h3>
                <p>Expert consulting services to guide you towards success, backed by years of experience and strategic insights for your business growth.</p>
            </div>
            <div className={styles.cardFeature}>
                <GiGardeningShears className={styles.iconFeature}/>
                <h3>Gardening</h3>
                <p>Transform your outdoor space into a lush and vibrant oasis with our professional gardening and landscaping services, tailored to your unique vision and preferences.</p>
            </div>
        </div>
        <button className={styles.btn}>VIEW ALL SERVICES</button>
    </section>
  )
}

export default Feature