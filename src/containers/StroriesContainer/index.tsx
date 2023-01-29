import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchStories, resetState } from "../../store/stories/actions";
import { RootState } from "../../store/rootReducer";
import Stories from "../../components/Stories";
import { STORIES_LIMIT, TOP_STORIES } from "../../core/constants";
import { useAppDispatch } from "../../core/hooks";

const StoriesContainer = () => {
  const dispatch = useAppDispatch();
  const stories = useSelector((state: RootState) => state.stories.list);
  const isPending = useSelector((state: RootState) => state.stories.pending);
  const errorMessage = useSelector((state: RootState) => state.stories.error);

  useEffect((): any => {
    dispatch(fetchStories(TOP_STORIES, 0, STORIES_LIMIT));
    return () => {
      dispatch(resetState());
    };
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