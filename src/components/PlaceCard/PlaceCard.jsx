import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';

import style from './PlaceCard.module.scss';

const PlaceCard = ({ place, className, vertical = false }) => (
  <div className={cn(style.PlaceCard, className)}>
    <Link to={`/place/${place.place_id}`}>
      <div className="row no-gutters">
        <div className={vertical ? 'col-12' : 'col-5'}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${place.image_url})` }}
          />
        </div>
        <div className={vertical ? 'col-12' : 'col-7'}>
          <div className={cn('row align-items-center', vertical ? 'pt-2' : 'pl-2')}>
            <div className={cn('col-12', vertical ? 'pb-0' : 'pb-2')}>
              <div className={style.name}>{place.place_name}</div>
            </div>
            <div className="col mr-auto">
              <span className={cn(style.rewardAmount, 'font-weight-bold')}>
                ${place.reward_amount}
              </span> per intro
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className={style.rating}>
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
