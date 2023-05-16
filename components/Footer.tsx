import Image from "next/image";
import React, { useState } from "react";
import styles from "../src/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setEmail("")
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.address}>
          <Image
            src="/LOGO.jpg"
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
            <li>
              <Link href="/contact" className={styles.footerLinks}>
                Contact Info
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.footerLinks}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLinks}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <form className={styles.signUp} onSubmit={handleSubmit}>
          <p>Keep me up to date with content and updates</p>
          <input
            type="email"
            value={email}
            placeholder="Enter Your email address"
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}
          />
          <button>submit</button>
        </form>
      </div>
      <div className={styles.groundFooter}>
        &#169; {new Date().getFullYear()}CARE SERVICES AND CONSULTANTS LTD
      </div>
    </footer>
  );
};

export default Footer;
