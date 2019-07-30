import React, { Fragment } from 'react';
import styled from '@xstyled/styled-components';
import { Composition } from 'atomic-layout';
import { Button, Text, Avatar } from 'app/UI';

const CompositionStyled = styled(Composition)`
  padding: box;
  box-shadow: primary;
`;

const areas = `
  header
  info
  action
`;


const UserCard = ({ user: { id, email, name: { first, last } = {}, avatar } = {}, getUser, setDeleteUserId }) => {
  return id && (
  <CompositionStyled
    areas={areas}
    gap="1em"
    alignItems="center"
    justifyItems="center"
  >
    {({ Header, Info, Action }) => (
      <Fragment>
        <Header>
          <Avatar><img src={avatar} alt="user avatar" /></Avatar>
        </Header>
        <Info justifyItemsMd="center">
          <Text center>{first} {last}</Text>
          <Text center>{email}</Text>
        </Info>
        <Action>
          <Button onClick={() => getUser(id)}>Edit</Button>
          <Button onClick={() => setDeleteUserId(id)} second>Delete</Button>
        </Action>
      </Fragment>
    )}
  </CompositionStyled>
)};

export default UserCard;