/* eslint no-undef: off */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Header, AuthHeader } from './components/header';
import { MainNav } from './components/nav/MainNav';
import { Footer } from './components/footer';
import { Home } from './pages/Home';
import { Sequences } from './pages/Sequences';
import { NotFound } from './pages/NotFound';

import { useAuthenticated } from './hooks/auth';

import './index.css';

export const App = () => {
  const isAuthenticated = useAuthenticated();

  if (!isAuthenticated) {
    console.log('UNAUTHED APP');
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }

  console.log('AUTHED!!!');
  return (
    <Router>
      <AuthHeader />
      <MainNav />
      <Switch>
        <Route path='/sequences'>
          <Sequences />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
