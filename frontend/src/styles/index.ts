import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  input, button {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
  
  .container {
    width: 1024px;
    margin: 0 auto;
  }
`;