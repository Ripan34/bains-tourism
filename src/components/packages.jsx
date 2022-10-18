import React from "react";
import styles from '../css/Packages.module.css';

const Packages = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{marginTop: '100px'}}>
                <div className={styles.title}>Services</div>
            </div>
            <div className={styles.servicesWrapper}>
                <div className={styles.inside}>
                    <div className={styles.txt}>Western Union</div>
                    <div className={styles.txt}>Accessories Shop</div>
                </div>
            </div>
        </div>
    )
};
export default Packages;