import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchStories } from "../../store/stories/actions";
import { RootState } from "../../store/rootReducer";
import Story from "../../components/Story";
import LoadingIndicator from "../../components/LoadingIndicator";
import { TOP_STORIES } from "../../core/Constants";

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
  const dispatch = useDispatch();
  const stories = useSelector((state: RootState) => state.stories.list);
  const isPending = useSelector((state: RootState) => state.stories.pending);

  useEffect(() => {
    dispatch(fetchStories(TOP_STORIES, 30));
  }, [dispatch]);

  return (
    <Wrapper>
      <StoriesContainer>
        {isPending ? (
          <LoadingIndicator />
        ) : (
          stories &&
          stories.map((story) => <Story key={story.id} data={story} />)
        )}
      </StoriesContainer>
    </Wrapper>
  );
};

export default Home;
