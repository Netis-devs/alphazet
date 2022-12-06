import cn from 'classnames';
import Image from 'next/image';

import CardCornerSVG from '@/assets/icons/card-corner.svg';

import styles from '@/components/Card/Card.module.scss';

const Card = (props) => {
  const { className, variant, src, alt, imgClassName, children, ...rest } =
    props;
  const classes = cn({
    [styles.cardBase]: true,
    [styles[variant]]: variant,
    [className]: className,
  });
  const imgClasses = cn({
    [styles.imgBase]: true,
    [imgClassName]: className,
  });
  return (
    <div className={classes} {...rest}>
      {children}
      {src && <Image className={imgClasses} src={src} alt={alt}></Image>}
      <CardCornerSVG className={styles.carCorner} />
    </div>
  );
};

export default Card;
