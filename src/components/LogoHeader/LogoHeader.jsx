import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './LogoHeader.module.scss';
import { useAuth0 } from '../../react-auth0-spa';

const LogoHeader = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <header className={cn(styles.container, 'container-fluid')}>
      <div className={cn(styles.content, 'row no-gutters align-items-center')}>
        <div className="col-auto mr-auto">
          <Link className={styles.logo} to="/">intro</Link>
        </div>
        <div className="col-auto d-none d-md-block">
          <nav className={styles.nav}>
            <NavLink to="/" exact activeClassName={styles.active} className="mx-2">Explore</NavLink>

            {!isAuthenticated && (
              <button type="button" className="btn btn-sm btn-primary mx-2" onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && (
              <>
                <NavLink to="/profile" activeClassName={styles.active} className="mx-2">Profile</NavLink>
                <button type="button" className="btn btn-sm btn-outline-secondary mx-2" onClick={handleLogout}>Log out</button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default LogoHeader;
