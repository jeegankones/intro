import React from 'react';
import { Switch } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';
import Category from './pages/Category';
import Place from './pages/Place/Place';
import LayoutRoute from './components/LayoutRoute';
import SecuredRoute from './components/SecuredRoute';
import MainLayout from './layouts/MainLayout/MainLayout';
import ScrollToTop from './utils/ScrollToTop';
import PlaceLayout from './layouts/PlaceLayout/PlaceLayout';

const App = () => (
  <>
    <GlobalLoader />
    <ScrollToTop />
    <Switch>
      <LayoutRoute exact path="/" component={Explore} layout={MainLayout} />
      <SecuredRoute path="/profile" component={Profile} layout={MainLayout} />
      <LayoutRoute path="/category/:id" component={Category} layout={MainLayout} />
      <LayoutRoute path="/place/:id" component={Place} layout={PlaceLayout} />
      <LayoutRoute component={NotFound} layout={MainLayout} />
    </Switch>
  </>
);

export default App;
