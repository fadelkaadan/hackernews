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
}

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const RESET_STATE = "RESET_STATE";

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

interface IResetStateAction {
  type: string;
}

export type ActionTypes =
  | IFetchUserPendingAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction
  | IResetStateAction;
