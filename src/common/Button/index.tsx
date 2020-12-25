import styled from "styled-components";

const Button = styled.button`
  box-shadow: 0px 0px 10px ${(props) => props.theme.button.shadow};
  opacity: 0.8;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0px 0px 5px ${(props) => props.theme.button.shadow};
  }
`;

export default Button;
