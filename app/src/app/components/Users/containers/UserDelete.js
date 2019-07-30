import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteUser, setDeleteUserId } from '../actions';
import UserDelete from '../components/UserDelete';

const mapDispatchToProps = dispatch => bindActionCreators({ deleteUser, setDeleteUserId }, dispatch);

export default connect(null, mapDispatchToProps)(UserDelete);