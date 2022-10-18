import React, {useState, useRef, useEffect} from "react";
import styles from "../css/Tours.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/sliderStyles.css";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import places from "./toursData";

const Tours = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showIndex, setShowIndex] = useState(1);
  const prevRef = useRef();
  const nextRef = useRef();
  

  return (
    <div className={styles.wrapper} style={{backgroundImage: `url(${places[showIndex-1].img})`}}>
      <div className={styles.tourHeaderContainer}>
        <div className={styles.trs}>DESTINATIONS</div>
        <div className={styles.title}>{places[showIndex-1].place}</div>
        <div className={styles.desc}>
          {places[showIndex-1].desc}
        </div>
      </div>
      <div className={styles.sliderWrapper}>
      <Swiper
        effect={"coverflow"}
        spaceBetween={50}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(sp) => setActiveSlide(sp.activeIndex)}
        className="mySwiper"
      >
        <SwiperSlide className={activeSlide > 0 ?  styles.fadeOutLeft: 'swiper-slide'}>
          <div className={styles.slideTopTitle}>{places[1].place}</div>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[1].img})`}}></div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 1 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slideTopTitle}>{places[2].place}</div>
        <div className={styles.slides} style={{backgroundImage: `url(${places[2].img})`}}></div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 2 ?  styles.fadeOutLeft: 'swiper-slide'} >
        <div className={styles.slideTopTitle}>{places[3].place}</div>
        <div className={styles.slides} style={{backgroundImage: `url(${places[3].img})`}}></div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 3 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slideTopTitle}>{places[4].place}</div>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[4].img})`}}></div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 4 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slideTopTitle}>{places[5].place}</div>
        <div className={styles.slides} style={{backgroundImage: `url(${places[5].img})`}}></div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 5 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slideTopTitle}>{places[5].place}</div>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}></div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.btnContainer}>
         {<div ref={prevRef} style={{visibility: showIndex > 1 ? 'visible': 'hidden'}} className={styles.btn} onClick={() =>{ setShowIndex(prev => prev-1)}}>&lt;</div>}
         { showIndex != places.length-1 &&<div ref={nextRef} className={styles.btn} onClick={() => setShowIndex(prev => prev+1)}>&gt;</div>}
      </div>
      </div>
    </div>
  );
};
export default Tours;
