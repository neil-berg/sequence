/* eslint no-undef: off */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';

import './index.css';

export const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

// return (
//     <div>
//         <h1>Sequence</h1>
//         <p>Another paragrapjh</p>
//         <p>Another one</p>
//         <p>and again!</p>
//         <span>Seriusly is this it?@</span>
//         <Details text={'Neil Berg'} />
//         <Signup />
//         <Circle orange />
//         <Circle yellow />
//     </div>
// );

// const Circle = styled.div`
//     height: 200px;
//     width: 200px;
//     border-radius: 50%;
//     ${props =>
//         props.orange &&
//         css`
//             background: var(--orange);
//         `}
//     ${props =>
//         props.yellow &&
//         css`
//             background: var(--yellow);
//         `}
// `;
