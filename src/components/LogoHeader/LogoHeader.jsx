import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './LogoHeader.module.scss';

const LogoHeader = () => (
  <header className={cn(styles.container, 'container-fluid')}>
    <div className="row align-items-center">
      <div className="col-auto mr-auto">
        <Link className={styles.logo} to="/">intro</Link>
      </div>
      <div className="col-auto d-none d-md-block">
        <nav className={styles.nav}>
          <NavLink to="/" exact activeClassName={styles.active} className="mr-4">Explore</NavLink>
          <NavLink to="/intros" activeClassName={styles.active} className="mr-4">Intros</NavLink>
          <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
        </nav>
      </div>
    </div>
  </header>
);

export default LogoHeader;
