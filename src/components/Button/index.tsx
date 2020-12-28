import styled from "styled-components";

const Button = styled.button`
  box-shadow: 0 0 1rem ${(props) => props.theme.button.shadow};
  opacity: 0.8;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 0 0.5rem ${(props) => props.theme.button.shadow};
  }
`;

export default Button;
