import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home';
import Intros from './pages/Intros';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import GlobalLoader from './components/GlobalLoader/GlobalLoader';
import Category from './pages/Category';
import Place from './pages/Place/Place';

const App = () => (
  <>
    <GlobalLoader />
    <MainLayout>
      <Switch>
        <Route exact path="/" render={() => (<Home />)} />
        <Route path="/intros" component={Intros} />
        <Route path="/profile" component={Profile} />
        <Route path="/category/:id" render={(props) => (<Category {...props} />)} />
        <Route path="/place/:id" render={(props) => (<Place {...props} />)} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </>
);

export default App;
