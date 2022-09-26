import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        outline: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
      font-family: 'Josefin Sans', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
      border: none;
    }


    .container {
        width: 100%;
        padding: 0 2rem;
        margin: 0 auto;
        max-width: 1180px;
    }
`
