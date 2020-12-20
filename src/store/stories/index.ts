import {
  StoriesState,
  StoriesActionTypes,
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
} from "./types";

const intialState: StoriesState = {
  list: [],
  pending: false,
  error: null,
};

export default (
  state = intialState,
  action: StoriesActionTypes
): StoriesState => {
  switch (action.type) {
    case FETCH_STORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        list: action.data,
        pending: false,
      };
    case FETCH_STORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};
