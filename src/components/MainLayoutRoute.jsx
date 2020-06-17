import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';

const MainLayoutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    )}
  />
);

export default MainLayoutRoute;
