import React from "react";
import styled from "styled-components";

const ToggleDarkLightTheme = ({ isSun, toggleTheme }) => {
  return (
    <IconContainer onClick={toggleTheme}>
      <div className={isSun ? "visible" : "hidden"}>🌞</div>
      <div className={!isSun ? "visible" : "hidden"}>🌙</div>
    </IconContainer>
  );
};

const IconContainer = styled.button`
  border: none;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;

  .visible {
    pointer-events: auto;
  }

  .hidden {
    pointer-events: none;
    display: none;
  }
`;

export default ToggleDarkLightTheme;
