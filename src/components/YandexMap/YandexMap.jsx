import {
  Placemark,
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
} from 'react-yandex-maps';

import styles from '@/components/YandexMap/YandexMap.module.scss';

const offsetCoordinates = [41.329065, 69.260933];

const YandexMap = () => {
  return (
    <div className={styles.box}>
      <div className={styles.bnma}>
        <YMaps>
          <Map
            className={styles.example}
            width={'100%'}
            height={'100%'}
            defaultState={{
              center: offsetCoordinates,
              zoom: 18,
            }}
          >
            <Placemark
              geometry={offsetCoordinates}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/assets/icons/alphazetLocation.svg',
                iconImageSize: [124, 38],
                iconImageOffset: [-80, -50],
              }}
            />
            <ZoomControl options={{ float: 'right' }} />
            <FullscreenControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
export default YandexMap;
