import React from "react";
import styled from "styled-components";
import { IUser, IStory } from "../../core/types";
import Info from "./Info";

interface UserProps {
  info: IUser;
  stories?: IStory[];
  isPending: Boolean;
  errorMessage: Object | null;
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
    </Wrapper>
  );
};

export default User;
