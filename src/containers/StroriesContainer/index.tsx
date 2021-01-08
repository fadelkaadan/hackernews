import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories, resetState } from "../../store/stories/actions";
import { RootState } from "../../store/rootReducer";
import Stories from "../../components/Stories";
import { STORIES_LIMIT, TOP_STORIES } from "../../core/constants";

const StoriesContainer = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state: RootState) => state.stories.list);
  const isPending = useSelector((state: RootState) => state.stories.pending);
  const errorMessage = useSelector((state: RootState) => state.stories.error);

  useEffect((): any => {
    dispatch(fetchStories(TOP_STORIES, 0, STORIES_LIMIT));
    return dispatch(resetState);
  }, [dispatch]);

  return (
    <Stories
      stories={stories}
      isPending={isPending}
      errorMessage={errorMessage}
    />
  );
};

export default StoriesContainer;
