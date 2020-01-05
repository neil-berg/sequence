import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Sequence</h1>
            <button>Get Started</button>
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
