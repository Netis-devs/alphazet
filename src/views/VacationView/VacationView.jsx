import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container';
import Footer from '@/components/Footer/Footer';
import VacationCard from '@/components/Vacation/Vacation';

import VacationSvg from '@/assets/icons/vacationSvg.svg';

import styles from '@/views/VacationView/VacationView.module.scss';

const data = [
  {
    id: 1,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 11,
        details_title: 'Требования',
        sub_details: [
          {
            id: 111,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 112,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 113,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 114,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 115,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 116,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 117,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 21,
        details_title: 'Требования',
        sub_details: [
          {
            id: 211,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 212,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 213,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 214,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 215,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 216,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 217,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 31,
        details_title: 'Требования',
        sub_details: [
          {
            id: 311,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 312,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 313,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 314,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 315,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 316,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 317,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 41,
        details_title: 'Требования',
        sub_details: [
          {
            id: 411,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 412,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 413,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 414,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 415,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 416,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 417,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 51,
        details_title: 'Требования',
        sub_details: [
          {
            id: 511,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 512,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 513,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 514,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 515,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 516,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 517,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 71,
        details_title: 'Требования',
        sub_details: [
          {
            id: 711,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 72,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 713,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 714,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 715,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 716,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 717,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Middle PHP-разработчик (Laravel)',
    office: 'Ташкент / Офис',
    Src: VacationSvg,
    details: [
      {
        id: 81,
        details_title: 'Требования',
        sub_details: [
          {
            id: 811,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 812,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 813,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 814,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 815,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 816,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 817,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 818,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 819,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 820,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 821,
            desc: 'опыт разработки не менее 2-х лет',
          },
          {
            id: 822,
            desc: 'опыт разработки не менее 2-х лет',
          },
        ],
      },
    ],
  },
];

const VacationView = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
    if (isOpen && index === activeIndex) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.vocation}>
          {data.map((item, index) => (
            <VacationCard
              key={item.id}
              isActive={activeIndex === index}
              isOpen={isOpen}
              onClick={() => handleClick(index)}
              data={item}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default VacationView;
