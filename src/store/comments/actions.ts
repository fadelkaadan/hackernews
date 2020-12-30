import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  CommentsActionTypes,
  IComment,
} from "./types";
import { fetchItem } from "../../api/hackernews";

export const fetchComments = (commentIds: number[]) => async (dispatch: any) => {
  dispatch(fetchCommentsPending());
  try {
    const comments = await commentIds.map(
      async (id: number) => await fetchItem(id)
    );
    dispatch(fetchCommentsSuccess(await Promise.all(comments)));
  } catch (error) {
    dispatch(fetchCommentsError(error));
  }
};

const fetchCommentsPending = (): CommentsActionTypes => ({
  type: FETCH_COMMENTS_PENDING,
});

const fetchCommentsSuccess = (data: IComment[]): CommentsActionTypes => ({
  type: FETCH_COMMENTS_SUCCESS,
  data: data,
});

const fetchCommentsError = (error: any): CommentsActionTypes => ({
  type: FETCH_COMMENTS_ERROR,
  error: error,
});
