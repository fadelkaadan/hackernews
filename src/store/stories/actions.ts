import {
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  INCREMENT_START_AT,
  StoriesActionTypes,
  IStory,
} from "./types";
import { fetchStoryIds, fetchItem } from "../../api/hackernews";

export const fetchStories = (
  category: string,
  startAt: number,
  limit: number
) => async (dispatch: any) => {
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
