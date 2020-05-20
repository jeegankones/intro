import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosApi';

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
      <div className="row">
        <div className="col-12">
          <img src={placeData.image_url} alt="" />

        </div>
      </div>
    </>
  );
};

export default Place;
