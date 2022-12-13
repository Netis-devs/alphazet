import Navbar from '@/components/Navbar/Navbar';
import Button from '@/components/Buttons/Button';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container';
import ProjectCard from '@/components/Card/ProjectCard';
import { projectCards } from '../HomeView/data';

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
