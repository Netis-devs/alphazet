import React from 'react';
import cn from 'classnames';

import styles from '@/components/Container/Container.module.scss';

const Container = (props) => {
  const { className } = props;
  return <div className={cn(styles.container, className)} {...props} />;
};

export default Container;
