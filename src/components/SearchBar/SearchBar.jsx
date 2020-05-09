import React from 'react';
import cn from 'classnames';

import style from './SearchBar.module.scss';

const SearchBar = () => (
  <section className={cn(style.SearchBar, 'pt-2 pt-md-5 mb-md-4 mx-auto')}>
    <input type="text" placeholder="Search places or categories" />
  </section>
);

export default SearchBar;
