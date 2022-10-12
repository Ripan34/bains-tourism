import styles from '../css/WelcomeContainer.module.css';

const WelcomeContainer = () => {
    return (
        <>
            {/* <div className={styles.sectionFirst}> */}
                <div className={styles.container}>
                    <div className={styles.title}>Explore Beautiful Places</div>
                    <div className={styles.missionS}>Our mission is to connect people with nature</div>
                    <div className={styles.btn}>Explore</div>
                    {/* <div className={styles.search}></div> */}
                </div>
            {/* </div> */}
        </>
    )
};
export default WelcomeContainer;