import React from 'react';
import { Switch } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';
import Category from './pages/Category';
import Place from './pages/Place/Place';
import MainLayoutRoute from './components/MainLayoutRoute';
import SecuredRoute from './components/SecuredRoute';
import MainLayout from './layouts/MainLayout/MainLayout';
import ScrollToTop from './utils/ScrollToTop';

const App = () => (
  <>
    <GlobalLoader />
    <ScrollToTop />
    <Switch>
      <MainLayoutRoute exact path="/" component={Explore} />
      <SecuredRoute path="/profile" component={Profile} layout={MainLayout} />
      <MainLayoutRoute path="/category/:id" component={Category} />
      <MainLayoutRoute path="/place/:id" component={Place} />
      <MainLayoutRoute component={NotFound} />
    </Switch>
  </>
);

export default App;
