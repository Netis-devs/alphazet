import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';

import styles from '@/components/Header/Header.module.scss';

const Header = (props) => {
  const { src, alt, children } = props;
  return (
    <div className={styles.header}>
      <Image src={src} alt={alt} fill></Image>

      <Navbar />
      {children}
    </div>
  );
};

export default Header;
