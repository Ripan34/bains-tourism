import styles from "../css/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

let prevScrollpos = window.pageYOffset;

const Navbar = () => {
  const navigate = useNavigate();
  const wrRef = useRef();
  const [clicked, setClicked] = useState(false);

  function onScroll() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos === 0){
      wrRef.current.style.top = "0";
      return;
    }
    if ( prevScrollpos > currentScrollPos) {
      wrRef.current.style.top = "0";
    } else {
        wrRef.current.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrRef} className={styles.wrapper}>
      <div onClick={() => navigate("/")} className={styles.logo}>
        BAINS TOURISM
      </div>
      <div
        onClick={() => setClicked((prev) => !prev)}
        className={styles.menuIt}
      >
        <div
          className={clicked ? `${styles.menu1} ${styles.anim1}` : styles.menu1}
        />
        <div
          className={clicked ? `${styles.menu2} ${styles.anim2}` : styles.menu2}
        />
      </div>
      <div
        className={
          clicked ? `${styles.hamWrapper} ${styles.hamIn}` : styles.hamWrapper
        }
      >
        <div style={{ width: '100%'}}>
          <div className={styles.hamIt}>
            <div
              style={{ marginTop: "50px" }}
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </div>
          </div>
          <div onClick={() => navigate("/about")} className={styles.hamIt}>
            <div style={{ marginTop: "50px" }}>About Us</div>
          </div>
          <div onClick={() => navigate("/contact")} className={styles.hamIt}>
            <div style={{ marginTop: "50px" }}>Contact Us</div>
          </div>
        </div>
        <div onClick={() => navigate("/")} className={styles.logoHam}>
            BAINS TOURISM
          </div>
      </div>
      <div className={styles.leftW}>
        <div onClick={() => navigate("/gallery")} className={styles.items}>
          Gallery
        </div>
        <div onClick={() => navigate("/about")} className={styles.items}>
          About Us
        </div>
        <div onClick={() => navigate("/contact")} className={styles.items}>
          Contact Us
        </div>
      </div>
    </div>
  );
};
export default Navbar;
