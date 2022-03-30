import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

const ContextProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        isDarkMode,
        changeMode,
        isFrench,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
