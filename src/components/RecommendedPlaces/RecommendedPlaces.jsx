import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import style from './RecommendedPlaces.module.scss';
import axiosInstance from '../../axiosApi';
import PlaceCard from '../PlaceCard/PlaceCard';

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
      className={cn(style.PlaceCard, 'col-7 py-2 col-md-3')}
      vertical
      place={place}
    />
  ));

  return (
    <section className={style.RecommendedPlaces}>
      <h2>Places others love</h2>
      <div className={cn(style.horizontalScroll)}>
        {placesMapped}
      </div>
    </section>
  );
};

export default RecommendedPlaces;
