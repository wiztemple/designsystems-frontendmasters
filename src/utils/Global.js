import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  font-size: 16px;
  box-sizing: border-box;
  min-width: 300px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}
body {
  height: 100%;
  background-color: #fff;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
}
main {
  width: 90%;
  margin: 0 auto;
}
`;
