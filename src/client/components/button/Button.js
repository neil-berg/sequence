import React from 'react';
import styled, { css } from 'styled-components';

export const Button = ({ flavor, text, ...props }) => (
    <StyledButton {...props} flavor={flavor}>
        {text}
    </StyledButton>
);

const StyledButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    ${props =>
        props.flavor === 'outline' &&
        css`
            padding: 0.5rem 1.5rem;
            border-radius: 5px;
            transition: all 0.2s ease;
            background: ${props => props.background};
            color: ${props => props.color};
            border: 2px solid ${props => props.color};
            & :hover {
                background: ${props => props.color};
                color: ${props => props.background};
            }
        `}
    ${props =>
        props.flavor === 'text' &&
        css`
            border: 0;
            background: transparent;
            color: ${props => props.color};
        `}
`;
