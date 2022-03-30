import React from "react";
import styled from "styled-components";

const Toggle = styled.div`
  margin-left: 40px;
  position: relative;
  height: 30px;
  width: 65px;
  border-radius: 12px;
  ${(props) =>
    props.isDarkMode
      ? `background-color: #2c2c2c;`
      : ` background-color: #e7e7e7;`}

  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Ball = styled.div`
  width: 30px;
  height: 25px;
  border-radius: 10px;
  background: #cfcfcf;
  position: absolute;
  transition: left 0.1s;
  top: 2px;
  ${(props) => (props.isDarkMode ? ` left: 3px;` : ` left: 32px;`)}
`;

const ModeSwitch = ({ isDarkMode, changeMode }) => {
  return (
    <Toggle onClick={() => changeMode(isDarkMode)} isDarkMode={isDarkMode}>
      <Ball isDarkMode={isDarkMode} />
      <span>🌞</span>
      <span>🌛</span>
    </Toggle>
  );
};

export default ModeSwitch;
