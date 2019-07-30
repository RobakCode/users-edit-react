import axios from 'axios';

export const getUsers = new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/users')
    .then(response => resolve(response.data))
    .catch(error => reject(error));
});

export const getEditedUser = (id) => new Promise((resolve, reject) => {
  axios.get(`http://localhost:3001/users?id=${id}`)
    .then(response => resolve(response.data))
    .catch(error => reject(error));
});

export const saveEditedUser = (user) => new Promise((resolve, reject) => {
  axios.put(`http://localhost:3001/users/${user.id}`, user)
    .then(response => resolve(response))
    .catch(error => reject(error));
});

export const deleteUserFromDB = (id) => new Promise((resolve, reject) => {
  axios.delete(`http://localhost:3001/users/${id}`)
    .then(response => resolve(response))
    .catch(error => reject(error));
});