import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/Buttons/Button';
import NavbarLogo from '@/assets/icons/alphazet-logo.svg';
import Container from '@/components/Container/Container';

import styles from '@/components/Navbar/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  // window.onscroll = function (evt) {
  //   let windowTop = evt.target.documentElement.scrollTop;
  //   if (windowTop > 10) {
  //     navBackground.style.backgroundColor = '#fff';
  //     navBackground.style.boxShadow = '0px 5px 20px rgba(45, 45, 45, 0.1)';
  //   } else {
  //     navBackground.style.backgroundColor = 'transparent';
  //     navBackground.style.boxShadow = '0px 0px 0px transparent';
  //   }
  // };
  return (
    <div className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <Link href="/" className={styles.navbarLeft}>
            <NavbarLogo />
          </Link>
          <div className={styles.navbarCenter}>
            <ul className={styles.navbarList}>
              <li className={styles.navbarItem}>
                <Link
                  className={
                    router.pathname === '/projects'
                      ? styles.active
                      : styles.navbarLink
                  }
                  href="/projects"
                >
                  Проекты
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link
                  className={
                    router.pathname === '/about'
                      ? styles.active
                      : styles.navbarLink
                  }
                  href="/about"
                >
                  О нас
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link
                  className={
                    router.pathname === '/vakansiya'
                      ? styles.active
                      : styles.navbarLink
                  }
                  href="/vakansiya"
                >
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
