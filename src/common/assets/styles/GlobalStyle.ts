import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Roboto+Mono:wght@300;400;700&display=swap');

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;

    [class^="ant-"] {
      font-family: 'Montserrat', sans-serif;
    }
  }
`;
