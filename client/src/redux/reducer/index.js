import { GET_USERS, GET_BY_NAME } from "../actions/index";

let initialState = {
  allUsers: [],    // Todos los usuarios obtenidos
  usersCopy: [],   // Copia de los usuarios, útil para filtrar o resetear
  posts: []        // No se está usando en el código actual, pero lo mantengo
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload, // Guardamos todos los usuarios obtenidos
        usersCopy: action.payload, // Guardamos una copia para utilizar en filtros
      };

    case GET_BY_NAME:
      return {
        ...state,
        allUsers: action.payload, // Aquí actualizamos solo los usuarios filtrados
      };

    default:
      return state;
  }
}

export default rootReducer;
