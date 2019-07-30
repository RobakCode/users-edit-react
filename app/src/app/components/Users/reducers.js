import {
  GET_USERS,
  GET_USER,
  EDIT_USER,
  DELETE_EDIT_USER,
  DELETE_USER,
  SET_DELETE_USER_ID
} from './actions';

const INITAIL_STATE = { users: {}, editedUser: null, deletedUserId: null };

export default (state = INITAIL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, users: [ ...action.data ] };
    case GET_USER:
      return { ...state, editedUser: action.data[0] };
    case EDIT_USER:
      const newDataUser = state.users.map((user) => {
        return user.id === action.data.id ? action.data : user;
      });
      return { ...state, users: [ ...newDataUser ]};
    case DELETE_EDIT_USER:
      return { ...state, editedUser: null };
    case SET_DELETE_USER_ID:
      return { ...state, deletedUserId: action.data }
    case DELETE_USER:
      const usersWithoutDeletedUser = state.users.filter(user => user.id !== action.data);
      return { ...state, users: [ ...usersWithoutDeletedUser ]};
    default:
      return state;
  }
}