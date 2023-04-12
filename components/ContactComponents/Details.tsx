import React from 'react'
import styles from "../../src/styles/Contact.module.css";
import {AiOutlineFieldTime} from 'react-icons/ai'
import {FiSmartphone} from 'react-icons/fi'
import {CiLocationOn} from 'react-icons/ci'
const Details = () => {
  return (
   <section className={styles.detailsSection}>
<div className={styles.detailsCard}>
<AiOutlineFieldTime size={150}/>
<div className={styles.detailsCardContent}>
    <h2>WORKING HOURS :</h2>
    <p>Monday - Friday     09.00 - 23.00</p>
    <p>Sunday    09.00 - 16.00</p>
</div>
</div>
<div className={styles.detailsCard}>
<FiSmartphone size={150}/>
<div className={styles.detailsCardContent}>
    <h2>PHONE :</h2>
    <p>{"(001) "}123456789 - 234567891 </p>
    <p>info@careServices.com</p>
    
</div>
</div>
<div className={styles.detailsCard}>
<CiLocationOn size={150}/>
<div className={styles.detailsCardContent}>
    <h2>ADDRESS :</h2>
    <p>123 Ave, Lorem City,</p>
    <p> site Country, The World</p>
    
</div>
</div>
   </section>
  )
}

export default Details