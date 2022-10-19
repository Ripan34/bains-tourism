import styles from "../css/Footer.module.css";
import fb from '../images/fb.png';
import tw from '../images/twitter.png';
import ins from '../images/insta.png';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.follow}>Follow Us</div>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '20%'}}>
                <img style={{cursor: 'pointer'}} src={fb} alt='img'/>
                <img style={{cursor: 'pointer'}} src={ins} alt='img'/>
                <img style={{cursor: 'pointer'}} src={tw} alt='img'/>
            </div>
        </div>
    )
}
export default Footer;