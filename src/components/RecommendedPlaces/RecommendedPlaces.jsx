import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import axiosInstance from '../../axiosApi';
import PlaceCard from '../PlaceCard/PlaceCard';

import sharedStyle from '../../scss/shared.module.scss';
import style from './RecommendedPlaces.module.scss';
import useIsMountedRef from '../../utils/useIsMountedRef';

const RecommendedPlaces = () => {
  const [places, setPlaces] = useState([]);
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    axiosInstance.get('/explore/recommendations')
      .then((response) => {
        if (isMountedRef.current) {
          setPlaces(response.data);
        }
      });
  }, [isMountedRef]);

  const placesMapped = places.map((place) => (
    <PlaceCard
      key={place.place_id}
      className={cn(style.placeCard, 'col-10 col-sm-5 col-lg-3')}
      tall
      vertical
      place={place}
    />
  ));

  return (
    <div className="container-lg">
      <section>
        <h2>Places others love</h2>
        <div className={sharedStyle.horizontalScrollContainer}>
          {placesMapped}
        </div>
      </section>
    </div>
  );
};

export default RecommendedPlaces;
