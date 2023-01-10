import React from 'react';
import Image from 'next/image';

import Container from '@/components/Container';
import Button from '@/components/Buttons/Button';
import videoImg from '@/assets/images/video.png';
import StaysSvg from '@/assets/icons/stays.svg';
import ItvSvg from '@/assets/icons/itv.svg';
import TransportSvg from '@/assets/icons/transport.svg';
import VideoStartSvg from '@/assets/icons/videoStart.svg';

import styles from '@/components/ShortAbout/ShortAbout.module.scss';

const ShortAbout = () => {
  return (
    <div>
      <Container>
        <h2 className={styles.shortHeading}>Коротко о нас</h2>
        <div className={styles.shortInner}>
          <div className={styles.videoContent}>
            <Image
              className={styles.shortImg}
              src={videoImg}
              alt="videoImg"
            ></Image>
            <VideoStartSvg className={styles.videoStart} />
          </div>
          <div className={styles.shortRight}>
            <p className={styles.shortText}>Нашы работы:</p>
            <div className={styles.shortImages}>
              <StaysSvg className={styles.shortSvg} />
              <ItvSvg className={styles.shortSvg} />
              <TransportSvg className={styles.shortSvg} />
            </div>
            <p className={styles.shortSecondText}>
              Alphazet - это Digital агентство, которая помогает
              масштабироваться вашему бизнесу в Digital сфере. Мы реализуем вам
              IT-проекты любой сложности и работали над такими проектами как
              iTV.uz, Cinerama, iKids, Turon Telecom.
            </p>
            <Button className={styles.shortBtn} as="button" variant="primary">
              Оставить заявку
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShortAbout;
