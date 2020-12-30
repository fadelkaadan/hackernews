export interface IComment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

export interface CommentsState {
  list: IComment[];
  pending: Boolean;
  error: Object | null;
}

export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_PENDING = "FETCH_COMMENTS_PENDING";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

interface IFetchCommentsPendingAction {
  type: string;
}

interface IFetchCommentsSuccessAction {
  type: string;
  data: IComment[];
}

interface IFetchCommentsErrorAction {
  type: string;
  error: any;
}

export type CommentsActionTypes =
  | IFetchCommentsPendingAction
  | IFetchCommentsSuccessAction
  | IFetchCommentsErrorAction;
