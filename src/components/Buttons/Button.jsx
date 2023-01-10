import Link from 'next/link';
import cn from 'classnames';

import styles from '@/components/Buttons/Button.module.scss';

const Button = (props) => {
  const {
    as = 'button',
    type = 'button',
    to,
    className,
    variant,
    children,
    ...rest
  } = props;

  const classes = cn({
    [styles.buttonBase]: true,
    [styles[variant]]: variant,
    [className]: className,
  });

  if (as === 'a')
    return (
      <Link className={classes} href={to} prefetch={false} {...rest}>
        {children}
      </Link>
    );

  if (as === 'button')
    return (
      <button type={type} className={classes} {...rest}>
        {children}
      </button>
    );
};
export default Button;
