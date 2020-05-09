import React from 'react';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './RecommendedPlace.module.scss';

const RecommendedPlace = ({
  name, rating, image, cashBack, className
}) => (
  <div className={cn(style.RecommendedPlace, className)}>
    <Link to="/">
      <div className={style.card}>
        <div className={style.image} style={{ backgroundImage: `url(${image})` }} />
        <div className={cn(style.body, 'p-3')}>
          <div className={cn(style.nameWrapper, 'row no-gutters')}>
            <div className={cn(style.name, 'col mr-auto')}>{name}</div>
            <div className={cn(style.rating, 'col-auto d-flex align-items-center')}>
              <Star />
              <span>{rating}</span>
            </div>
          </div>
          <div className="pt-1 font-weight-bold">
            $<span>{cashBack} cash per intro</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default RecommendedPlace;
