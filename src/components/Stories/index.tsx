import React from "react";
import styled from "styled-components";
import Story from "./Story";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadMoreButton from "./LoadMoreButton";

interface IStory {
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

interface StoriesProps {
  stories: IStory[];
  isPending: Boolean;
  errorMessage: any;
}

const Wrapper = styled.div`
  display: flex;
  ${(props) => props.theme.story.size};
  padding: 0 25px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 25px;
`;

const Stories = ({ stories = [], isPending }: StoriesProps) => {
  const renderStories = () =>
    stories && stories.map((story) => <Story key={story.id} data={story} />);

  return (
    <Wrapper>
      {isPending && stories.length < 1 ? <LoadingIndicator /> : renderStories()}
      { stories.length > 0 ? <LoadMoreButton /> : null}
    </Wrapper>
  );
};

export default Stories;
