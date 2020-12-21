import React from "react";
import styled from "styled-components";
import StoriesContainer from "../../containers/StroriesContainer";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main.background};
`;

const Home = () => {
  return (
    <Wrapper>
      <StoriesContainer />
    </Wrapper>
  );
};

export default Home;
