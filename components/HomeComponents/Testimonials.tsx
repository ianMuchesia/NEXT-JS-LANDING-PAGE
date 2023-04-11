import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import styles from '../../src/styles/Testimonial.module.css'
const Testimonials = () => {
  return (
    <section className={styles.portfolioeSection}>
    <div className={styles.headerPortfolio}>
        <h3>portfolio</h3>
        <h2>View Our Case Study</h2>
    </div>
    <div className="testimonialCard">
        <FaQuoteLeft/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt dignissimos reprehenderit explicabo rerum distinctio earum eos velit quis maiores illum illo nisi natus eius, ipsa facere fugit unde soluta harum non iste? Aperiam consequatur a distinctio, eum corrupti fuga.</p>
        <h4>Jimmie Benedict</h4>
        <h4>MARKETING</h4>
    </div>
    </section>
  )
}

export default Testimonials