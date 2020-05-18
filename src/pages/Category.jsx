import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosApi';
import PlaceCard from '../components/PlaceCard/PlaceCard';

const Category = ({ match }) => {
  const { id } = match.params;
  const [places, setPlaces] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    axiosInstance.get(`/places/category/${id}`)
      .then((response) => {
        setPlaces(response.data.places);
        setCategoryName(response.data.category_name);
      });
  }, []);

  const placesMap = places.map((place) => (
    <PlaceCard
      key={place.place_id}
      className="mb-4 col-md-6"
      place={place}
    />
  ));

  return (
    <>
      <h2>{categoryName}</h2>
      <div className="row">
        { placesMap }
      </div>
    </>
  );
};


export default Category;
