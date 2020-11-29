import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { fetchStory } from "../../api/hackernews";
import Time from "../Time";
import Link from "../Link";
import Interactions from "../Interactions";

interface StoryProps {
  storyId: number;
}

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
  background-color: ${(props) => props.theme.cards.background};
  box-shadow: 0px 1px 15px ${(props) => props.theme.cards.shadow};
`;

const Sideline = styled.div`
  min-width: 5%;
  height: 100%;
  /* background: linear-gradient(-45deg, #020024, #680979, #00d4ff); */
  /* background: linear-gradient(-45deg, #1CB5E0 0%, #000851 100%); */
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${animation} 15s ease infinite;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const StyledLink = styled.div`
  color: ${(props) => props.theme.main.text.primary};
  margin-top: 10px;
`;

const Title = styled.a`
  color:${(props) => props.theme.main.text.primary};
  text-decoration: none;
`;

const ContentWrapper = styled.div`
  padding: 15px 15px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
            <Time time={story.time} />
            <StyledLink>
              <Title href={story.url} target="blank">{story.title}</Title>
              <Link src={story.url} />
            </StyledLink>
            <Interactions score={story.score} comments={story.kids} />
          </ContentWrapper>
        </Wrapper>
      );
    }
    return null;
  };

  return renderStory();
};

export default Story;
