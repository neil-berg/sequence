import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Portal from '../portal/Portal';
import { AuthModal } from '../modal/AuthModal';
import { CTAButton } from '../button/CTAButton';
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
            <CTAButton
                text='Get Started'
                level='primary'
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
    background: linear-gradient(to right, var(--sand), var(--green));
    padding: 1rem;
`;
