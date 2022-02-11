import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import LanguageSwitch from "./LanguageSwitch";

const HeaderContainer = styled.div`
  /* margin: 0px 10%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  font-size: 1.4em;
  color: #f7941f;
  margin: 10px 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #f04d02;
    text-decoration: none;
  }
  &.active {
    color: #f00249;
    font-size: 1.5em;
  }
`;

const Header = ({ isDarkMode, changeMode, isFrench, changeLanguage }) => {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <StyledLink to="/">🏠️</StyledLink>
        <StyledLink to="/blog">blog</StyledLink>
        <StyledLink to="/about">{isFrench ? "à propos" : "about"}</StyledLink>
      </NavigationContainer>
      <NavigationContainer>
        <LanguageSwitch isFrench={isFrench} changeLanguage={changeLanguage} />
        <ModeSwitch isDarkMode={isDarkMode} changeMode={changeMode} />
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
