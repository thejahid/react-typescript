import React, { Fragment, useContext } from "react";

import { Navbar } from "./Navbar";

interface Props {
  toggleTheme(): void;
}

export const Layout: React.FC<Props> = ({ children, toggleTheme }) => {
  return (
    <Fragment>
      <Navbar toggleTheme={toggleTheme} />
      {children}
    </Fragment>
  );
};
