import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';

import styles from '@/components/Header/Header.module.scss';

const Header = (props) => {
  const { src, alt, children, videoSrc } = props;
  return (
    <div className={styles.header}>
      {/* <video autoPlay fill>
        <source src={videoSrc} />
      </video> */}
      <Image src={src} alt={alt} fill></Image>

      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Header;
