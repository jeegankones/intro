import React from 'react';
import { Link } from 'react-router-dom';

import style from './Category.module.scss';

const Category = ({
  id, name, imageUrl, className
}) => (
  <div className={className}>
    <Link
      className={style.Category}
      style={{ backgroundImage: `url(${imageUrl})` }}
      to={{
        pathname: '/category',
        search: `?id=${id}`
      }}
    >
      <div className={style.text}>{name}</div>
    </Link>
  </div>
);

export default Category;
