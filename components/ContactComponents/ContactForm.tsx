import React from 'react'
import styles from "../../src/styles/Contact.module.css";
const ContactForm = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.formSectionContainer}>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.71188581262!2d39.596222583956944!3d-4.035014502468972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa!5e0!3m2!1sen!2ske!4v1668111231878!5m2!1sen!2ske"
    className={styles.googleMap}
    allowFullScreen={false}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="">
  <div className={styles.formSectionHeader}>
        <h3>CONTACT</h3>
        <h2>Plase Get In Touch</h2>
        <p>
        Have a Question or Need More Information? We're Here to Help! Get in Contact with Us Today for Friendly and Professional Assistance.
        </p>
        </div>
        <form className={styles.form} >
            <input type="text"
            placeholder='Full Name&#42;' />
             <input type="email"
            placeholder='Email&#42;' />
             <input type="number"
            placeholder='Tel&#42;' />
             <textarea 
            placeholder='Message' />
            <button type="button">SEND MESSAGE</button>
        </form>
  </div>
      </div>
        
    </section>
  )
}

export default ContactForm