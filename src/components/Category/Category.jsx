import React from 'react';
import { Link } from 'react-router-dom';

import style from './Category.module.scss';

const Category = (props) => {
  const { category, className } = props;

  return (
    <div className={className}>
      <Link
        className={style.Category}
        style={{ backgroundImage: `url(${category.image_url})` }}
        to={`/category/${category.category_id}`}
      >
        <div className={style.text}>{category.category_name}</div>
      </Link>
    </div>
  );
};

export default Category;
