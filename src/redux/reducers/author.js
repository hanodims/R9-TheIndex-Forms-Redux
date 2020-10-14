import {
  SET_AUTHOR_DETAIL,
  SET_AUTHOR_LOADING,
  ADD_BOOK,
} from "../actions/actionTypes";

const initialState = {
  author: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false,
      };

    case SET_AUTHOR_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ADD_BOOK:
      return {
        ...state,
        book: action.payload,
        authors:action.author,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
