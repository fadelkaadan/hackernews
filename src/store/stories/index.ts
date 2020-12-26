import {
  StoriesState,
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  INCREMENT_START_AT,
} from "./types";
import { STORIES_LIMIT } from "../../core/constants";

const intialState: StoriesState = {
  list: [],
  startAt: 0,
  pending: false,
  error: null,
};

export default (state = intialState, action: any): StoriesState => {
  switch (action.type) {
    case FETCH_STORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.data],
        pending: false,
      };
    case FETCH_STORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case INCREMENT_START_AT:
      return {
        ...state,
        startAt: state.startAt + STORIES_LIMIT,
      };
    default:
      return state;
  }
};
