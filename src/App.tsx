import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "styles/global";
import light from "styles/themes/light";
import dark from "styles/themes/dark";
import { Layout } from "components";

const App: React.FC = () => {
  //changing theme
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout toggleTheme={toggleTheme}>Hello, I'm Children</Layout>
    </ThemeProvider>
  );
};

export default App;
