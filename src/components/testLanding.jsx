import React from "react";
import {Parallax} from "react-scroll-parallax";
import styles from '../css/Landing.module.css';
import Navbar from './navbar';
import Tilt from 'react-parallax-tilt';
import Tours from "./tours";
import Packages from "./packages";
import Footer from "./footer";

const TestLanding = () => {
      return (
        <>
        <div className={styles.mDiv}>
          <Navbar/>
        <Tilt className={styles.dvWrap} tiltMaxAngleX={5} tiltMaxAngleY={5} tiltAxis='y'>
          <div className={`${styles.div1} ${styles.title}`}>
          Explore Beautiful Places
        </div>
        <Parallax className={styles.div2} speed={0} />
        <Parallax className={styles.div3} speed={-30} />
        <Parallax className={styles.div4} speed={-40}/>
        <Parallax className={styles.div5} speed={-20}/>
        <Parallax className={styles.div6} speed={0}/>
        <Parallax className={styles.div7} speed={-30}/>
        </Tilt>
        </div>
        <Tours/>
        <Packages/>
      <Footer/>
        </>
      );
};
export default TestLanding;
