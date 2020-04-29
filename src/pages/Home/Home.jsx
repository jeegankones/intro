import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

import style from './Home.module.scss';

const Home = () => (
  <>
    <SearchBar />
    <div className={style.content}>Home page works!</div>
  </>
);

export default Home;
