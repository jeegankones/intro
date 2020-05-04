import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Category.module.scss';

const Category = ({ name, imageUrl, className }) => (
  <div className={className}>
    <Link
      className={cn(style.Category, 'mb-3 mb-sm-4')}
      style={{ backgroundImage: `url(${imageUrl})` }}
      to="/"
    >
      <h4 className={cn(style.text, 'mb-0')}>{name}</h4>
    </Link>
  </div>
);

export default Category;
