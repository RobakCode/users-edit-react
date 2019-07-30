import React from 'react';
import styled from '@xstyled/styled-components';
import { motion } from "framer-motion"

const ModalStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;

    &-title {
      font-size: title;
      font-family: title;
      font-weight: title;
      color: black;
    }

    &-close {
      cursor: pointer;
    }
  }

  .content {
    position: fixed;
    max-width: 560px;
    width: calc(100% - 4em);
    background-color: white;
    border-radius: primary;
    box-shadow: primary;
    padding: content;
    margin: 2em;
    z-index: 2;
  }

  .mask {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 0;
    background-color: rgba(1,1,1,.4);
  }
`;

const animatedVariants = {
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      delay: .3
    }
  },
  close: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      delay: .3
    }
  }
}

const Modal = ({ children, background, active, title, ...rest }) =>
  <motion.div initial={false} animate={active ? "open" : "close"} transition={{ duration: 4 }} variants={animatedVariants}>
  <ModalStyled {...rest}>
  <div className="content">
    <div className="header">
      <div className="header-title">{title}</div>
    </div>
    <div>
      {children}
    </div>
  </div>
  { background && (<div className="mask"></div>)}
  </ModalStyled>
  </motion.div>;

export default Modal;