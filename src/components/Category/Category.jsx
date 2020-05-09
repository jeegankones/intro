import React from 'react';
import { Link } from 'react-router-dom';

import style from './Category.module.scss';

const Category = ({ name, imageUrl, className }) => (
  <div className={className}>
    <Link
      className={style.Category}
      style={{ backgroundImage: `url(${imageUrl})` }}
      to="/"
    >
      <div className={style.text}>{name}</div>
    </Link>
  </div>
);

export default Category;
