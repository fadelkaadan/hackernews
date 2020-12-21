import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../../store/stories/actions";
import { RootState } from "../../store/rootReducer";
import Stories from "../../components/Stories";

export const TOP_STORIES = "topstories";
export const BEST_STORIES = "beststories";
export const NEW_STORIES = "newstories";

const StoriesContainer = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state: RootState) => state.stories.list);
  const isPending = useSelector((state: RootState) => state.stories.pending);
  const errorMessage = useSelector((state: RootState) => state.stories.error);

  useEffect(() => {
    dispatch(fetchStories(TOP_STORIES, 30));
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
