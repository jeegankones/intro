import React from 'react';
import cn from 'classnames';
import RecommendedPlace from '../RecommendedPlace/RecommendedPlace';

import style from './RecommendedPlaces.module.scss';

const RecommendedPlaces = () => {
  const recommendedPlaces = [
    {
      place_id: 1,
      place_name: 'Element Boxing',
      place_rating: '4.5',
      image_url: 'https://i.ibb.co/3ms9dSh/boxing.jpg',
      cash_back: 5
    },
    {
      place_id: 2,
      place_name: 'Orr Autosport',
      place_rating: '4.8',
      image_url: 'https://i.ibb.co/0FB9mpg/orr.jpg',
      cash_back: 5
    },
    {
      place_id: 3,
      place_name: 'CorePower Yoga',
      place_rating: '4.6',
      image_url: 'https://i.ibb.co/6vyWJnx/yoga.jpg',
      cash_back: 5
    },
    {
      place_id: 4,
      place_name: 'Juut Salon Spa',
      place_rating: '4.9',
      image_url: 'https://i.ibb.co/tQYNVNZ/juut.jpg',
      cash_back: 5
    },
    {
      place_id: 5,
      place_name: 'Sela Roofing',
      place_rating: '4.8',
      image_url: 'https://i.ibb.co/5YwZ2DT/home.jpg',
      cash_back: 5
    }
  ];

  const placesMapped = recommendedPlaces.map((place) => (
    <RecommendedPlace
      className="col-9 col-md-4 mb-md-5"
      name={place.place_name}
      rating={place.place_rating}
      image={place.image_url}
      cashBack={place.cash_back}
    />
  ));

  return (
    <section className={style.RecommendedPlaces}>
      <h2 className="mb-4 font-weight-bold">Places others love</h2>
      <div className={cn(style.horizontalScroll, 'pb-3 pb-md-0')}>
        {placesMapped}
      </div>
    </section>
  );
};

export default RecommendedPlaces;
