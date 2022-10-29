import styles from "../css/WelcomeContainer.module.css";

const WelcomeContainer = () => {
  return (
    <>
      {/* <div className={styles.sectionFirst}> */}
      <div className={styles.container}>
        <div className={styles.title}>Explore Beautiful Places</div>
        <div className={styles.missionS}>
          Our mission is to connect people with nature
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className={styles.btn}>
            Discover more
            <svg className={styles.arrows}>
              <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
              <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
              <path className={styles.a2} d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>

        </div>
        {/* <div className={styles.search}></div> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default WelcomeContainer;
