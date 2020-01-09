import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CTAButton } from '../button/CTAButton';
import axios from 'axios';

export const Header = () => {
    const handleClick = async () => {
        console.log('I was clicked');
        try {
            const res = await axios.get('http://localhost:3000/test/25');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <HeaderContainer>
            <h1>
                <Link to='/'>Sequence</Link>
            </h1>
            <button onClick={() => handleClick()}>Click me</button>
            <CTAButton text='Get Started' level='primary' />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, var(--sand), var(--green));
    padding: 1rem;
`;
