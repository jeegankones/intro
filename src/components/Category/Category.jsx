import React from 'react';
import { Link } from 'react-router-dom';

import style from './Category.module.scss';

const Category = (props) => {
  const { id, name, imageUrl, className } = props;
  const url = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={className}>
      <Link
        className={style.Category}
        style={{ backgroundImage: `url(${imageUrl})` }}
        to={{
          pathname: `/category/${url}`,
          state: { category_id: id }
        }}
      >
        <div className={style.text}>{name}</div>
      </Link>
    </div>
  );
};

export default Category;
