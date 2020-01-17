import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

export const AuthModal = ({ showAuthModal, setShowAuthModal }) => {
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
                                                <button>Log in</button>
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
        position: relative;
        border-radius: 20px;
        border: 1px var(--burntorange) solid;
        box-shadow: 0px 10px 20px rgba(76, 54, 138, 0.35);
        padding: 1.2rem;
        width: 320px;
        height: '425px';
        background: var(--green);
        transition: height ease 0.2s;
    }
`;
