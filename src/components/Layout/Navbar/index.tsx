import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { NavbarWrapper, NavbarContent } from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <NavbarWrapper>
      <NavbarContent>
        <div>Hello Navbar</div>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={14}
          width={30}
          handleDiameter={20}
          offColor={colors.text}
          onColor={colors.text}
        />
      </NavbarContent>
    </NavbarWrapper>
  );
};
