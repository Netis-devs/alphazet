import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import styles from '@/components/Card/ProjectCard.module.scss';

const ProjectButton = (props) => {
  const { href, children, src, alt, className, ...rest } = props;
  const classes = cn({
    [styles.projectCard]: true,
    [className]: className,
  });
  return (
    <div className={classes}>
      <Link href={href} prefetch={false} {...rest}>
        <Image className={styles.card__img} src={src} alt={alt} />
        <div>{children}</div>
        <div className={styles.shadow}></div>
      </Link>
    </div>
  );
};

export default ProjectButton;
