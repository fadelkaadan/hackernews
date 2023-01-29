import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  RESET_STATE,
  ActionTypes,
  IUser,
} from "./types";
import { IStory } from "../stories/types";
import { fetchUserInfo, fetchItem } from "../../api/hackernews";
import { AppDispatch } from "..";

export const fetchUser = (username: string) => async (dispatch: AppDispatch) => {
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

export const fetchUserStories = (submitted: number[], limit: number) => async (
  dispatch: AppDispatch
) => {
  dispatch(fetchStoriesPending());
  try {
    const fetchedSubmittedItems = submitted.map(async (item, index) => {
      if (index > 100) return;

      const submittedItem: any = await fetchItem(item);
      if (submittedItem.type === "story") return submittedItem;
    });

    const resolvedItems = await Promise.all(fetchedSubmittedItems);
    const stories = resolvedItems.filter((item) => item);
    dispatch(fetchStoriesSuccess(stories.slice(0, limit)));
  } catch (error) {
    dispatch(fetchStoriesError(error));
  }
};

const fetchStoriesPending = (): ActionTypes => ({
  type: FETCH_STORIES_PENDING,
});

const fetchStoriesSuccess = (data: IStory[]): ActionTypes => ({
  type: FETCH_STORIES_SUCCESS,
  data: data,
});

const fetchStoriesError = (error: any): ActionTypes => ({
  type: FETCH_STORIES_ERROR,
  error: error,
});

export const resetState = () => ({
  type: RESET_STATE,
});
