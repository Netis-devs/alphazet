import Image from 'next/image';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import IconButton from '@/components/Buttons/IconButton';
import YandexMap from '@/components/YandexMap/YandexMap';

import VideoImg from '@/assets/images/video.png';
import Apelsin from '@/assets/icons/apelsin.png';

import styles from '@/views/AbouView/AboutView.module.scss';

export const iconButton = [
  {
    id: 1,
    src: Apelsin,
  },
  {
    id: 2,
    src: Apelsin,
  },
  {
    id: 3,
    src: Apelsin,
  },
  {
    id: 4,
    src: Apelsin,
  },
  {
    id: 5,
    src: Apelsin,
  },
  {
    id: 6,
    src: Apelsin,
  },
  {
    id: 7,
    src: Apelsin,
  },
  {
    id: 8,
    src: Apelsin,
  },
  {
    id: 9,
    src: Apelsin,
  },
  {
    id: 10,
    src: Apelsin,
  },
  {
    id: 11,
    src: Apelsin,
  },
  {
    id: 12,
    src: Apelsin,
  },
  {
    id: 13,
    src: Apelsin,
  },
  {
    id: 14,
    src: Apelsin,
  },
  {
    id: 15,
    src: Apelsin,
  },
  {
    id: 16,
    src: Apelsin,
  },
  {
    id: 17,
    src: Apelsin,
  },
  {
    id: 18,
    src: Apelsin,
  },
];
const AboutView = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutTriangle}></div>
      <Container>
        <div className={styles.aboutView}>
          <h2 className={styles.aboutTitle}>
            Мы оказываем широкий спектр услуг, помогая компаниям выводить бизнес
            на новый уровень c помощью ИТ
          </h2>
          <div className={styles.teamVideo}>
            <Image className={styles.videoImg} src={VideoImg} />
          </div>
          <div className={styles.aboutInfo}>
            <p className={styles.aboutText}>
              Предоставляем решение c минимумом формализма и максимумом
              результата
            </p>
            <p className={styles.aboutText}>
              Решаем цифровые задачи бизнеса, используя продвинутые
              технологические стеки и c любовью к дизайну
            </p>
            <p className={styles.aboutText}>
              Строим отношения на доверии и открытости
            </p>
          </div>
        </div>
        <div className={styles.aboutContact}>
          <h2 className={styles.contactTitle}>Контакты</h2>
          <div className={styles.aboutContactInner}>
            <div>
              <p className={styles.contactText}>
                Звоните или напишите для сотрудничество:
              </p>
              <div className={styles.aboutContactInner}>
                <p className={styles.contactNumber}>+998 71 202-42-02</p>
                <p className={`${styles.contactNumber} ${styles.textRight}`}>
                  support@alphazet.uz
                </p>
              </div>
            </div>
            <div>
              <p className={styles.contactText}>Адрес нашего офиса:</p>
              <p className={styles.contactNumber}>
                г. Ташкент, Шайхантахурский p, y. Лабзак, рядом 22
              </p>
            </div>
          </div>
          <YandexMap className={styles.mapImg} />
        </div>
        <div className={styles.aboutProjects}>
          <h2 className={styles.contactTitle}>Партнёры</h2>
          <div className={styles.partners}>
            {iconButton.map((item) => (
              <IconButton
                key={item.id}
                className={styles.partnersCard}
                as="a"
                href="/"
                variant="partners"
              >
                <Image src={item.src} alt="apelsin" width={100} height={27} />
              </IconButton>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutView;
