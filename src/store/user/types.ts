import { IStory, StoriesState } from "../stories/types";

export interface IUser {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}

export interface UserState {
  info: IUser | null;
  pending: Boolean;
  error: Object | null;
  stories: StoriesState;
}

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const RESET_STATE = "RESET_STATE";

export const FETCH_STORIES_SUCCESS = "FETCH_STORIES_SUCCESS";
export const FETCH_STORIES_PENDING = "FETCH_STORIES_PENDING";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";
export const INCREMENT_START_AT = "INCREMENT_START_AT";

interface IFetchUserPendingAction {
  type: string;
}

interface IFetchUserSuccessAction {
  type: string;
  data: IUser;
}

interface IFetchUserErrorAction {
  type: string;
  error: any;
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

export type ActionTypes =
  | IFetchUserPendingAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction
  | IResetStateAction
  | IFetchStoriesSuccessAction
  | IFetchStoriesErrorAction
  | IIncrementStartAtAction;
