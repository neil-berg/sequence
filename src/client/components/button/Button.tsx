import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  flavor: string;
  background: string;
  color: string;
  text?: string;
  onClick?: () => void;
}

export const Button = ({ flavor, text, ...rest }: ButtonProps) => (
  <StyledButton {...rest} flavor={flavor}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: bold;
  ${props =>
    props.flavor === 'outline' &&
    css<ButtonProps>`
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
    css<ButtonProps>`
      border: 0;
      background: transparent;
      color: ${props => props.color};
    `}
`;
