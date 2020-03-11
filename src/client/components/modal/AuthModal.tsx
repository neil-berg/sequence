import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { useDispatch } from 'react-redux';

import { LoginForm } from '../user/LoginForm';
import { closeModal } from '../../actions';

export interface AuthModalProps {
  showAuthModal: boolean;
}

export const AuthModal = ({ showAuthModal }: AuthModalProps) => {
  const dispatch = useDispatch();

  const backdropTransition = useTransition(showAuthModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const cardTransition = useTransition(showAuthModal, null, {
    from: { opacity: 0, transform: `translateX(100px)` },
    enter: { opacity: 1, transform: `translateX(0)` },
    leave: { opacity: 0, transform: `translateX(-100px)` }
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
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                const target = e.target as HTMLDivElement;
                if (target.classList.contains('backdrop')) {
                  dispatch(closeModal('authModal'));
                }
              }}
            >
              {cardTransition.map(({ item, key, props: animation }) => {
                return (
                  item && (
                    <animated.div className='card' key={key} style={animation}>
                      <LoginForm />
                      <button
                        className='button-close'
                        onClick={() => dispatch(closeModal('authModal'))}
                      >
                        Close
                      </button>
                    </animated.div>
                  )
                );
              })}
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
    background-color: var(--sand);
    overflow: hidden;
    z-index: 3;
  }
  .card {
    border-radius: 20px;
    border: 1px var(--burntorange) solid;
    box-shadow: 0px 10px 20px rgba(223, 101, 67, 0.75);
    width: 320px;
    height: 425px;
    background: var(--white);
    position: relative;
  }
  .button-close {
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    border: 0;
    color: var(--green);
    background: var(--white);
  }
`;
