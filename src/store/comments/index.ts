import {
  CommentsState,
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from "./types";

const intialState: CommentsState = {
  list: [],
  pending: false,
  error: null,
};

export default (state = intialState, action: any): CommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.data],
        pending: false,
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
