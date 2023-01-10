import Image from 'next/image';
import SwiperSvg from '@/assets/icons/swiperSvg.svg';

import styles from '@/components/ReviewSwiper/ReviewInfo.module.scss';

const SwiperInfo = ({ slide }) => {
  const { img, info, title, positionWork } = slide;
  return (
    <div className={styles.slider}>
      <SwiperSvg className={styles.swiperSvg} />
      <Image src={img} alt="img" />
      <div className={styles.swiperInfo}>
        <p className={styles.sliderText}>{info}</p>
        <h3 className={styles.swiperTitle}>{title}</h3>
        <p className={styles.positionWork}>{positionWork}</p>
      </div>
    </div>
  );
};
export default SwiperInfo;
