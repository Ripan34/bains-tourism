import React, {useState} from "react";
import styles from '../css/Packages.module.css';
import ws from '../images/ws.png';
import airT from '../images/airT.webp';

const Packages = () => {
    const showImg = [ws, airT];
    const [showInd, setShowInd] = useState(0);

    return (
        <div className={styles.wrapper}>
                <div className={styles.title}>Services</div>
            <div className={styles.servicesWrapper}>
                <div className={styles.names}>
                    <div className={showInd === 0 ? `${styles.txt} ${styles.sc}` : styles.txt} onMouseEnter={() => setShowInd(0)}>Cash Services</div>
                    <div className={showInd === 1 ? `${styles.txt} ${styles.sc}` : styles.txt} onMouseEnter={() => setShowInd(1)}>Air Tickets</div>
                </div>
                <div className={styles.imgs}>
                    <img src={showImg[showInd]} alt="service" className={styles.im}/>
                </div>
            </div>
        </div>
    )
};
export default Packages;