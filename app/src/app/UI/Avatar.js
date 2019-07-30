import React from 'react';
import styled from '@xstyled/styled-components';
import logo from 'logo.svg';

const AvatarStyled = styled.div`
  position: relative;
  width: 4em;
  height: 4em;
  border-radius: circle;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  .loading-image-mask {
    position: absolute;
    z-index: -1;
  }
`;

const Avatar = ({ children, ...rest}) => (
  <AvatarStyled {...rest}>
    <img src={logo} alt="loading mask" className="loading-image-mask" />
    { children }
  </AvatarStyled>
);

export default Avatar;