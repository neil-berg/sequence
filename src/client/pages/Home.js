import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import MedidationIcon from '@assets/meditation.svg';
import SearchIcon from '@assets/investigate.svg';
import ListIcon from '@assets/list.svg';
import WarriorIcon from '@assets/warrior.svg';

export const Home = () => {
    const [data, setData] = useState(null);

    const handleSignup = async () => {
        try {
            const res = await axios.post('/api/v1/user/signup', {
                name: 'Sally Draper',
                username: 'Sally',
                email: 'sally@demo.com',
                password: 'red1234!'
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <HomeContainer>
            <button onClick={() => handleSignup()}>Signup Sally</button>
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

    .intro__icon {
        margin: 2rem 0 1rem 0;
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
        padding: 2rem 0;
    }

    .features-list__item svg {
        width: 100px;
        height: 100px;
    }

    .features-list__item span {
        font-size: 1.25rem;
        padding-top: 1rem;
    }

    .quotes {
        min-height: 300px;
        background: var(--orange);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
    }

    .quotes p {
        color: var(--beige);
    }

    .quotes p:first-child {
        font-size: 1.25rem;
        padding-bottom: 1.25rem;
        text-align: center;
    }

    @media screen and (min-width: 600px) {
        .features-list {
            flex-direction: row;
        }
    }
`;
