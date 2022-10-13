import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import img1 from '../images/sky.png';
import img2 from '../images/mnt.png';
import img3 from '../images/riv.png';
import styles from '../css/Landing.module.css';
import Navbar from './navbar';
import WelcomeContainer from "./welcomeContainer";
import Tours from "./tours";

const Landing = () => {
    const headline = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className={`${styles.inset} ${styles.center}`}>
            <h1 className={`${styles.headline} ${styles.white}`}>Bains Tourism</h1>
          </div>
        )
      };

    const gradientOverlay = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className={`${styles.gradient} ${styles.inset}`}/>
      };
  return (
    <>
    <div className={styles.container}>
        <Navbar/>
        <WelcomeContainer/>
      <ParallaxBanner style={{height: '100vh'}}
        layers={[
          { image: img1, speed: -50 },
          { image: img2, speed: -40 },
          { image: img3, speed: -20 },
          gradientOverlay,
        ]}
      />
      </div>
      <Tours/>
      </>
  );
};
export default Landing;
