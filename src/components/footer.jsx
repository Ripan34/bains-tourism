import styles from "../css/Footer.module.css";
import fb from "../images/fb.png";
import tw from "../images/twitter.png";
import ins from "../images/insta.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Bains Tourism
        <div className={styles.cpy}>&copy; COPYRIGHT 2022.</div>
      </div>
      <div className={styles.secs}>
        <div className={styles.follow}>Follow Us</div>
        <div
          className={styles.links}
        >
          <img style={{ cursor: "pointer" }} src={fb} alt="img" />
          <img style={{ cursor: "pointer" }} src={ins} alt="img" />
          <img style={{ cursor: "pointer" }} src={tw} alt="img" />
        </div>
      </div>
      <div className={styles.secs}>
        <div className={styles.fts} onClick={() => navigate("/gallery")}>Services</div>
        <div className={styles.fts} onClick={() => navigate("/contact")}>Contact Us</div>
        <div className={styles.fts} onClick={() => navigate("/gallery")}>Gallery</div>
      </div>
    </div>
  );
};
export default Footer;
