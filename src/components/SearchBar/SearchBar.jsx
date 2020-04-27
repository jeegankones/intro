import React from 'react';

import style from './SearchBar.module.css';

const SearchBar = () => (
  <div className={style.container}>
    <input type="text" placeholder="Search places or categories" />
  </div>
);

export default SearchBar;
