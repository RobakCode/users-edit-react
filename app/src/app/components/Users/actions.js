import {
  getUsers,
  getEditedUser,
  saveEditedUser,
  deleteUserFromDB
} from 'app/API/api';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_EDIT_USER = 'DELETE_EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_DELETE_USER_ID = 'SET_DELETE_USER_ID';

export const loadUsers = () => {
  return dispatch => {
    getUsers.then(response => dispatch({ type: GET_USERS, data: response }));
  }
}

export const getUser = (id) => {
  return dispatch => {
    getEditedUser(id).then(response => dispatch({ type: GET_USER, data: response }));
  }
}

export const editUser = (user) => {
  return dispatch => {
    saveEditedUser(user)
      .then(response => dispatch({ type: EDIT_USER, data: response.data }))
      .then(() => dispatch({ type: DELETE_EDIT_USER }));
  }
}

export const setDeleteUserId = (id) => {
  return dispatch => {
    dispatch({ type: SET_DELETE_USER_ID, data: id});
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    deleteUserFromDB(id)
      .then(dispatch({ type: DELETE_USER, data: id }))
      .then(dispatch({ type: SET_DELETE_USER_ID, data: null }));
  }
}