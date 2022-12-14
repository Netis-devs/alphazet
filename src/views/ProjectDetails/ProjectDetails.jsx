import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import IconButton from '@/components/Buttons/IconButton';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

import TashBusImg from '@/assets/images/tashbus.png';
import SketchFirstImg from '@/assets/images/sketch1.png';
import SketchSecondImg from '@/assets/images/sketch2.png';
import SketchThirdImg from '@/assets/images/sketch3.png';
import TashbusSvg from '@/assets/icons/tashbusSvg.svg';
import BusSvg from '@/assets/icons/bus.svg';
import cardFirstImg from '@/assets/images/1.png';
import cardSecondImg from '@/assets/images/2.png';
import GoogleApps from '@/assets/images/googleApps.png';
import GooglePlay from '@/assets/icons/appStore.svg';
import LeftCornerimg from '@/assets/images/leftCorner.png';
import RightCornerimg from '@/assets/images/rightCorner.png';
import ProccesImg from '@/assets/images/proccessing.png';

import styles from '@/views/ProjectDetails/ProjectDetails.module.scss';
const cardImg = [
  {
    id: 1,
    src: cardFirstImg,
  },
  {
    id: 2,
    src: cardSecondImg,
  },
  {
    id: 3,
    src: cardFirstImg,
  },
  {
    id: 4,
    src: cardFirstImg,
  },
  {
    id: 5,
    src: cardSecondImg,
  },
  {
    id: 6,
    src: cardFirstImg,
  },
  {
    id: 7,
    src: cardSecondImg,
  },
  {
    id: 8,
    src: cardFirstImg,
  },
  {
    id: 9,
    src: cardFirstImg,
  },
  {
    id: 10,
    src: cardSecondImg,
  },
  {
    id: 11,
    src: cardFirstImg,
  },
  {
    id: 12,
    src: cardSecondImg,
  },
  {
    id: 13,
    src: cardFirstImg,
  },
  {
    id: 14,
    src: cardSecondImg,
  },
  {
    id: 15,
    src: cardFirstImg,
  },
  {
    id: 16,
    src: cardSecondImg,
  },
  {
    id: 17,
    src: cardFirstImg,
  },
  {
    id: 18,
    src: cardSecondImg,
  },
  {
    id: 19,
    src: cardFirstImg,
  },
  {
    id: 20,
    src: cardSecondImg,
  },
];
const partnerIcons = [
  {
    id: 1,
    Element: BusSvg,
  },
  {
    id: 2,
    Element: BusSvg,
  },
  {
    id: 3,
    Element: BusSvg,
  },
  {
    id: 4,
    Element: BusSvg,
  },
  {
    id: 5,
    Element: BusSvg,
  },
  {
    id: 6,
    Element: BusSvg,
  },
  {
    id: 7,
    Element: BusSvg,
  },
  {
    id: 8,
    Element: BusSvg,
  },
  {
    id: 9,
    Element: BusSvg,
  },
  {
    id: 10,
    Element: BusSvg,
  },
];

const HomeDetails = () => {
  return (
    <div>
      <Header src={TashBusImg} alt="tashbus" />
      <Container>
        <div className={styles.projectInfo}>
          <div className={styles.projectInfoInner}>
            <h3 className={styles.projectTitle}>Задача</h3>
            <p className={styles.projectText}>
              Создать программу, в которой людям будет удобно отслеживать
              общественные транспортные средства
            </p>
          </div>
          <TashbusSvg />
        </div>
        <div className={styles.recsycle}>
          <p className={styles.resycleText}>
            Во-первых, мы исследовали и проанализировали аналогичные программы в
            стране и за рубежом
          </p>
          <div className={styles.projectPartners}>
            {partnerIcons.map((item) => {
              const { Element, id } = item;
              return (
                <IconButton key={id} as="a" href="/" variant="analize">
                  <Element />
                </IconButton>
              );
            })}
          </div>
        </div>
      </Container>
      <div className={styles.rysycle}>
        <Container>
          <p className={styles.resycleText}>
            На следующих этапах на основе всего анализа мы разработали структуру
            программы и подготовили скетч-версию
          </p>
          <Image src={ProccesImg} width={1500}  />
        </Container>
      </div>
      <div className={styles.sketch}>
        <Container>
          <p className={styles.sketchText}>Скетч-версия программы</p>
          <div className={styles.sketchInner}>
            <Image
              className={styles.sketchImg}
              src={SketchFirstImg}
              alt="Sketch1"
            />
            <Image
              className={styles.sketchImg}
              src={SketchSecondImg}
              alt="Sketch2"
            />
            <Image
              className={styles.sketchImg}
              src={SketchThirdImg}
              alt="Sketch3"
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.projectCard}>
          <p className={styles.resycleText}>
            На четвёртом этапе мы создали окончательный визуальный вид
            программы, используя построенную структуру и созданную версию эскиза
          </p>
          <div className={styles.cardInner}>
            {cardImg.map((item) => (
              <Image className={styles.cardImg} id={item.key} src={item.src} />
            ))}
          </div>
        </div>
      </Container>

      <div className={styles.googleApps}>
        <Image
          className={styles.leftCorner}
          src={RightCornerimg}
          alt="leftCorner"
        />
        <Container>
          <div className={styles.googleAppsInner}>
            <div className={styles.appsInfo}>
              <p className={styles.infoText}>
                Затем на основе готового дизайна мы разработали приложение для
                платформ iOS и Android. Вы можете скачать программу из Appstore
                и Google Play
              </p>
              <div className={styles.socials}>
                <IconButton className={styles.socialsImg} as="a" href="/">
                  <GooglePlay />
                </IconButton>
                <IconButton className={styles.socialsImg} as="a" href="/">
                  <GooglePlay />
                </IconButton>
              </div>
            </div>
            <Image src={GoogleApps} alt="googleApps" />
          </div>
        </Container>
        <Image
          className={styles.rightCorner}
          src={LeftCornerimg}
          alt="leftCorner"
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeDetails;
