import React from "react";
import styles from '../css/ContactUs.module.css';
import Navbar from './navbar';
import Footer from "./footer";

const ContactUs = () => {
    return (
        <div>
            <Navbar/>
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>Have a Question?</div>
                <div className={styles.title}>Lets get in touch</div>
            </div>
            <form className={styles.frm}>
                <input className={styles.inputs} placeholder="Name*"/>
                <input className={styles.inputs}  placeholder="Email*"/>
                <input className={styles.inputs}  placeholder="Phone"/>
                <input className={styles.inputs} placeholder="Message*"/>
                <div className={styles.btn}>Submit</div>
            </form>
        </div>
        <Footer/>
        </div>
    )
};
export default ContactUs;