import React from 'react';
import TabNavigation from '../../components/TabNavigation/TabNavigation';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

import style from './PlaceLayout.module.scss';
import Footer from '../../components/Footer/Footer';

const PlaceLayout = ({ children }) => (
  <div className={style.container}>
    <LogoHeader />
    <main>{children}</main>
    <Footer />
    <TabNavigation />
  </div>
);

export default PlaceLayout;
