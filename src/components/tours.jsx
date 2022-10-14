import React, {useState, useRef, useEffect} from "react";
import styles from "../css/Tours.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/sliderStyles.css";
import shimla from '../images/shimla.jpg';
import rajs from '../images/rajas.jpg';
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";


const Tours = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const places = [{place: "Shimla", img: shimla}, {place: "Rajasthan", img: rajs}, {place: "Jatt", img: shimla} , {place: "Sher", img: shimla}, {place: "ewewe", img: shimla},
  {place: "qwewe", img: shimla}];
  const [showIndex, setShowIndex] = useState(1);
  const prevRef = useRef();
  const nextRef = useRef();
  

  return (
    <div className={styles.wrapper} style={{backgroundImage: `url(${places[showIndex-1].img})`}}>
      <div className={styles.tourHeaderContainer}>
        {places[showIndex-1].place}
      </div>
      <div className={styles.sliderWrapper}>
      <Swiper
        effect={"coverflow"}
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
          slideShadows: true,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(sp) => setActiveSlide(sp.activeIndex)}
        className="mySwiper"
      >
        <SwiperSlide className={activeSlide > 0 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>1</div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 1 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>2</div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 2 ?  styles.fadeOutLeft: 'swiper-slide'} >
        <div className={styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>3</div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 3 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>4</div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 4 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>5</div>
        </SwiperSlide>
        <SwiperSlide className={activeSlide > 5 ?  styles.fadeOutLeft: 'swiper-slide'}>
        <div className={ styles.slides} style={{backgroundImage: `url(${places[showIndex].img})`}}>6</div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.btnContainer}>
           <div ref={prevRef} className={styles.btn} onClick={() =>{ setShowIndex(prev => prev-1)}}>&lt;</div>
          <div ref={nextRef} className={styles.btn} onClick={() => setShowIndex(prev => prev+1)}>&gt;</div>
      </div>
      </div>
    </div>
  );
};
export default Tours;
