import React from 'react'
import styles from '../../src/styles/Portfolio.module.css'
const Portfolio = () => {
  return (
    <section className={styles.portfolioeSection}>
        <div className={styles.headerPortfolio}>
            <h3>portfolio</h3>
            <h2>View Our Case Study</h2>
        </div>
        <div className={styles.portfolioContainer}>
            <div className={styles.imagePortfolioContainer}>
                <img src="/TransportServices.jpg" alt="transport services" />
                <h3>Make difference</h3>
                <h5>Transport Services</h5>
            </div>
            <div className="otherImages">
            <div className={styles.imagePortfolioContainer}>
                <img src="/cleaning services.jpg" alt="cleaning services" />
                <h3>Simple and Effective</h3>
                <h5>Cleaning Services</h5>
            </div>
            <div className={styles.imagePortfolioContainer}>
                <img src="/carWash.jpg" alt="car wash services" />
                <h3>Elegant</h3>
                <h5>Car Wash</h5>
            </div>
            <div className={styles.imagePortfolioContainer}>
                <img src="/fireTraining.jpg" alt="transport services" />
                <h3>Make difference</h3>
                <h5>Fire Training</h5>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio