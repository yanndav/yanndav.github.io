import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Header from "./components/Header";

import { darkMode, lightMode, GlobalStyle } from "./components/ColorModes";
import { AppContext } from "./AppContext";

const App = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
