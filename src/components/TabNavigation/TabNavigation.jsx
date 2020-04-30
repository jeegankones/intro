import React from 'react';
import { ArrowRightCircle, Home, User } from 'react-feather';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './TabNavigation.module.scss';

const TabNavigation = () => (
  <nav className={cn(style.container, 'd-sm-none')}>
    <NavLink className={style.navItem} activeClassName={style.active} exact to="/">
      <Home size={32} className={style.icon} />
      <div className={style.text}>Home</div>
    </NavLink>
    <NavLink className={style.navItem} activeClassName={style.active} to="/intros">
      <ArrowRightCircle size={32} className={style.icon} />
      <div className={style.text}>Intros</div>
    </NavLink>
    <NavLink className={style.navItem} activeClassName={style.active} to="/profile">
      <User size={32} className={style.icon} />
      <div className={style.text}>Profile</div>
    </NavLink>
  </nav>
);

export default TabNavigation;
