import React from 'react';
import { Switch } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Intros from './pages/Intros';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';
import Category from './pages/Category';
import Place from './pages/Place/Place';
import MainLayoutRoute from './layouts/MainLayout/MainLayoutRoute';

const App = () => (
  <>
    <GlobalLoader />
    <Switch>
      <MainLayoutRoute exact path="/" component={Explore} />
      <MainLayoutRoute path="/intros" component={Intros} />
      <MainLayoutRoute path="/profile" component={Profile} />
      <MainLayoutRoute path="/category/:id" component={Category} />
      <MainLayoutRoute path="/place/:id" component={Place} />
      <MainLayoutRoute component={NotFound} />
    </Switch>
  </>
);

export default App;
