import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, setDeleteUserId } from '../actions';
import UserCard from '../components/UserCard';

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, setDeleteUserId }, dispatch);

export default connect(null, mapDispatchToProps)(UserCard);