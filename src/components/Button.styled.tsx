import styled from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledButtonPropsType = {
  color?: string;
  fontSize?: string;
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  border: none;
  border-radius: 5px;

  background-color: ${(props) => props.color || "#c10177"};
  padding: 10px 20px;

  color: snow;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  &:hover {
    background-color: purple;
  }
`;
