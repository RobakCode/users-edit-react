import React, { Component } from 'react';
import { Input, Button } from 'app/UI';

class UserEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailUser: ''
    }
  }

  componentDidMount() {
    const { getUser, editUserId } = this.props;
    if (editUserId) { getUser(editUserId); }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props && nextProps.editedUser) {
      const { editedUser: { email, name: { last, first } = {} } = {} } = nextProps;
      this.setState({ firstName: first, lastName: last, emailUser: email }, this.forceUpdate());
    }
    return false;
  }

  render() {
    const { editUser, editedUser } = this.props;
    const { firstName, lastName, emailUser } = this.state;

    const { name: { title } = {} } = editedUser || {};

    const newEditedUser = {
      ...editedUser || null,
      email: emailUser,
      name: {
        title,
        first: firstName,
        last: lastName
      }
    }

    return (
      <form>
        <Input placeholder="First name" value={firstName} onChange={(value) => this.setState({ firstName: value.target.value }, this.forceUpdate())} />
        <Input placeholder="Last name" value={lastName} onChange={(value) => this.setState({ lastName: value.target.value }, this.forceUpdate())} />
        <Input placeholder="Email" value={emailUser} onChange={(value) => this.setState({ emailUser: value.target.value }, this.forceUpdate())} />
        <Button onClick={(e) => { e.preventDefault(); editUser(newEditedUser)}}>Save</Button>
      </form>
    )
  }
};

export default UserEdit;