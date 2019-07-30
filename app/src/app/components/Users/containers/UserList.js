import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUsers } from '../actions';
import UserList from '../components/UserList';

const mapStateToProps = (state, props) => {
  const {
    users: {
      users,
      editedUser,
      deletedUserId
    } = {}
  } = state;

  return { users, editedUser, deletedUserId, ...props }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loadUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);