import React from 'react';
import styled from '@xstyled/styled-components';

const TextStyled = styled.p`
  font-family: text;
  font-weight: text;
  font-size: text;
  color: black;
  padding: text;
  margin: 0;
  ${({ center }) => center && 'text-align: center; '}
`;

const Text = ({ children, ...rest}) => (<TextStyled {...rest}>{ children }</TextStyled>);

export default Text;