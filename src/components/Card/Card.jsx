import cn from 'classnames';
import styles from '@/components/Card/Card.module.scss';
import Image from 'next/image';

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
      <Image className={imgClasses} src={src} alt={alt}></Image>
      <svg
        className={styles.card__corner}
        width="91"
        fill="#323232"
        height="360"
        viewBox="0 0 91 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-389.46 217.336L10.8753 438.186L90.7936 366.227L-87 -55L-163.23 13.6376L-36.0061 305.76L-312.615 148.145L-389.46 217.336Z" />
      </svg>
    </div>
  );
};

export default Card;
