import React from "react";
import styled from "styled-components";
import Story from "../../components/Story";
import LoadingIndicator from "../../components/LoadingIndicator";

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
  stories?: IStory[];
  isPending: Boolean;
  errorMessage: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: baseline;
  width: 100%;
  max-width: 1200px;
  margin-top: 25px;
`;

const Stories = ({ stories, isPending }: StoriesProps) => {
  const renderStories = () =>
    stories && stories.map((story) => <Story key={story.id} data={story} />);

  return (
    <Wrapper>{isPending ? <LoadingIndicator /> : renderStories()}</Wrapper>
  );
};

export default Stories;
