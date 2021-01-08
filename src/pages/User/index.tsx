import React from "react";
import styled from "styled-components";
import UserContainer from "../../containers/UserContainer";


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main.background};

  display: grid;
  grid-template-columns: 1fr 2.5rem [content-start] minmax(200px, 100rem) [content-end] 2.5rem 1fr;
`;

const User = () => {
  return (
    <Wrapper>
      <UserContainer />
    </Wrapper>
  );
};

export default User;
