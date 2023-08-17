import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 16px;
}

body {
  font-size: 1.2rem;
  font-family: "Poppins";
}

h1, h2, h3 {
  margin-bottom: 1rem; // 16px
}

`