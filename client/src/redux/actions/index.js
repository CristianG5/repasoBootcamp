import axios from 'axios';

export const GET_BY_NAME = "GET_BY_NAME";
export const GET_USERS = 'GET_USERS';

// Acción para obtener todos los usuarios
export function getUsers() {
  return async function(dispatch) {
    const response = await axios('https://jsonplaceholder.typicode.com/users');

    return dispatch({
      type: GET_USERS,
      payload: response.data
    });
  };
}

// Acción para obtener usuarios por nombre
export function getByName(name) {
  return async function(dispatch) {
    const response = await axios(`http://localhost:3001/users/?name=${name}`);

    return dispatch({
      type: GET_BY_NAME,
      payload: response.data
    });
  };
}
