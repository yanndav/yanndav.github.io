import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Header from "./components/Header";

import { darkMode, lightMode, GlobalStyle } from "./components/ColorModes";

const App = () => {
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("FR");
  const isDarkMode = mode === "dark";
  const isFrench = language === "FR";

  const changeMode = (isDarkMode) => {
    const modeChoice = isDarkMode ? "light" : "dark";
    setMode(modeChoice);
    localStorage.setItem("mode", modeChoice);
  };

  const changeLanguage = (isFrench) => {
    const langChoice = isFrench ? "ENG" : "FR";
    setLanguage(langChoice);
    localStorage.setItem("language", langChoice);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedMode && ["dark", "light"].includes(savedMode)) {
      setMode(savedMode);
    } else if (prefersDark) {
      setMode("dark");
    }
    const savedLanguage = localStorage.getItem("language");
    savedLanguage &&
      ["FR", "ENG"].includes(savedLanguage) &&
      setLanguage(savedLanguage);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <>
        <GlobalStyle />
        <Router>
          <Header
            isDarkMode={isDarkMode}
            changeMode={changeMode}
            isFrench={isFrench}
            changeLanguage={changeLanguage}
          />
          <Routes>
            <Route path="/" exact element={<Home isFrench={isFrench} />} />
            <Route path="/blog" exact element={<Blog isFrench={isFrench} />} />
            <Route
              path="/about"
              exact
              element={<About isFrench={isFrench} />}
            />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
