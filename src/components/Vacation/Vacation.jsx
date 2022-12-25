import React, { useState, useRef, useEffect } from 'react';
import styles from '@/components/Vacation/Vacation.module.scss';

const SubContent = React.forwardRef(({ data }, ref) => {
  const { details_title, sub_details } = data;
  return (
    <div ref={ref} className={styles.contentInner}>
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
});

const Vacation = ({ data }) => {
  const { title, Src, office, details } = data;
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(() => (isOpen ? contentRef.current.offsetHeight : 0));
    }
  }, [height, isOpen]);
  const handleClick = () => {
    setIsOpen((p) => !p);
  };
  return (
    <div onClick={handleClick} className={styles.vocation}>
      <div className={styles.vocationInner}>
        <h3 className={styles.vacationText}>{title}</h3>
        <p className={styles.vacationSecondText}>{office}</p>
        <Src className={isOpen ? styles.vacationRotate : styles.vacationImg} />
      </div>
      <div style={{ height }} className={styles.content}>
        {details.map((item) => (
          <SubContent key={item.id} data={item} ref={contentRef} />
        ))}
      </div>
    </div>
  );
};

export default Vacation;
