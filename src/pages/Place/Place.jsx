import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import axiosInstance from '../../axiosApi';

import style from './Place.module.scss';

const Place = ({ match }) => {
  const { id } = match.params;
  const [placeData, setPlaceData] = useState({});

  useEffect(() => {
    axiosInstance.get(`/places/${id}`)
      .then((response) => {
        setPlaceData(response.data);
      });
  }, []);

  return (
    <>
      <div className="container-fluid px-0 pb-4">
        <div className="row no-gutters">
          <div className={cn(style.imageContainer, 'col-12')}>
            <img src={placeData.image_url} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <section>
          <h1>{placeData.place_name}</h1>
          <p>{placeData.description}</p>
          <hr />
        </section>
        <section>
          <h2>Available locations</h2>
        </section>
      </div>
    </>
  );
};

export default Place;
