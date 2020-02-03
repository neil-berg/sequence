/* eslint no-undef: off */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';

import './index.css';

export const App = () => {
    // const [isLoggedIn, setisLoggedIn] = useState(true);

    // if (!isLoggedIn) {
    //     return (
    //         <Router>
    //             <Switch>
    //                 <Route path='/'>
    //                     <Home />
    //                 </Route>
    //                 <Route>
    //                     <Home />
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     );
    // }

    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};
