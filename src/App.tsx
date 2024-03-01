import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StyledButton } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Box>
        <StyledButton color={"green"}>Кно Почка</StyledButton>
        <StyledButton color={"red"} fontSize={"4rem"}>
          Кнопочка
        </StyledButton>
        <StyledButton>Кноп Очка</StyledButton>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
