import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CTAButton } from '../button/CTAButton';

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>
                <Link to='/'>Sequence</Link>
            </h1>
            <CTAButton text='Get Started' level='primary' />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, var(--yellow), var(--orange));
    padding: 1rem;
`;
