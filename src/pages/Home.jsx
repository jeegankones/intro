import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

import Categories from '../components/Categories/Categories';
import RecommendedPlaces
  from '../components/RecommendedPlaces/RecommendedPlaces';

const Home = () => (
  <div className="container">
    <SearchBar />
    <RecommendedPlaces />
    <Categories />
  </div>
);

export default Home;
