import React from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import {
  setTheme,
  togglePreferences,
} from "../../../store/preferences/actions";
import { ThemeEnum } from "../../../store/preferences/types";

const onRenderAnimation = keyframes`
  0% {
		opacity: 0;
  }
	100% {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.cards.background};
  grid-column: content;
  position: relative;
  display: flex;
  border-radius: ${(props) => props.theme.main.borderRadius};
  justify-content: space-between;
  align-items: center;
  width: 150px;
  animation: ${onRenderAnimation} 0.3s ease;
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
  left: 50%;
  border: none;
  outline: none;
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

const Dark = styled(Circle)`
  background-image: linear-gradient(285deg, #3d3d3d, #141414 68.91%, #000000);
`;

const Night = styled(Circle)`
  background-image: linear-gradient(
    -85deg,
    #355397 0%,
    #233964 51%,
    #4b6cb7 100%
  );
`;

const Light = styled(Circle)`
  background-image: linear-gradient(
    -45deg,
    #bababa 61.34%,
    #818181 79.83%,
    #d9d9d9
  );
`;

const ThemePreferences = () => {
  const dispatch = useDispatch();

  const changeTheme = (theme: ThemeEnum): void => {
    dispatch(setTheme(theme));
    dispatch(togglePreferences());
  };
  return (
    <Wrapper>
      <Dark onClick={() => changeTheme(ThemeEnum.DARK)} />
      <Night onClick={() => changeTheme(ThemeEnum.NIGHT)} />
      <Light onClick={() => changeTheme(ThemeEnum.LIGHT)} />
    </Wrapper>
  );
};

export default ThemePreferences;
