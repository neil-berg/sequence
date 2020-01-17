import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Portal from '../portal/Portal';
import { AuthModal } from '../modal/AuthModal';
import { CTAButton } from '../button/CTAButton';

export const Header = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    return (
        <HeaderContainer>
            <h1>
                <Link to='/'>Sequence</Link>
            </h1>
            <CTAButton
                text='Get Started'
                level='primary'
                onClick={() => setShowAuthModal(!showAuthModal)}
            />
            <Portal>
                <AuthModal
                    showAuthModal={showAuthModal}
                    setShowAuthModal={setShowAuthModal}
                />
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
