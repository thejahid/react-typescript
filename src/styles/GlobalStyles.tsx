import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
  /* ------------------------- color ------------------------- */
  --primaryColor: #394e5d;
  --white: #fff;
  --jaggedIce: #badae5;
  --black: #000;
  --grey: #ddd;
  --orange: orange;

  /* ------------------------- box shadow & border, border-radius ------------------------- */
  --borderOne: 1px solid #ddd;
  --borderRadiousOne: 5px;

  /* ------------------------- font size ------------------------- */
  /*  common font size  */
  --smallFont: 14px;
  --mediumFont: 17px;
  --LargeFont: 19px;

  /* ------------------------- font weight ------------------------- */
  --normal: 400;
  --semiBold: 600;
  --bold: 700;
  /* ------------------------- transition ------------------------- */
  --defaultTransition: 0.3s;
}

/* ------------------------- common css ------------------------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
body {
  color: var(--primaryColor);
  font-weight: var(--normal);
  line-height: 1;
  min-height: 100vh;
  background: var(--jaggedIce);
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  display: inline-block;
  color: var(--primaryColor);
}
:focus {
  outline: none;
}
`;

export default GlobalStyles;
