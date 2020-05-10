import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Intros from './pages/Intros';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intros" component={Intros} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
