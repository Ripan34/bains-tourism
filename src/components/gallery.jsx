import React from "react";
import styles from "../css/Gallery.module.css";
import Navbar from "./navbar";
import shimla from "../images/shimla.jpg";
import khand from "../images/khandar.jpg";
import man from "../images/manali.jpg";
import rajas from '../images/rajas.jpg';
import waterF from '../images/waterF.jpg';

import Footer from "./footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.title}>Gallery</div>
        <div style={{padding: '10px', boxSizing: 'border-box'}}>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src={waterF} className={styles.im} />
            <img src={khand} className={styles.im} />
            <img src={rajas} className={styles.im} />
            <img src={man} className={styles.im} />
          </div>
          <div className={styles.column}>
            <img src={khand} className={styles.im} />
            <img src={man} className={styles.im} />
            <img src={rajas} className={styles.im} />
            <img src={shimla} className={styles.im} />
          </div>
          <div className={styles.column}>
            <img src={man} className={styles.im} />
            <img src={waterF} className={styles.im} />
            <img src={rajas} className={styles.im} />
            <img src={shimla} className={styles.im} />
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default Gallery;
