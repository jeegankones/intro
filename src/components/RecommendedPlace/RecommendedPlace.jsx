import React from 'react';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './RecommendedPlace.module.scss';

const RecommendedPlace = ({
  name, rating, image, className
}) => (
  <div className={cn(style.RecommendedPlace, className)}>
    <Link to="/">
      <div className={style.card}>
        <div className={style.image} style={{ backgroundImage: `url(${image})` }} />
        <div className="row p-2">
          <div className={cn(style.name, 'col-auto mr-auto')}>{name}</div>
          <div className={cn(style.rating, 'col-auto')}>
            <Star />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default RecommendedPlace;
