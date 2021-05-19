import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #292929;

    font-family: Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
