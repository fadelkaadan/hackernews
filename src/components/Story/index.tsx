import React from "react";
import styled, { keyframes } from "styled-components";
import Content from "../Content";

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

interface StoryProps {
  data: IStory;
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
  width: ${(props) => props.theme.story.size};
  margin: 0px 25px 25px 25px;
  display: flex;
  background-color: ${(props) => props.theme.cards.background};
  box-shadow: 0px 1px 15px ${(props) => props.theme.cards.shadow};
`;

const Sideline = styled.div`
  min-width: ${(props) => props.theme.sideLine.size};
  height: 100%;
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${animation} 5s ease infinite;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const SidelineJob = styled(Sideline)`
background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 150% 150%;
  animation: ${animation} 5s ease infinite;
`;

const Story = ({ data }: StoryProps) => {

  const renderStory = () => {
    if (data && data.url) {
      return (
        <Wrapper>
          {data.type === "story" ? <Sideline /> : <SidelineJob />}
          <Content data={data} />
        </Wrapper>
      );
    }
    return null;
  };

  return renderStory();
};

export default Story;
