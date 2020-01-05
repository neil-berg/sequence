import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Sequence</h1>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    height: auto;
    background: linear-gradient(to right, var(--yellow), var(--orange));
`;
