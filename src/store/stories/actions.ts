import {
  FETCH_STORIES_PENDING,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  StoriesActionTypes,
  IStory,
} from "./types";
import { fetchStoryIds, fetchStory } from "../../api/hackernews";

export const fetchStories = (category: string, limit: number) => async (
  dispatch: any
) => {
  dispatch(fetchStoriesPending());
  try {
    const storyIds = await fetchStoryIds(category, limit);
    const stories = await storyIds.map(
      async (id: number) => await fetchStory(id)
    );
    dispatch(fetchStoriesSuccess(await Promise.all(stories)));
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
