import React, { useState } from "react";
import styles from "../../src/styles/Contact.module.css";
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => {
      const { name, value } = e.target;
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: "",
      email: "",
      tel: "",
      message: "",
    });
    console.log(form);
  };

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
              Have a Question or Need More Information? We&apos;re Here to Help!
              Get in Contact with Us Today for Friendly and Professional
              Assistance.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name*"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email*"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Tel*"
              value={form.tel}
              name="tel"
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              value={form.message}
              name="message"
              onChange={handleChange}
            />
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
