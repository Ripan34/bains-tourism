import styles from '../css/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>BAINS TOURISM</div>
            <div className={styles.leftW}>
                <div>Gallery</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
        </div>
    )
}
export default Navbar;