import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryList from '../../components/CategoryList/CategoryList';
import RecommendedPlaces from '../../components/RecommendedPlaces/RecommendedPlaces';
import axiosInstance from '../../axiosApi';
import CategoryPlaces from '../../components/CategoryPlaces/CategoryPlaces';
import moneyIcon from './money-icon.svg';
import storeIcon from './store-icon.svg';
import phoneIcon from './phone-icon.svg';

import style from './Explore.module.scss';
import useIsMountedRef from '../../utils/useIsMountedRef';

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const isMountedRef = useIsMountedRef();
  const ref = React.createRef();

  const scrollToHiw = () => ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  useEffect(() => {
    axiosInstance.get('/explore/categories')
      .then((response) => {
        if (isMountedRef.current) {
          setCategories(response.data);
        }
      });
  }, [isMountedRef]);

  const categoryPlacesSections = categories.map((category) => (
    <CategoryPlaces category={category} key={category.category_id} />
  ));

  return (
    <>
      <section className={style.hero}>
        <div className={cn(style.container, 'container')}>
          <h1 className="text-primary">Discover local businesses.<br />Get cash
            back.
          </h1>
          <SearchBar />
        </div>
      </section>
      <RecommendedPlaces />
      <div className="container-fluid px-0">
        <section className={cn(style.howItWorksCta)}>
          <p className="mb-1">New here?</p>
          <h2 className="text-white pb-3">Find out more</h2>
          <Link to="/" className="btn btn-outline-white" onClick={scrollToHiw}>See how it works</Link>
        </section>
      </div>
      <div className="container-lg mb-2">
        <section>
          {categoryPlacesSections}
        </section>
      </div>
      <div className="container-fluid px-0">
        <section
          ref={ref}
          className={cn(style.howItWorks, 'd-flex flex-column align-items-center')}
        >
          <h2 className="text-white pb-4">How it works</h2>
          <ol className="d-flex flex-column flex-lg-row">
            <li>
              <span className={style.hiw1}>
                <img src={storeIcon} alt="Store icon" />
              </span>
              <div>Discover a local business</div>
            </li>
            <li>
              <span className={style.hiw2}>
                <img src={phoneIcon} alt="Phone icon" />
              </span>
              <div>Check in on Intro</div>
            </li>
            <li>
              <span className={style.hiw3}>
                <img src={moneyIcon} alt="Money icon" />
              </span>
              <div>Get cash back!</div>
            </li>
          </ol>
        </section>
      </div>
      <CategoryList categories={categories} />
    </>
  );
};

export default Explore;
