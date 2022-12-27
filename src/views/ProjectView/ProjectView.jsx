import Navbar from '@/components/Navbar/Navbar';
import Button from '@/components/Buttons/Button';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container';
import ProjectCard from '@/components/Card/ProjectCard';

import cardProject from '@/assets/images/cards-project.png';


import styles from '@/views/ProjectView/ProjectView.module.scss';

const buttonTitle = [
  {
    id: 1,

    title: 'Все',
  },
  {
    id: 1,

    title: 'Сайты',
  },
  {
    id: 1,

    title: 'Приложения',
  },
  {
    id: 1,

    title: 'Маркетинг',
  },
  {
    id: 1,

    title: 'Дизайн',
  },
  {
    id: 1,

    title: 'Медиа',
  },
];
const projectCards = [
  {
    id: '1',
    href: 'projects/1',
    alt: 'bnma',
    src: cardProject,
  },
  {
    id: '2',
    href: 'projects/2',
    alt: 'bnma',
    src: cardProject,
  },
  {
    id: '3',
    href: 'projects/3',
    alt: 'bnma',
    src: cardProject,
  },
  {
    id: '4',
    href: 'projects/4',
    alt: 'bnma',
    src: cardProject,
  },
];

const ProjectView = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectNavbar}>
        <Navbar />
      </div>
      <Container>
        <div className={styles.projectButtons}>
          {buttonTitle.map((item) => (
            <Button
              as="a"
              href="/"
              className={styles.projectButton}
              key={item.idß}
              variant="project"
            >
              {item.title}
            </Button>
          ))}
          <div className={styles.projectLinks}>
            {projectCards.map((item) => (
              <ProjectCard
                key={item.id}
                href={item.href}
                src={item.src}
                alt={item.alt}
                title="iTV"
                text="gbhs gh nfgh"
              />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProjectView;
