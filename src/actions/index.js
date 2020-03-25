import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const removeItem = (itemType, id) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTHENTICATE_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(payload => dispatch({ type: AUTHENTICATE_SUCCESS, payload }))
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTHENTICATE_FAILURE });
    });
};

export const register = (username, password) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/register', {
      username,
      password,
    })
    .then(payload => dispatch({ type: REGISTER_SUCCESS, payload }))
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({ type: FETCH_ITEMS_REQUEST });

  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: { data, itemType } });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ITEMS_FAILURE });
    });
};
