import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Portal from '../portal/Portal';
import { AuthModal } from '../modal/AuthModal';
import { Button } from '../button/Button';
import { toggleModal } from '@components/modal/modal.redux';
import { StoreState } from '../../redux/store';

export const Header = () => {
    const dispatch = useDispatch();
    const showAuthModal = useSelector(
        (state: StoreState) => state.modal.authModal.open
    );
    return (
        <HeaderContainer>
            <h1>
                <Link className='app-name' to='/'>
                    Sequence
                </Link>
            </h1>
            <Button
                text='Login'
                flavor='outline'
                background='var(--green)'
                color='var(--white)'
                onClick={() => dispatch(toggleModal('authModal'))}
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
        color: var(--white);
    }
`;
