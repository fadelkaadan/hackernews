import React from "react";
import styled from "styled-components";
import Content from "./Content";
import { fadeIn, gradientColors } from "../../../theme/animations";

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

const Wrapper = styled.div`
  border-radius: ${(props) => props.theme.main.borderRadius};
  color: #e7e7e7;
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  background-color: ${(props) => props.theme.cards.background};
  box-shadow: 0 0.1rem 1.5rem ${(props) => props.theme.cards.shadow};
  animation: ${fadeIn} 0.5s ease;
`;

const Sideline = styled.div`
  min-width: ${(props) => props.theme.sideLine.size};
  height: auto;
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${gradientColors} 5s ease infinite;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;

const Story = ({ data }: StoryProps) => {
  const renderStory = () => {
    if (data && data.url) {
      return (
        <Wrapper>
          <Sideline />
          <Content data={data} />
        </Wrapper>
      );
    }
    return null;
  };

  return renderStory();
};

export default Story;
