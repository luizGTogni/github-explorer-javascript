import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  :root {
    --bg-color: #F0F0F0; // Background Color
    
    --gray-200: #F0F0F0;
    --gray-500: #C4C4C4;

    --clr-primary-normal: #4FBDBA;
    --clr-primary-dark: #219F94;

    --text-dark: #191A19;
    --text-shadow: 0 2px 6px rgba(25, 26, 25, 0.2);

    --box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);

    --black: #000000;
    --white: #ffffff;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    margin: 0;

    background-color: var(--bg-color);
    font-family: "Roboto", sans-serif;
    font-weight: normal;

    color: var(--text-dark)
  }
`;