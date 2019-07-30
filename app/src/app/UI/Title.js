import React from 'react';
import styled from '@xstyled/styled-components';

const TitleStyled = styled.h2`
  width: 100%;
  font-family: title;
  font-weight: title;
  font-size: title;
  color: black;
  padding: text;
  ${({ center }) => center && 'text-align: center;'}

  a {
    text-decoration: none;
  }
`;

const Title = ({ children, ...rest}) => (<TitleStyled {...rest}>{ children }</TitleStyled>);

export default Title;