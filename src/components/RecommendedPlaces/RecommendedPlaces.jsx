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
