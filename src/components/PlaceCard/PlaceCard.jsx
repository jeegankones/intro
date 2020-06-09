import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';

import style from './PlaceCard.module.scss';

const PlaceCard = ({ place, className, vertical = false, tall = false }) => (
  <div className={cn(style.PlaceCard, tall && style.tall, className)}>
    <Link to={`/place/${place.place_id}`}>
      <div className="row no-gutters">
        <div className={vertical ? 'col-12' : 'col-5'}>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${place.image_url})` }}
          />
        </div>
        <div className={vertical ? 'col-12' : 'col-7'}>
          <div className={cn('row no-gutters align-items-center', vertical ? 'pt-1' : 'pl-2')}>
            <div className={cn('col-12', vertical ? 'pb-0' : 'pb-2')}>
              <div className={style.name}>{place.place_name}</div>
            </div>
            <div className="col mr-auto">
              <span className={cn(style.rewardAmount, 'font-weight-bold')}>
                ${place.reward_amount}
              </span> cash back
            </div>
            <div className="col-auto">
              <div className={cn(style.rating, 'd-flex align-items-center')}>
                <Star />
                <span className="text-secondary">{place.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default PlaceCard;
