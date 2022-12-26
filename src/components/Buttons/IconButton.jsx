import React from 'react';
import cn from 'classnames';
import Icon from '@/icons';
import Link from 'next/link';

import styles from '@/components/Buttons/IconButton.module.scss';

const IconButton = React.forwardRef((props, ref) => {
  const {
    as = 'button',
    type = 'type',
    href,
    iconName,
    variant,
    iconSize,
    className,
    iconClassName,
    children,
    ...rest
  } = props;
  const classes = cn(
    {
      [styles.baseStyles]: true,
      [styles[variant]]: variant,
    },
    className
  );
  const iconClasses = cn({
    [styles.iconMarginRight]: children,
    [iconClassName]: iconClassName,
  });
  const styledIcon = (
    <Icon className={iconClasses} icon={iconName} size={iconSize} />
  );
  if (as === 'a') {
    return (
      <Link ref={ref} href={href}>
        <span className={classes} {...rest}>
          {styledIcon} {children}
        </span>
      </Link>
    );
  }
  if (as === 'button') {
    return (
      <button ref={ref} className={classes} {...rest} type={type}>
        {styledIcon} {children}
      </button>
    );
  }
});

export default IconButton;
