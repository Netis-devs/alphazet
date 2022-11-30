import React from 'react';
import styles from '@/components/Container/Container.module.scss';
import cn from 'classnames';

const Container = (props) => {
  const { className } = props;
  return <div className={cn(styles.container, className)} {...props} />;
};

export default Container;
