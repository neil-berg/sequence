import React from 'react';
import styled from 'styled-components';

import MedidationIcon from '@assets/meditation.svg';
import SearchIcon from '@assets/investigate.svg';
import ListIcon from '@assets/list.svg';
import WarriorIcon from '@assets/warrior.svg';

export const Home = () => {
    return (
        <HomeContainer>
            <section className='intro'>
                <MedidationIcon width='200px' height='200px' />
                <p className='intro__text'>Ready. Set. Flow.</p>
            </section>
            <section className='features'>
                <ul className='features-list'>
                    <li className='features-list__item'>
                        <SearchIcon />
                        <span>Search for poses</span>
                    </li>
                    <li className='features-list__item'>
                        <ListIcon />
                        <span>Create new sequences</span>
                    </li>
                    <li className='features-list__item'>
                        <WarriorIcon />
                        <span>Get your flow on</span>
                    </li>
                </ul>
            </section>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    .intro__text {
        font-size: 2rem;
        padding-top: 1rem;
    }

    .features-list {
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: var(--yellow);
        padding: 1rem;
    }

    .features-list__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .features-list__item svg {
        width: 75px;
        height: 75px;
    }

    .features-list__item span {
        font-size: 1.25rem;
        padding-top: 1rem;
    }

    @media screen and (min-width: 600px) {
        .features-list {
            flex-direction: row;
        }
    }
`;
