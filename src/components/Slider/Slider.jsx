import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from '@/components/Slider/Swiper';

const Slider = (props) => {
  const {
    loop = true,
    autoplay,
    pagination,
    children,
    swiperInit,
    onInit,
    previousSlideButtonRef,
    nextSlideButtonRef,
    slidesPerView,
    spaceBetween,
    centeredSlides,
    ...rest
  } = props;

  const [swiper, setSwiper] = useState(() => swiperInit || null);
  const handleSwiperInit = (swiper) => {
    return typeof onInit === 'function' ? onInit(swiper) : setSwiper(swiper);
  };
  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = previousSlideButtonRef;
      swiper.params.navigation.nextEl = nextSlideButtonRef;
    }
  }, [nextSlideButtonRef, previousSlideButtonRef, swiper]);

  return (
    <Swiper
      loop={loop}
      wrapperTag="ul"
      autoplay={autoplay}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      navigation={{
        prevEl: previousSlideButtonRef,
        nextEl: nextSlideButtonRef,
      }}
      pagination={pagination}
      onInit={handleSwiperInit}
      {...rest}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide tag="li">{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
