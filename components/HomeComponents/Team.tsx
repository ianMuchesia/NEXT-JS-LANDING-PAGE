import React from 'react'
import styles from '../../src/styles/Team.module.css'
import {MdOutlineFacebook} from 'react-icons/md'
import {AiOutlineTwitter}  from 'react-icons/ai'
const Team = () => {
  return (
    <section className={styles.TeamSection}>
    <div className={styles.headerTeam}>
        <h3>OUR STAFF</h3>
        <h2>Meet Our Team</h2>
    </div>
    <div className="teamContainer">
        <div className="teamImageContainer">
            <img src="" alt="" />
            <div className="imageDetails">
                <h4>name</h4>
                <h4>title</h4>
                <div className="socialMedia">

                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Team