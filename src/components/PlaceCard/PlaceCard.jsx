import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';

import style from './PlaceCard.module.scss';

const PlaceCard = ({ place, className, vertical = false }) => (
  <div className={cn(style.PlaceCard, className)}>
    <Link to="/">
      <div className={style.card}>
        <div className="row no-gutters">
          <div
            className={cn(style.image, vertical ? [style.vertical, 'col-12 -vertical'] : 'col-4')}
            style={{ backgroundImage: `url(${place.image_url})` }}
          />
          <div className={cn('p-3', vertical ? 'col-12' : 'col-8')}>
            <div className="row no-gutters">
              <div className={cn(style.name, 'col')}>{place.place_name}</div>
            </div>
            <div className="pt-2 row no-gutters d-flex align-items-center">
              <div className="col mr-auto font-weight-bold">
                <span className={style.reward}>${place.reward_amount}</span> cash per intro
              </div>
              <div className={cn(style.rating, 'col-auto')}>
                <Star />
                <span>{place.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default PlaceCard;
