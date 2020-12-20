export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface StoriesState {
  list: IStory[] | undefined;
  pending: Boolean;
  error: Object | null;
}

export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_PENDING = "FETCH_STORIES_PENDING";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";

interface fetchStoriesAction {
  type: string;
  data?: IStory[];
  error?: any;
}

export type StoriesActionTypes = fetchStoriesAction;
