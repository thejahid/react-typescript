import React, { Fragment } from "react";

import { Navbar } from "./Navbar";
import { MainWrapper } from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
  return (
    <Fragment>
      <Navbar toggleTheme={toggleTheme} />
      <MainWrapper>{children}</MainWrapper>
    </Fragment>
  );
};
