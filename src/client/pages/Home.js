import React from 'react';
import styled from 'styled-components';

// import MedidationIcon from '@assets/meditation.svg';
// import SearchIcon from '@assets/investigate.svg';
// import ListIcon from '@assets/list.svg';
// import WarriorIcon from '@assets/warrior.svg';

export const Home = () => {
    return (
        <HomeContainer>
            <svg viewBox='0 0 400 400'>
                <defs>
                    <path id='MyPath' d='M 20 40 Q 260 240 400 500' />
                </defs>
                <use xlinkHref='#MyPath' fill='none' stroke='#e8a87c' />
                <text fontFamily='Courier New' fontSize='42.5'>
                    <textPath xlinkHref='#MyPath'>Ready. Set. Flow.</textPath>
                </text>
            </svg>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    width: 100vw;
    background: var(--green);
`;
