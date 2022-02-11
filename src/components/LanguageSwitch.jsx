import React from "react";
import styled from "styled-components";
const LangButton = styled.div`
  font-size: 1.4em;
  &:hover {
    cursor: pointer;
  }
`;

const LanguageSwitch = ({ isFrench, changeLanguage }) => {
  return (
    <LangButton onClick={() => changeLanguage(isFrench)}>
      {isFrench ? "🇫🇷" : "🇬🇧"}
    </LangButton>
  );
};

export default LanguageSwitch;
