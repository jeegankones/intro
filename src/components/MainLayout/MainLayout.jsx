import React from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import LogoHeader from '../LogoHeader/LogoHeader';

import style from './MainLayout.module.css';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <LogoHeader />
      <main className={style.container}>{children}</main>
      <TabNavigation />
    </>
  );
};

export default MainLayout;
