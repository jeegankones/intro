import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/Home';
import Intros from './pages/Intros';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/intros">
            <Intros />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
