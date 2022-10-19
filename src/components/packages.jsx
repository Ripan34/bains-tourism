import React from "react";
import styles from '../css/Packages.module.css';
import ws from '../images/ws.png';
import car from '../images/car.jpg';

const Packages = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{marginTop: '100px'}}>
                <div className={styles.title}>Services</div>
            </div>
            <div className={styles.servicesWrapper}>
                <div className={styles.inside}>
                    <div style={{display: 'flex', }}>
                        <div className={styles.txt} style={{marginRight: '50px'}}>Cash Services</div>
                        <img style={{width: '40vw'}} src={ws} alt='ws'/>
                    </div>
                    <div style={{display: 'flex',}}>
                        <img style={{width: '30vw', marginRight: '50px'}} src={car} alt='ws'/>
                        <div className={styles.txt}>Car Accessories</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Packages;