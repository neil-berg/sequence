/* eslint no-undef: off */

import React from 'react';
import styled, { css } from 'styled-components';

import { Details } from './Details';
import { Signup } from '@components/User/Signup';

import '../index.css';

export const App = () => {
    // useEffect(() => {
    //     const testFetch = async () => {
    //         const data = await axios.get("http://localhost:3000/test/12");
    //         console.log(data);
    //     };
    //     testFetch();
    // }, []);

    return (
        <div>
            <h1>Sequence</h1>
            <p>Another paragrapjh</p>
            <p>Another one</p>
            <p>and again!</p>
            <span>Seriusly is this it?@</span>
            <Details text={'Neil Berg'} />
            <Signup />
            <Circle orange />
            <Circle yellow />
        </div>
    );
};

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    ${props =>
        props.orange &&
        css`
            background: var(--orange);
        `}
    ${props =>
        props.yellow &&
        css`
            background: var(--yellow);
        `}
`;
