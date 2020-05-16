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
      className="col-9 col-md-4 mb-md-5"
      vertical
      place={place}
    />
  ));

  return (
    <section className={style.RecommendedPlaces}>
      <h2>Places others love</h2>
      <div className={cn(style.horizontalScroll, 'pb-3 pb-md-0')}>
        {placesMapped}
      </div>
    </section>
  );
};

export default RecommendedPlaces;
