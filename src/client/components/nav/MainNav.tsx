import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ListIcon from '@assets/list.svg';
import SearchIcon from '@assets/search.svg';
import CircleIcon from '@assets/roundabout.svg';
import UserIcon from '@assets/user.svg';

export const MainNav = () => {
    return (
        <NavContainer>
            <li className='list__item'>
                <Link className='list__item-link' to='/sequence/create'>
                    <ListIcon className='list__item-icon' />
                    <span className='list__item-text'>Create</span>
                </Link>
            </li>
            <li className='list__item'>
                <Link className='list__item-link' to='/sequence/search'>
                    <SearchIcon className='list__item-icon' />
                    <span className='list__item-text'>Search</span>
                </Link>
            </li>
            <li className='list__item'>
                <Link className='list__item-link' to='/sequence/mine'>
                    <CircleIcon className='list__item-icon' />
                    <span className='list__item-text'>Flows</span>
                </Link>
            </li>
            <li className='list__item'>
                <Link className='list__item-link' to='/profile'>
                    <UserIcon className='list__item-icon' />
                    <span className='list__item-text'>Profile</span>
                </Link>
            </li>
        </NavContainer>
    );
};

const NavContainer = styled.ul`
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--green);
    padding: 0.5rem 1rem;

    .list__item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    .list__item-icon {
        height: 30px;
        width: 30px;
        fill: var(--white);
    }

    .list__item-text {
        padding-top: 0.5rem;
        color: var(--white);
    }
`;
