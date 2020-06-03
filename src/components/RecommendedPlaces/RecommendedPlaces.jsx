import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import axiosInstance from '../../axiosApi';
import PlaceCard from '../PlaceCard/PlaceCard';

import sharedStyle from '../../scss/shared.module.scss';
import style from './RecommendedPlaces.module.scss';

const RecommendedPlaces = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axiosInstance.get('/explore/recommendations')
      .then((response) => {
        setPlaces(response.data);
      });
  }, []);

  const placesMapped = places.map((place) => (
    <PlaceCard
      key={place.place_id}
      className={style.PlaceCard}
      vertical
      place={place}
    />
  ));

  return (
    <section className={style.RecommendedPlaces}>
      <h2>Places others love</h2>
      <div className={sharedStyle.horizontalScrollContainer}>
        {placesMapped}
      </div>
    </section>
  );
};

export default RecommendedPlaces;
