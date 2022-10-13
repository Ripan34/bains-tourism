import styles from '../css/WelcomeContainer.module.css';

const WelcomeContainer = () => {
    return (
        <>
            {/* <div className={styles.sectionFirst}> */}
                <div className={styles.container}>
                    <div className={styles.title}>Explore Beautiful Places</div>
                    <div className={styles.missionS}>Our mission is to connect people with nature</div>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    <div className={styles.btn}>Discover<svg width="30pt" height="35pt" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
 <path d="m537.02 375.98c-0.13281-3.3867-1.5273-7.3008-3.8477-9.7695l-75.773-80.512c-5.1328-4.6133-14.98-6.5195-20.719-1.1836-5.6523 5.2539-5.4844 15.445 0.14844 20.719l53.277 56.535h-260.91c-7.8477 0-14.207 6.3633-14.207 14.207 0 7.8477 6.3594 14.207 14.207 14.207h260.91l-53.277 56.535c-4.8477 4.8555-5.7422 15.406-0.14844 20.719 5.5977 5.3125 15.797 3.6172 20.719-1.1836l75.773-80.512c2.5938-2.7539 3.8555-5.9883 3.8477-9.7695z" fill="#fff"/>
</svg></div></div>
                    {/* <div className={styles.search}></div> */}
                </div>
            {/* </div> */}
        </>
    )
};
export default WelcomeContainer;