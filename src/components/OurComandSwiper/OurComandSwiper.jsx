import { useEffect, useState } from 'react';

import Link from 'next/link';
import Slider from '@/components/Slider/Slider';
import Image from 'next/image';

import TeamMemberImg from '@/assets/images/team-member-photo.png';

import styles from '@/components/OurComandSwiper/OurComand.module.scss';

const data = [
  {
    id: 1,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 2,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 3,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 4,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 5,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 6,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 7,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 8,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 9,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
  {
    id: 10,
    title: 'Артём Ушаков',
    workPosition: 'Backend Developer',
    src: TeamMemberImg,
  },
];

const OurSwiper = () => {
  const [play, setPlay] = useState(true);
  // const handleSubmit = () => {
  //   setPlay(false);
  // };

  return (
    <div>
      <Slider
        slidesPerView={4.9}
        spaceBetween={24}
        centeredSlides={true}
        autoplay={play}
      >
        {data.map((item) => (
          <div className={styles.ourSwiper} key={item.id}>
            <Link href={`teammember/${item.id}`}>
              <Image
                // onMouseOver={() => handleSubmit()}
                className={styles.ourSwiperImg}
                src={item.src}
                alt="Image"
              />

              <h3 className={styles.ourTitle}>{item.title}</h3>
              <p className={styles.ourText}>{item.workPosition}</p>
              <span className={styles.ourContent}></span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default OurSwiper;
