import { useRef } from 'react';
import Slider from '@/components/Slider/Slider';
import SwiperInfo from '@/components/ReviewSwiper/ReviewInfo';

import swiperImg from '@/assets/images/swiperImg.png';

import styles from '@/components/ReviewSwiper/ReviewSwiper.module.scss';

const data = [
  {
    id: 1,
    img: swiperImg,
    info: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    title: 'Олег Борисов',
    positionWork: 'Руководитель проектов S7 Airlines',
  },
  {
    id: 2,
    img: swiperImg,
    info: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    title: 'Олег Борисов',
    positionWork: 'Руководитель проектов S7 Airlines',
  },
  {
    id: 3,
    img: swiperImg,
    info: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    title: 'Олег Борисов',
    positionWork: 'Руководитель проектов S7 Airlines',
  },
  {
    id: 4,
    img: swiperImg,
    info: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    title: 'Олег Борисов',
    positionWork: 'Руководитель проектов S7 Airlines',
  },
  {
    id: 5,
    img: swiperImg,
    info: 'Крутая команда профессионалов, быстро адаптирующаяся под периодически изменяемые требования заказчика, качественно и в срок выполняющая поставленные задачи',
    title: 'Олег Борисов',
    positionWork: 'Руководитель проектов S7 Airlines',
  },
];

const HomeSwiper = () => {
  const previousSlideButtonRef = useRef(null);
  const nextSlideButtonRef = useRef(null);
  return (
    <div>
      <Slider
        slidesPerView={1.62}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={true}
        className={styles.homeSwiper}
        navigation={true}
        previousSlideButtonRef={previousSlideButtonRef}
        nextSlideButtonRef=".next"
      >
        {data.map((slide) => (
          <SwiperInfo key={slide.id} slide={slide} />
        ))}
      </Slider>
    </div>
  );
};
export default HomeSwiper;
