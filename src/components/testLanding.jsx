import React, { useEffect, useRef, useState } from "react";
import {Parallax, ParallaxBanner, ParallaxBannerLayer, useParallax } from "react-scroll-parallax";
import img1 from "../images/shimla.jpg";
import img2 from "../images/manali.jpg";
import img3 from "../images/rajas.jpg";
import styles from '../css/Landing.module.css';
import Navbar from './navbar';
import Tilt from 'react-parallax-tilt';
import Tours from "./tours";
import Packages from "./packages";
import Footer from "./footer";

const TestLanding = () => {
    // const parallax = useParallax({
    //     speed: -10,
    //   });
    const [op, setOp] = useState(0);
    const fDiv = useRef();
    function onScroll(){
      const y = window.scrollY 
       setOp(0+y/100);
    }
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll)
    }, [])
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
