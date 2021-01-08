import {
  UserState,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  RESET_STATE,
} from "./types";

const intialState: UserState = {
  info: null,
  pending: false,
  error: null,
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
    case RESET_STATE:
      return {
        ...state,
        ...intialState,
      };
    default:
      return state;
  }
};
