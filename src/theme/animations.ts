import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
		opacity: 0;
  }
	100% {
		opacity: 1;
	}
`;

export const gradientColors = keyframes`
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