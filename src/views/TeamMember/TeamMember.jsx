import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Buttons/Button';
import ProjectCard from '@/components/Card/ProjectCard';

import TeamMemberImg from '@/assets/images/teamMember.png';
import cardProject from '@/assets/images/cards-project.png';

import styles from '@/views/TeamMember/TeamMember.module.scss';

const infoData = [
  {
    id: 1,
    title: 'Илхом Рахмонов',
    text: 'UI/UX дизайнер',
    workPeriod: 'работает с 17 октября 2016',
    projectsNumber: 35,
  },
];

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

const TeamMember = () => {
  return (
    <div>
      <Header src={TeamMemberImg} alt="teamMember">
        <div className={styles.teamInfo}>
          {infoData.map((item) => (
            <div key={item.id}>
              <h3 className={styles.teamTitle}>{item.title}</h3>
              <p className={styles.teamText}>{item.text}</p>
              <div className={styles.teamInfoInner}>
                <span className={styles.span}></span>
                <p className={styles.teamSecondText}>{item.workPeriod}</p>
                <p className={`${styles.teamSecondText} ${styles.second}`}>
                  Участие в проектах:{item.projectsNumber}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Header>
      <Container>
        <section className={styles.projects}>
          <h3 className={styles.teamProjectTitle}>Проекты</h3>
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
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default TeamMember;
