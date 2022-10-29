import React from "react";
import styles from "../css/Gallery.module.css";
import Navbar from "./navbar";
import shimla from "../images/shimla.webp";
import khand from "../images/khandar.webp";
import man from "../images/manali.webp";
import rajas from '../images/rajas.webp';
import waterF from '../images/waterF.webp';

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
            <img alt="gallery" src={waterF} className={styles.im} />
            <img alt="gallery" src={khand} className={styles.im} />
            <img alt="gallery" src={rajas} className={styles.im} />
            <img alt="gallery" src={man} className={styles.im} />
          </div>
          <div className={styles.column}>
            <img alt="gallery" src={khand} className={styles.im} />
            <img alt="gallery" src={man} className={styles.im} />
            <img alt="gallery" src={rajas} className={styles.im} />
            <img alt="gallery" src={shimla} className={styles.im} />
          </div>
          <div className={styles.column}>
            <img alt="gallery" src={man} className={styles.im} />
            <img alt="gallery" src={waterF} className={styles.im} />
            <img alt="gallery" src={rajas} className={styles.im} />
            <img alt="gallery" src={shimla} className={styles.im} />
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default Gallery;
