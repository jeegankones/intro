import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Category.module.scss';

const Category = ({ name, imageUrl, className }) => (
  <div className={className}>
    <Link
      className={cn(style.Category, 'mb-3 mb-md-4')}
      style={{ backgroundImage: `url(${imageUrl})` }}
      to="/"
    >
      <div className={style.text}>{name}</div>
    </Link>
  </div>
);

export default Category;
