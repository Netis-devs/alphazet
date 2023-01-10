import React, { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from '@/components/Slider/Swiper';

const Slider = (props) => {
  const {
    loop = true,
    autoplay,
    pagination,
    children,
    // swiperInit,
    // onInit,
    // previousSlideButtonRef,
    // nextSlideButtonRef,
    slidesPerView,
    spaceBetween,
    centeredSlides,
    ...rest
  } = props;
  const previousSlideButtonRef = useRef(null);
  const nextSlideButtonRef = useRef(null);

  // const [swiper, setSwiper] = useState(() => swiperInit || null);
  // const handleSwiperInit = (swiper) => {
  //   return typeof onInit === 'function' ? onInit(swiper) : setSwiper(swiper);
  // };
  // useEffect(() => {
  //   if (swiper) {
  //     swiper.params.navigation.prevEl = previousSlideButtonRef;
  //     swiper.params.navigation.nextEl = nextSlideButtonRef;
  //   }
  // }, [nextSlideButtonRef, previousSlideButtonRef, swiper]);

  return (
    <div>
      <button ref={nextSlideButtonRef}>next</button>
      <button ref={previousSlideButtonRef}>previous</button>
      <Swiper
        loop={loop}
        wrapperTag="ul"
        autoplay={autoplay}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        navigation={{
          prevEl: previousSlideButtonRef.current,
          nextEl: nextSlideButtonRef.current,
        }}
        pagination={pagination}
        // onInit={handleSwiperInit}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = previousSlideButtonRef.current;
          swiper.params.navigation.nextEl = nextSlideButtonRef.current;
        }}
        {...rest}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide tag="li">{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
