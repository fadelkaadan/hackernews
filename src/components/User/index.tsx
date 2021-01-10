import React from "react";
import styled from "styled-components";
import { IUser, IStory } from "../../core/types";
import Stories from "../Stories";
import Info from "./Info";

interface UserProps {
  info: IUser;
  stories: StoriesType;
  isPending: Boolean;
  errorMessage: Object | null;
}

interface StoriesType {
  list: IStory[];
  startAt: number;
  pending: Boolean;
  error: Object | null;
}

const Wrapper = styled.div`
  grid-column: content;
  color: ${(props) => props.theme.main.text.primary};
  width: 100%;
`;

const User = ({ info, stories, isPending, errorMessage }: UserProps) => {
  return (
    <Wrapper>
      <Info data={info}/>
      <Stories
        stories={stories.list}
        isPending={stories.pending}
        errorMessage={stories.error}
      />
    </Wrapper>
  );
};

export default User;
