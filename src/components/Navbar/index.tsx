import React from "react";

import logo from "../../assets/diagram-svgrepo-com-1.png";
import { Input, Label, Logo, Nav, NavbarContainer, NavList } from "./styled";

function NavLinks(): JSX.Element {
  return (
    <Nav>
      <NavList>
        <li>Home</li>
        <li>Timeline</li>
        <li>Bank card</li>
        <li>Contacts</li>
      </NavList>
    </Nav>
  );
}

function ThemeSwitcher(): JSX.Element {
  return (
    <>
      <Input type="checkbox" id="theme-switcher" />
      <Label htmlFor="theme-switcher" />
    </>
  );
}

function Navbar(): JSX.Element {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="logo" />
      <NavLinks />
      <ThemeSwitcher />
    </NavbarContainer>
  );
}

export default Navbar;
