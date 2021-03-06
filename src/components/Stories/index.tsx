import React from "react";
import styled from "styled-components";
import Story from "./Story";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadMoreButton from "./LoadMoreButton";
import { IStory } from "../../core/types";

interface StoriesProps {
  stories: IStory[];
  isPending: Boolean;
  errorMessage: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  grid-column: content;
`;

const Stories = ({ stories = [], isPending }: StoriesProps) => {
  const renderStories = () =>
    stories && stories.map((story) => <Story key={story.id} data={story} />);

  return (
    <Wrapper>
      {isPending && stories.length < 1 ? <LoadingIndicator /> : renderStories()}
      {stories.length > 0 ? <LoadMoreButton /> : null}
    </Wrapper>
  );
};

export default Stories;
