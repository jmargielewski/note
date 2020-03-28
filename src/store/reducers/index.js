import { ADD_ITEM, REMOVE_ITEM_SUCCESS, AUTHENTICATE_SUCCESS, FETCH_ITEMS_SUCCESS } from 'actions';

const initState = {
  twitters: [],
  articles: [],
  notes: [],
  userID: '5e7922d7b3376104666a5190',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
