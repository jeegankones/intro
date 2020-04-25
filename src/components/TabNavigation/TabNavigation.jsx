import React from 'react';
import { ArrowRightCircle, Home, User } from 'react-feather';
import { NavLink } from 'react-router-dom';

import style from './TabNavigation.module.css';

const TabNavigation = () => (
  <nav className={style.container}>
    <NavLink className={style.navItem} activeClassName={style.active} to="/home">
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
