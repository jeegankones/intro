import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosApi';
import PlaceCard from '../components/PlaceCard/PlaceCard';

const Category = ({ location }) => {
  const { category } = location.state;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/places/category/${category.category_id}`)
      .then((response) => {
        setPlaces(response.data);
      });
  }, [category]);

  const placesMap = places.map((place) => (
    <PlaceCard
      key={place.place_id}
      className="mb-4 col-md-6"
      place={place}
    />
  ));

  return (
    <>
      <h2>{category.category_name}</h2>
      <div className="row">
        { placesMap }
      </div>
    </>
  );
};


export default Category;
