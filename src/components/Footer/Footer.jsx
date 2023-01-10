import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container/Container';

import styles from '@/components/Footer/Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div>
          <div className={styles.footerTop}>
            <div>
              <p className={styles.footerText}>
                Звоните или напишите для сотрудничество:
              </p>
              <div
                className={`${styles.footerLinks} ${styles.footerMarginBottom}`}
              >
                <a className={styles.footerLink} href="tel:=998712024202">
                  +998 71 202-42-02
                </a>
                <a className={styles.footerLink} href="#">
                  support@alphazet.uz
                </a>
              </div>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.footerText}>
                Следите за нами в наших социальных сетях:
              </p>
              <div
                className={`${styles.footerLinks} ${styles.footerMarginBottom}`}
              >
                <Link className={styles.footerLink} href="">
                  Telegram
                </Link>
                <Link className={styles.footerLink} href="">
                  Instagram
                </Link>
                <Link className={styles.footerLink} href="">
                  Facebook
                </Link>
                <Link className={styles.footerLink} href="">
                  YouTube
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>
              <p className={styles.footerText}>Адрес нашего офиса:</p>
              <h3 className={styles.footerLink}>
                г. Ташкент, Шайхантахурский р, у. Лабзак, рядом 22
              </h3>
            </div>
            <div className={styles.footerInfo}>
              <p className={styles.footerText}>Напишите для трудоустройство:</p>
              <div className={styles.footerLinks}>
                <a className={styles.footerLink} href="#">
                  recruiting@alphazet.uz
                </a>
                <a className={styles.footerLink} href="#">
                  @hr_alphazetuz
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footerTextBottom}>
          @ 2022 Alphazet Technologies. Все права защищены
        </p>
      </Container>
    </div>
  );
}

export default Footer;
