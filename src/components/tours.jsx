import React, {useState} from "react";
import styles from "../css/Tours.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/sliderStyles.css";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";


const Tours = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tourHeaderContainer}>
        Shimla
      </div>
      <div className={styles.sliderWrapper}>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className={styles.slides}>1</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.slides}>2</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className={styles.slides}>3</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className={styles.slides}>4</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.slides}>5</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className={styles.slides}>6</div>
        </SwiperSlide>
      </Swiper>
      </div>
      {/* <div className={styles.btn} onClick={() => {setNextSlide(prev => prev+1); setActiveSlide(prev => prev+1)}}>Next</div> */}

    </div>
  );
};
export default Tours;
