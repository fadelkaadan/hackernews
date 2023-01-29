import {
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  INCREMENT_START_AT,
  RESET_STATE,
  StoriesActionTypes,
  IStory,
} from "./types";
import { fetchStoryIds, fetchItem } from "../../api/hackernews";
import { AppDispatch } from "..";

export const fetchStories = (
  category: string,
  startAt: number,
  limit: number
) => async (dispatch: AppDispatch) => {
  dispatch(fetchStoriesPending());
  try {
    const storyIds = await fetchStoryIds(category);
    const stories = await storyIds
      .slice(startAt, startAt + limit)
      .map(async (id: number) => await fetchItem(id));
    dispatch(fetchStoriesSuccess(await Promise.all(stories)));
    dispatch(incrementStartAt());
  } catch (error) {
    dispatch(fetchStoriesError(error));
  }
};

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

const fetchStoriesPending = (): StoriesActionTypes => ({
  type: FETCH_STORIES_PENDING,
});

const fetchStoriesSuccess = (data: IStory[]): StoriesActionTypes => ({
  type: FETCH_STORIES_SUCCESS,
  data: data,
});

const fetchStoriesError = (error: any): StoriesActionTypes => ({
  type: FETCH_STORIES_ERROR,
  error: error,
});

const incrementStartAt = (): StoriesActionTypes => ({
  type: INCREMENT_START_AT,
});

export const resetState = (): StoriesActionTypes => ({
  type: RESET_STATE,
});
