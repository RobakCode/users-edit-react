import React from 'react';
import styled from '@xstyled/styled-components';

const LabelStyled = styled.label`
  font-family: text;

  input {
    width: 100%;
    padding: input;
    margin-bottom: 1em;
    border: 1px solid gray;
    border-radius: primary;
    font-size: text;
    color: black;
    outline: none;
  }

  &:last-of-type {
    input {
      margin-bottom: 0;
    }
  }
`;

const Input = ({ placeholder, value, onChange, ...rest }) => <LabelStyled {...rest}><input type="text" placeholder={placeholder} value={value} onChange={onChange} /></LabelStyled>

export default Input;