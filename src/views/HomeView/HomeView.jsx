import Image from 'next/image';

import IconButton from '@/components/Buttons/IconButton';
import Button from '@/components/Buttons/Button';
import Card from '@/components/Card/Card';
import ProjectCard from '@/components/Card/ProjectCard';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ShortAbout from '@/components/ShortAbout/ShortAbout';
import Container from '@/components/Container';

import video from '@/assets/images/hero-video-bg.png';
import videoGif from '@/assets/images/videoGif.gif';
import TelegramSVG from '@/assets/icons/telegram.svg';
import InstagramSVG from '@/assets/icons/instagram.svg';
import YouTubeSVG from '@/assets/icons/youtube.svg';
import FacebookSVG from '@/assets/icons/facebook.svg';

import { cards, iconButton, projectCards } from './data';

import styles from '@/views/HomeView/HomeView.module.scss';

const socialIcons = [
  {
    id: 1,
    Element: InstagramSVG,
  },
  {
    id: 2,
    Element: TelegramSVG,
  },
  {
    id: 3,
    Element: YouTubeSVG,
  },
  {
    id: 4,
    Element: FacebookSVG,
  },
];

function HomeView() {
  return (
    <div>
      <Header src={video} alt="egeg">
        <div className={styles.headerCenter}>
          <div className={styles.headerFlex}>
            <h1 className={styles.headerTitle}>
              Мы поможем вам выполнить все виды ИТ-проектов
            </h1>
            <div>
              {socialIcons.map((item) => {
                const { Element, id } = item;
                return (
                  <IconButton
                    key={id}
                    className={styles.headerSocials}
                    as="a"
                    href="/"
                    variant="socials"
                  >
                    <Element />
                  </IconButton>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div>
            <ul className={styles.headerLink}>
              <li>
                <a className={styles.headerLinks} href="tel:998909039799">
                  +998 90 903-97-99
                </a>
              </li>
              <li>
                <a className={styles.headerLinks} href="#">
                  support@alphazet.uz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <ShortAbout />
      <Container>
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>Наши услуги</h2>
          {cards.map((item) => (
            <Card
              className={styles.headerCard}
              key={item.id}
              src={item.image}
              alt="image"
            >
              <div>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className={styles.projectCard}>
          <h2 className={styles.cardHeading}>Проекты</h2>
          <div className={styles.projectcardInner}>
            {projectCards.map((item) => (
              <ProjectCard
                key={item.id}
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
          <Button
            className={styles.projectButton}
            as="button"
            variant="primary"
          >
            Все проекты
          </Button>
        </div>
        <div className={styles.partner}>
          <h2 className={styles.cardHeading}>Партнёры</h2>
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
      <div className={styles.swiper}>
        <Container>
          <h2 className={styles.cardHeading}>Отзывы</h2>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default HomeView;
