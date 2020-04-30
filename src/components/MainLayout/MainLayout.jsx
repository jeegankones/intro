import React from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import LogoHeader from '../LogoHeader/LogoHeader';

import style from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={style.container}>
    <LogoHeader />
    <main className="container">{children}</main>
    <TabNavigation />
  </div>
);

export default MainLayout;
