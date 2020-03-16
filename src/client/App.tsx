/* eslint no-undef: off */
import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { AuthHeader, Footer, Header, MainNav } from './components';
import { Home, NotFound, Sequences } from './pages';
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
