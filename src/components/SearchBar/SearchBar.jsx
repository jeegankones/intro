import React from 'react';
import cn from 'classnames';

import style from './SearchBar.module.scss';

const SearchBar = () => (
  <div className={cn(style.SearchBar, 'mx-auto')}>
    <input type="text" placeholder="Search places or categories" />
  </div>
);

export default SearchBar;
