import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LogoHeader.module.css';

const LogoHeader = () => (
  <div className={styles.container}>
    <Link className={styles.logo} to="/">intro</Link>
  </div>
);

export default LogoHeader;
