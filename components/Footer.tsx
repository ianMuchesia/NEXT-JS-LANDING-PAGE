import Image from 'next/image'
import React from 'react'
import styles from "../src/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.address}>
      <Image
        src="/logo.png"
        alt="logo"
        width={67}
        height={77}
        className={styles.logo}
      />
      <h3>CARE SERVICES AND CONSULTANTS LTD</h3>
      </div>
      <div className={styles.usefulLinks}>
        <h4>Useful Links</h4>
        <ul>
          <li>Project Info</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
      <div className={styles.signUp}>
        <p>Keep me up to date with content and updates</p>
        <input type="email"
        placeholder='Enter Your email address' />
        <button>submit</button>
      </div>
      </div>
      <div className={styles.groundFooter}>
      &#169;	{new Date().getFullYear()}CARE SERVICES AND CONSULTANTS LTD
      </div>
    </footer>
  )
}

export default Footer