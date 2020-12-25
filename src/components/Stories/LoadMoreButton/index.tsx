import React from "react";
import styled from "styled-components";
import { gradientColors } from "../../../theme/animations";
import Button from "../../../common/Button";

const Wrapper = styled(Button)`
  width: 150px;
  height: 35px;
  margin-bottom: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${(props) => props.theme.main.borderRadius};
  color: #ffffff;
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${gradientColors} 8s ease infinite;
`;

const LoadMoreButton = () => {
  return <Wrapper>Load more</Wrapper>;
};

export default LoadMoreButton;
