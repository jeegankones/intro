import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

import Categories from '../components/Categories/Categories';
import RecommendedPlaces
  from '../components/RecommendedPlaces/RecommendedPlaces';

const Home = () => (
  <>
    <SearchBar />
    <RecommendedPlaces />
    <Categories />
  </>
);

export default Home;
