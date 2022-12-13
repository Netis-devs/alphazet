import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import Button from '@/components/Buttons/Button';

import styles from '@/components/Card/ProjectCard.module.scss';

const ProjectButton = (props) => {
  const { href, children, src, title, text, alt, className, ...rest } = props;
  const classes = cn({
    [styles.projectCard]: true,
    [className]: className,
  });
  return (
    <div className={classes}>
      <Link href={href} prefetch={false} {...rest}>
        {src && (
          <Image
            className={styles.card__img}
            placeholder="blur"
            src={src}
            alt={alt}
          />
        )}

        <div className={styles.projectButton}>
          <Button as="button" variant="secondary">
            Сайт, Приложения
          </Button>
        </div>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectTßext}>{text}</p>
        </div>

        <div className={styles.shadow}></div>
      </Link>
    </div>
  );
};

export default ProjectButton;
