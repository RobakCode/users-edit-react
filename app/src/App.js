import React, { Fragment } from 'react';
import { Composition } from 'atomic-layout';
import styled from '@xstyled/styled-components';
import { Title } from 'app/UI';
import { UserList } from 'app/components/Users';

const areas = `
  header
  content
`;

const HeaderStyled = styled.div`
  background-color: primary;
  width: 100%;
  min-height: 40vh;
  padding: 4em;
  align-items: center;
  justify-items: center;
  display: flex;
`;

function App() {
  return (
    <Composition areas={areas} gap="3em">
      {({ Header, Content }) => (
        <Fragment>
          <Header>
            <HeaderStyled>
              <Title center>Edit users wit React app. <br />Your users are loading from your local Json server.<br /><a href="#">GitHub</a></Title>
            </HeaderStyled>
          </Header>
          <Content>
            <UserList />
          </Content>
        </Fragment>
      )}
    </Composition>
  );
}

export default App;
