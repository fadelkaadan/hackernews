import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchStoryIds, TOP_STORIES } from "../../api/hackernews";
import Story from "../Story";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main.background};
`;

const StoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: baseline;
  width: 100%;
  max-width: 1200px;
  margin-top: 25px;
`;

const Home = () => {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  useEffect(() => {
    fetchStoryIds(TOP_STORIES, 30).then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <StoriesContainer>
        {storyIds.map((id) => (
          <Story key={id} storyId={id} />
        ))}
      </StoriesContainer>
    </Wrapper>
  );
};

export default Home;
