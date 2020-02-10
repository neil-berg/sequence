/* eslint no-undef: off */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { Sequences } from './pages/Sequences';
import { NotFound } from './pages/NotFound';

import { useAuth } from './hooks/auth';

import './index.css';

export const App = () => {
    const user = useAuth();

    if (!user) {
        return (
            <Router>
                <Header />
                <Switch>
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
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/sequences'>
                    <Sequences />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};
