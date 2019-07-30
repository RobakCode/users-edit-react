import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, editUser } from '../actions';
import UserEdit from '../components/UserEdit';

const mapStateToProp = (state, props) => {
  const {
    users: {
      editedUser
    } = {}
  } = state;

  return { editedUser, ...props }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, editUser }, dispatch);

export default connect(mapStateToProp, mapDispatchToProps)(UserEdit);