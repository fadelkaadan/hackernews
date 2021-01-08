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
  list: IStory[];
  startAt: number;
  pending: Boolean;
  error: Object | null;
}

export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_PENDING = "FETCH_STORIES_PENDING";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";
export const INCREMENT_START_AT = "INCREMENT_START_AT";
export const RESET_STATE = "RESET_STATE";

interface IFetchStoriesPendingAction {
  type: string;
}

interface IFetchStoriesSuccessAction {
  type: string;
  data: IStory[];
}

interface IFetchStoriesErrorAction {
  type: string;
  error: any;
}

interface IIncrementStartAtAction {
  type: string;
}

interface IResetStateAction {
  type: string;
}

export type StoriesActionTypes =
  | IFetchStoriesPendingAction
  | IFetchStoriesSuccessAction
  | IFetchStoriesErrorAction
  | IIncrementStartAtAction
  | IResetStateAction;
