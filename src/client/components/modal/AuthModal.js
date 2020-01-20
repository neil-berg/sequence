import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { useDispatch } from 'react-redux';

import { setUser, setEmail } from '../user/user.redux';
import { LoginForm } from '../user/LoginForm';

export const AuthModal = ({ showAuthModal, setShowAuthModal }) => {
    const dispatch = useDispatch();

    const backdropTransition = useTransition(showAuthModal, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    const cardTransition = useTransition(showAuthModal, null, {
        from: { opacity: 0, transform: `translateY(-100px)` },
        enter: { opacity: 1, transform: `translateY(0)` },
        leave: { opacity: 0, transform: `translateY(-100px)` }
    });

    const handleClick = () => {
        const testUser = {
            _id: 100,
            name: 'Don Draper',
            username: 'Don',
            email: 'don@demo.com'
        };
        dispatch(setUser(testUser));
    };

    const handleOtherClick = () => {
        dispatch(setEmail('sample@demo.com'));
    };

    return (
        <Container>
            {backdropTransition.map(({ item, key, props: animation }) => {
                return (
                    item && (
                        <animated.div
                            className='backdrop'
                            key={key}
                            style={animation}
                            aria-modal='true'
                            role='dialog'
                            onClick={e => {
                                if (e.target.classList.contains('backdrop')) {
                                    setShowAuthModal(false);
                                }
                            }}
                        >
                            {cardTransition.map(
                                ({ item, key, props: animation }) => {
                                    return (
                                        item && (
                                            <animated.div
                                                className='card'
                                                key={key}
                                                style={animation}
                                            >
                                                <LoginForm />
                                            </animated.div>
                                        )
                                    );
                                }
                            )}
                        </animated.div>
                    )
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    .backdrop {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        overflow: hidden;
        z-index: 3;
    }
    .card {
        border-radius: 20px;
        border: 1px var(--burntorange) solid;
        box-shadow: 0px 10px 20px rgba(76, 54, 138, 0.35);
        padding: 1.2rem;
        width: 320px;
        min-height: 425px;
        background: var(--green);
    }
`;
