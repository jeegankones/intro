import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosApi';
import PlaceCard from '../PlaceCard/PlaceCard';

import sharedStyle from '../../scss/shared.module.scss';
import style from './CategoryPlaces.module.scss';

const CategoryPlaces = ({ category }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/places/category/${category.category_id}`)
      .then((response) => {
        setPlaces(response.data.places);
      });
  }, []);

  const placesMapped = places.map((place) => (
    <PlaceCard
      key={place.place_id}
      className={cn(style.placeCard, 'col-7 col-md-5 col-lg-3')}
      vertical
      place={place}
    />
  ));

  return places.length === 0 ? null : (
    <section>
      <div className="row align-items-center">
        <div className="col mr-auto">
          <h2>{category.category_name}</h2>
        </div>
        <Link to={`/category/${category.category_id}`}>
          <div className="col-auto d-flex align-items-center">
            See more <ChevronRight size={18} />
          </div>
        </Link>
      </div>
      <div className={sharedStyle.horizontalScrollContainer}>
        {placesMapped}
      </div>
      <hr />
    </section>
  );
};

export default CategoryPlaces;
