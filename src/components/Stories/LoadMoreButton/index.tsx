import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchStories } from "../../../store/stories/actions";
import { RootState } from "../../../store/rootReducer";
import { gradientColors } from "../../../theme/animations";
import Button from "../../Button";
import LoadingIndicator from "../../LoadingIndicator";
import { STORIES_LIMIT, TOP_STORIES } from "../../../core/constants";

const Wrapper = styled(Button)`
  width: 15rem;
  height: 3.5rem;
  margin-bottom: 2.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${(props) => props.theme.main.borderRadius};
  color: #ffffff;
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${gradientColors} 8s ease infinite;
`;

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const startAt = useSelector((state: RootState) => state.stories.startAt);
  const isPending = useSelector((state: RootState) => state.stories.pending);

  const loadMore = () => {
    dispatch(fetchStories(TOP_STORIES, startAt, STORIES_LIMIT));
  };

  return isPending ? (
    <LoadingIndicator />
  ) : (
    <Wrapper onClick={loadMore}>Load more</Wrapper>
  );
};

export default LoadMoreButton;
