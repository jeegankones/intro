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
      <div className="row">
        <div className="col-12">
          <div className={style.image} style={{ backgroundImage: `url(${image})` }} />
        </div>
        <div className="col-auto mr-auto">
          <div className={style.name}>{name}</div>
        </div>
        <div className="col-auto">
          <div className={style.rating}>
            <Star />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default RecommendedPlace;
