import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryList from '../../components/CategoryList/CategoryList';
import RecommendedPlaces
  from '../../components/RecommendedPlaces/RecommendedPlaces';

import style from './Explore.module.scss';
import axiosInstance from '../../axiosApi';
import CategoryPlaces from '../../components/CategoryPlaces/CategoryPlaces';

const Explore = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance.get('/explore/categories')
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  const categoryPlacesSections = categories.map((category) => (
    <CategoryPlaces category={category} key={category.category_id} />
  ));

  return (
    <>
      <section className={style.hero}>
        <div className={cn(style.container, 'container')}>
          <h1 className="text-primary mb-4">Discover local businesses.<br />Get cash back.</h1>
          <SearchBar />
        </div>
      </section>
      <div className="container-lg">
        <RecommendedPlaces />
        {categoryPlacesSections}
        <CategoryList categories={categories} />
      </div>
    </>
  );
};

export default Explore;
