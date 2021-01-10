import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  RESET_STATE,
  ActionTypes,
  IUser,
} from "./types";
import { fetchUserInfo } from "../../api/hackernews";
import { fetchUserStories } from "../stories/actions";

export const fetchUser = (username: string) => async (dispatch: any) => {
  dispatch(fetchUserPending());
  try {
    const user: IUser = await fetchUserInfo(username);
    dispatch(fetchUserSuccess(user));
    dispatch(fetchUserStories(user.submitted, 20));
  } catch (error) {
    dispatch(fetchUserError(error));
  }
};

const fetchUserPending = (): ActionTypes => ({
  type: FETCH_USER_PENDING,
});

const fetchUserSuccess = (data: IUser): ActionTypes => ({
  type: FETCH_USER_SUCCESS,
  data: data,
});

const fetchUserError = (error: any): ActionTypes => ({
  type: FETCH_USER_ERROR,
  error: error,
});

export const resetState = () => ({
  type: RESET_STATE,
});
