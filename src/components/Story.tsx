import React, { useEffect, useState } from "react";
import { fetchStory } from "../api/hackernews";
import styled, { keyframes } from "styled-components";
import Author from "./Author";
import Score from "./Score";
import Time from "./Time";

interface StoryProps {
  storyId: number;
}

interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

const animation = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Wrapper = styled.div`
  border-radius: 15px;
  color: #e7e7e7;
  width: 500px;
  margin: 0px 25px 25px 25px;
  display: flex;
  background-color: ${(props) => props.theme.main.background};
`;

const Sideline = styled.div`
  width: 5%;
  height: 100%;
  /* background: linear-gradient(-45deg, #020024, #680979, #00d4ff); */
  /* background: linear-gradient(-45deg, #1CB5E0 0%, #000851 100%); */
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${animation} 15s ease infinite;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Link = styled.a`
  color: #e7e7e7;
  text-decoration: none;
`;

const Title = styled.h4``;

const ContentWrapper = styled.div`
  margin: 0 10px;
`;

const Story = ({ storyId }: StoryProps) => {
  const [story, setStory] = useState<IStory>();

  useEffect(() => {
    fetchStory(storyId).then((data) => setStory(data));
  }, [storyId]);

  const renderStory = () => {
    if (story && story.url) {
      return (
        <Wrapper>
          <Sideline />
          <ContentWrapper>
            <Link href={story.url} target="blank">
              <Title>{story.title}</Title>
            </Link>
            <Score score={story.score} />
            <Author name={story.by} />
            <Time time={story.time} />
          </ContentWrapper>
        </Wrapper>
      );
    }
    return null;
  };

  return renderStory();
};

export default Story;
