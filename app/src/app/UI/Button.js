import React from 'react';
import styled from '@xstyled/styled-components';

const ButtonStyled = styled.button`
  background-color: primary;
  font-family: text;
  font-weight: title;
  font-size: button;
  text-transform: lowercase;
  border: none;
  border-radius: primary;
  color: white;
  padding: primary;
  margin: .5rem;
  outline: none;
  ${({ second }) => second && `
    background-color: rgba(1,1,1,.2);
    color: black;
  `}

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Button = ({ children, ...rest}) => (<ButtonStyled {...rest}>{ children }</ButtonStyled>);

export default Button;