import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Buttons/Button';
import NavbarLogo from '@/assets/icons/alphazet-logo.svg';
import Container from '@/components/Container/Container';

import styles from '@/components/Navbar/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <NavbarLogo />
          </div>
          <div className={styles.navbarCenter}>
            <ul className={styles.navbarList}>
              <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/home">
                  Проекты
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/about">
                  О нас
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/vakansiya">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navbarRight}>
            <Button as="button" variant="primary">
              Оставить заявку
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
