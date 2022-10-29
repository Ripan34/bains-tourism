import React from "react";
import NavBar from "./navbar";
import styles from "../css/AboutUs.module.css";
import { useNavigate } from "react-router-dom";
import Footer from './footer';

const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.title}>About Us</div>
        <div className={styles.mapWrapper}>
          <div className={styles.desc}>
            Located in the district of Hoshiarpur. We are dedicated to provide
            the best service to our customers. Our services include tour
            packages, air tickets, cash services and car accessories. We have a
            fleet of 10 vehicles ready at your service.
            Our team includes experienced drivers who are familier with all the famous destinations across India.

            <div style={{marginTop: '20px'}}>
                We have created several tour packages which consist of great destinations. Would like to find more? 
                <span style={{textDecoration: 'underline', fontSize: '18px', marginLeft: '10px', cursor: 'pointer'}} onClick={() => navigate('/contact')}>Contact us here</span>
            </div>
            <div className={styles.addr}>
              <div className={styles.lines}>Adda bhikhowal, near hariana</div>
              <div className={styles.lines}>Hoshiarpur to dasuya road</div>
              <div className={styles.lines}>Pincode :-144208</div>
              <div className={styles.lines}>Distt. Hoshiarpur </div>
              <div className={styles.lines}>State:- Punjab</div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2420.635934511136!2d75.77874759550738!3d31.59014767095398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1666557070849!5m2!1sen!2sus"
            className={styles.if}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default AboutUs;
