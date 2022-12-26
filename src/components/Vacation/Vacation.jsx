import React, { useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';

import styles from '@/components/Vacation/Vacation.module.scss';

const SubContent = ({ data }) => {
  const { details_title, sub_details } = data;
  return (
    <div className={styles.contentInner}>
      <h3>{details_title}</h3>
      <ul>
        {sub_details.map((text) => (
          <li className={styles.contentItem} key={text.id}>
            {text.desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Vacation = ({ data, isActive, onClick, isOpen }) => {
  const { title, Src, office, details } = data;
  const contentRef = useRef(null);

  const height = useMemo(() => {
    return isActive && isOpen ? contentRef.current?.offsetHeight : 0;
  }, [isOpen, isActive]);

  return (
    <div className={styles.vocation}>
      <div className={styles.vocationInner} onClick={onClick}>
        <h3 className={styles.vacationText}>{title}</h3>
        <p className={styles.vacationSecondText}>{office}</p>
        <Src
          className={cn({
            [styles.vacationImg]: true,
            [styles.active]: Boolean(height),
          })}
        />
      </div>
      <div style={{ height }} className={styles.content}>
        <div className={styles.contentInnerHeight} ref={contentRef}>
          {details.map((item) => (
            <SubContent key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacation;
