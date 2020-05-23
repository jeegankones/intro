import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Star } from 'react-feather';
import axiosInstance from '../../axiosApi';

import sharedStyle from '../../scss/shared.module.scss';
import style from './Place.module.scss';

const Place = ({ match }) => {
  const { id } = match.params;
  const [placeData, setPlaceData] = useState({ locations: [] });

  useEffect(() => {
    axiosInstance.get(`/places/${id}`)
      .then((response) => {
        setPlaceData(response.data);
      });
  }, [id]);

  const locationCards = placeData.locations.map((location) => (
    <div className="col-7 py-2 col-md-3 text-muted" key={location.location_id}>
      <div className={cn(style.locationCard, 'p-3')}>
        <p>{location.address}</p>
        <p>{location.city}, {location.state} {location.zip_code}</p>
      </div>
    </div>
  ));

  return (
    <div className={style.place}>
      <div className="container-fluid px-0 pb-4">
        <div className="row no-gutters">
          <div className={cn(style.imageContainer, 'col-12')}>
            <img src={placeData.image_url} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <section>
          <div className="row mb-4">
            <div className="col col-md-auto">
              <h1 className="mb-0">{placeData.place_name}</h1>
            </div>
            <div className={cn(style.rating, 'col-auto')}>
              <Star />
              <span>{placeData.rating}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-muted">{placeData.description}</div>
            </div>
          </div>
        </section>
        <hr />

        <section>
          <h4>Available locations</h4>
          <div className={sharedStyle.horizontalScrollContainer}>
            {locationCards}
          </div>
        </section>
        <hr />

        <section>
          <h4>Questions?</h4>
          <div className="text-muted">
            Contact {placeData.place_name} at <a href="tel:6125555555">(612) 555-5555</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Place;
