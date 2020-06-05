import React from 'react';
import { Search, User } from 'react-feather';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './TabNavigation.module.scss';

const TabNavigation = () => (
  <nav className={cn(style.container, 'p-2 px-4 container-fluid d-md-none')}>
    <div className="row">
      <NavLink className={cn(style.navItem, 'col')} activeClassName={style.active} exact to="/">
        <Search size={32} className={style.icon} />
        <div className={style.text}>Explore</div>
      </NavLink>
      <NavLink className={cn(style.navItem, 'col')} activeClassName={style.active} to="/profile">
        <User size={32} className={style.icon} />
        <div className={style.text}>Profile</div>
      </NavLink>

    </div>
  </nav>
);

export default TabNavigation;
