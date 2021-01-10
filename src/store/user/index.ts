import {
  UserState,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  INCREMENT_START_AT,
  RESET_STATE,
} from "./types";
import { STORIES_LIMIT } from "../../core/constants";

const intialState: UserState = {
  info: null,
  pending: false,
  error: null,

  stories: {
    list: [],
    startAt: 0,
    pending: false,
    error: null,
  },
};

export default (state = intialState, action: any): UserState => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        info: action.data,
        pending: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_STORIES_PENDING:
      return {
        ...state,
        stories: {
          ...state.stories,
          pending: true,
        },
      };
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: {
          ...state.stories,
          list: [...state.stories.list, ...action.data],
        },
      };
    case FETCH_STORIES_ERROR:
      return {
        ...state,
        stories: { ...state.stories, pending: false, error: action.error },
      };
    case INCREMENT_START_AT:
      return {
        ...state,
        stories: {
          ...state.stories,
          startAt: state.stories.startAt + STORIES_LIMIT,
        },
      };
    case RESET_STATE:
      return {
        ...state,
        ...intialState,
      };
    default:
      return state;
  }
};
