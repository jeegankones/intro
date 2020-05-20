import React from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import LogoHeader from '../LogoHeader/LogoHeader';

import style from './MainLayout.module.scss';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <div className={style.container}>
    <LogoHeader />
    <main>{children}</main>
    <Footer />
    <TabNavigation />
  </div>
);

export default MainLayout;
