import React, { Component } from 'react';
import { Modal } from 'app/UI';
import { Composition } from 'atomic-layout';
import UserCard from '../containers/UserCard';
import UserEdit from '../containers/UserEdit';
import UserDelete from '../containers/UserDelete';

class UserList extends Component {
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    const { users, editedUser, deletedUserId } = this.props || {};
    const { id } = editedUser || {};
    return (
      <Composition margin="auto 1em" gap="1em" templateCols="1fr" templateColsSm="1fr 1fr" templateColsMd="1fr 1fr 1fr">
        {users.length && users.map(user => (<UserCard key={user.id} user={user}></UserCard>))}
        <Modal active={id} title="Edit the user" background><UserEdit editUserId={id} /></Modal>
        <Modal active={deletedUserId} title="Do you want to delete the user?" background><UserDelete id={deletedUserId} /></Modal>
      </Composition>
    );
  }
}

export default UserList;