import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from '@/components/Swiper/Swiper';

const Swiper = (props) => {
  const {
    loop = true,
    autoplay,
    pagination,
    children,
    swiperInit,
    onInit,
    previousSwiperButtonRef,
    nextSwiperButtonRef,
    ...rest
  } = props;
};

const [swiper, setSwiper] = useState(() => swiperInit || null);
const handleSwiperInit = (swiper) => {
  return typeof onInit === 'function' ? onInit(swiper) : setSwiper(swiper);
};

useEffect(() => {
  if (swiper) {
    swiper.params.navigation.prevEl = previousSwiperButtonRef.current;
    swiper.params.navigation.nextEl = nextSwiperButtonRef.current;
  }
}, [nextSwiperButtonRef, previousSwiperButtonRef, swiper]);

return (
  <Swiper
    loop={loop}
    wrapperTag="ul"
    autoplay={autoplay}
    navigation={{
      prevEl: previousSwiperButtonRef.current,
      nextEl: nextSwiperButtonRef.current,
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

export default Swiper;
