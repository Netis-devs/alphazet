import Image from 'next/image';
import Slider from '@/components/Slider/Slider';
import Container from '@/components/Container';

// import SwiperBack from '@/assets/images/projectSwiperBack.png';
import ProjectSwiperImg from '@/assets/images/projectSwiper.png';

import styles from '@/views/ProjectDetails/ProjectSwiper/ProjectSwiper.module.scss';

const data = [
  { id: 1, src: ProjectSwiperImg },
  { id: 2, src: ProjectSwiperImg },
  { id: 3, src: ProjectSwiperImg },
  { id: 4, src: ProjectSwiperImg },
  { id: 5, src: ProjectSwiperImg },
  { id: 6, src: ProjectSwiperImg },
  { id: 7, src: ProjectSwiperImg },
  { id: 8, src: ProjectSwiperImg },
];

const ProjectSwiper = () => {
  return (
    <div className={styles.SwiperBack}>
      <Slider slidesPerView={5.6} centeredSlides={true} autoplay={true}>
        {data.map((item) => (
          <div key={item.id}>
            <Image src={item.src} alt="swiperImage" />
          </div>
        ))}
      </Slider>
      <Container>
        <p className={styles.resycleText}>
          Во-первых, мы исследовали и проанализировали аналогичные программы в
          стране и за рубежом
        </p>
      </Container>
    </div>
  );
};

export default ProjectSwiper;
