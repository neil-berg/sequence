/* global localStorage */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';

import Portal from '../portal/Portal';
import { AuthModal } from '../modal/AuthModal';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../user/user.redux';

export const AuthHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const showAuthModal = useSelector(state => state.modal.authModal.open);
    const { username } = useSelector(state => state.user);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('seq:token');
            await axios.post(
                '/api/v1/user/logout',
                {},
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            localStorage.removeItem('seq:token');
            dispatch(removeUser());
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <HeaderContainer>
            <div className='app-username'>
                <h1>
                    <Link className='app-name' to='/'>
                        Sequence
                    </Link>
                </h1>
                <h2 className='username'>Hi, {username}!</h2>
            </div>
            <Button
                text='Logout'
                flavor='outline'
                background='var(--green)'
                color='var(--white)'
                onClick={() => handleLogout()}
            />
            <Portal>
                <AuthModal showAuthModal={showAuthModal} />
            </Portal>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--green);
    padding: 1rem;

    .app-name {
        color: var(--beige);
        font-size: 1.75rem;
    }

    .username {
        color: var(--white);
        font-size: 1rem;
        font-weight: normal;
    }
`;
