import React, {useRef, useState} from "react";
import styles from '../css/ContactUs.module.css';
import Navbar from './navbar';
import Footer from "./footer";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const msg = useRef();

    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setEmailSent(false);
      setError(false);
    if(name.current.value.trim() == '' || msg.current.value.trim() == '' || email.current.value.trim() == '') {
        setError(true);
        return;
    }
      emailjs.sendForm('service_qhxvrwf', 'template_w50r2ps', form.current, 'yKjJFYDNe-tCVQ7VZ')
        .then((result) => {
            setEmailSent(true);
        }, (error) => {
            setError(true);
            setEmailSent(false);
        });
    };

    return (
        <div>
            <Navbar/>
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>Have a Question?</div>
                <div className={styles.title}>Lets get in touch</div>
            </div>
            {emailSent ? <div style={{color: 'white', marginTop: '200px', fontSize: '30px'}}> Thank you for contacting us. We will be in touch shortly.</div> :
            <form className={styles.frm} ref={form}>
                <input ref={name} className={styles.inputs} name="user_name" placeholder="Name*" required/>
                <input ref={email} className={styles.inputs}  name="user_email" type="email" placeholder="Email*" required/>
                <input className={styles.inputs}  placeholder="Phone"/>
                <input ref={msg} className={styles.inputs} multiline name="message" placeholder="Message*" required/>
                <div className={styles.btn} onClick={sendEmail} type="submit">Submit</div>
            </form>}
            {error && <div style={{color: 'red', fontSize: '25px', margin: '5px'}}>Error Occurred. Please try again.</div>}
        </div>
        <Footer/>
        </div>
    )
};
export default ContactUs;