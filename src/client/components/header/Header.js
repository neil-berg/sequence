import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Portal from '../portal/Portal';
import { AuthModal } from '../modal/AuthModal';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '@components/modal/modal.redux';

export const Header = () => {
    const dispatch = useDispatch();
    const showAuthModal = useSelector(state => state.modal.authModal.open);
    return (
        <HeaderContainer>
            <h1>
                <Link to='/'>Sequence</Link>
            </h1>
            <h2>
                <Link to='/sequences'>To go /sequences</Link>
            </h2>
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
`;
