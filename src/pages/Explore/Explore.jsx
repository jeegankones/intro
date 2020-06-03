import React from 'react';
import cn from 'classnames';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Categories/Categories';
import RecommendedPlaces
  from '../../components/RecommendedPlaces/RecommendedPlaces';

import style from './Explore.module.scss';

const Explore = () => (
  <>
    <section className={cn(style.hero)}>
      <div className={cn(style.container, 'container')}>
        <h1 className="text-primary mb-4">Discover local businesses.<br />Get cash back.</h1>
        <SearchBar />
      </div>
    </section>
    <div className="container">
      <RecommendedPlaces />
      <Categories />
    </div>
  </>
);

export default Explore;
