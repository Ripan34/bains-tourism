import React, {useState} from "react";
import styles from "../css/CustomSlider.module.css";

const CustomSlider = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.slideWrapper}>
                <div className={styles.slides}>1</div>
                <div className={styles.slides}>2</div>
                <div className={styles.slides}>3</div>
                <div className={styles.slides}>4</div>
                <div className={styles.slides}>5</div>
            </div>
        </div>
    );
};
export default CustomSlider;