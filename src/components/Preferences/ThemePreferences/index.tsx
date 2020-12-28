import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setTheme,
  togglePreferences,
} from "../../../store/preferences/actions";
import { ThemeEnum } from "../../../store/preferences/types";
import { fadeIn, gradientColors } from "../../../theme/animations";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.cards.background};
  grid-column: content;
  position: relative;
  display: flex;
  border-radius: ${(props) => props.theme.main.borderRadius};
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  animation: ${fadeIn} 0.5s ease;
`;

const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  left: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;

  transition: 0.1s;
  background-size: 400% 400%;
  animation: ${gradientColors} 5s ease infinite;
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
