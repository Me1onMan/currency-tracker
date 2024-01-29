import React, { JSX } from "react";
import logo from "@assets/diagram-svgrepo-com-1.png";

import NavLinks from "./NavLinks";
import { Logo, NavbarContainer } from "./styled";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar(): JSX.Element {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" title="Modsen currency tracker" />
      <NavLinks />
      <ThemeSwitcher />
    </NavbarContainer>
  );
}

export default Navbar;
