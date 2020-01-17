import React from 'react';
import styled, { css } from 'styled-components';

export const CTAButton = ({ text, level, ...props }) => (
    <Button {...props} level={level}>
        {text}
    </Button>
);

const Button = styled.button`
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    & :hover {
        box-shadow: 0px 8px 12px red;
    }
    ${props =>
        props.level === 'primary' &&
        css`
            border-color: var(--beige);
            background: var(--beige);
            box-shadow: 0px 5px 10px red;
        `}
    ${props =>
        props.level === 'secondary' &&
        css`
            color: 'green';
        `}
`;
