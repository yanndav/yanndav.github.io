import { createGlobalStyle } from "styled-components";

const lightMode = {
  body: "#f1f1f1",
  text: "#121620",
};
const darkMode = {
  body: "#121620",
  text: "#f1f1f1df",
};
const GlobalStyle = createGlobalStyle`
    body {
         background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

export { GlobalStyle, darkMode, lightMode };
