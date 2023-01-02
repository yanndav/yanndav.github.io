import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { AppContext } from "../AppContext";

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
const Nom = styled.div`
  /* font-size: 1.4em; */
  color: #d89923;
  font-weight: 900;
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

const Header = () => {
  const { isDarkMode, changeMode, isFrench, changeLanguage } =
    useContext(AppContext);
  return (
    <HeaderContainer>
      <NavigationContainer>
        <StyledLink to="/">
          <Nom>Yann David</Nom>
        </StyledLink>
        {/*  <StyledLink to="/blog">blog</StyledLink>*/}
      </NavigationContainer>
      <NavigationContainer>
        <LanguageSwitch isFrench={isFrench} changeLanguage={changeLanguage} />
        <ModeSwitch isDarkMode={isDarkMode} changeMode={changeMode} />
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
