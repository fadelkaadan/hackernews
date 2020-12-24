import React from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { setTheme } from "../../../store/preferences/actions";
import { ThemeEnum } from "../../../store/preferences/types";

const Wrapper = styled.div`
  grid-column: content;
  display: flex;
  align-items: center;
`;

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

const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin-left: 20px;
  cursor: pointer;
  box-sizing: border-box;

  transition: 0.1s;
  background-size: 400% 400%;
  animation: ${animation} 5s ease infinite;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h3``;

const Dark = styled(Circle)`
  background-image: linear-gradient(
    to right bottom,
    #282c2e 0%,
    #404449 50%,
    #2d3031 100%
  );
`;

const Night = styled(Circle)`
  background-image: linear-gradient(
    to right bottom,
    #355397 0%,
    #233964 51%,
    #4b6cb7 100%
  );
`;

const Light = styled(Circle)`
  background-image: linear-gradient(
    to right,
    #f3f3f3 0%,
    #c0c0c0 50%,
    #e9e9e9 100%
  );
`;

const ThemePreferences = () => {
  const dispatch = useDispatch();
  const show = useSelector(
    (state: RootState) => state.preferences.isPreferencesClicked
  );
  const changeTheme = (theme: ThemeEnum): void => {
    dispatch(setTheme(theme));
  };
  return show ? (
    <Wrapper>
      <Title>Theme</Title>
      <Dark onClick={() => changeTheme(ThemeEnum.DARK)} />
      <Night onClick={() => changeTheme(ThemeEnum.NIGHT)} />
      <Light onClick={() => changeTheme(ThemeEnum.LIGHT)} />
    </Wrapper>
  ) : null;
};

export default ThemePreferences;
