import logo from "@assets/diagram-svgrepo-com-1.png";
// @ts-expect-error @ as src
import { useTheme } from "@contexts/ThemeProvider";
import React from "react";
import { Link } from "react-router-dom";

import { Input, Label, Logo, Nav, NavbarContainer, NavList } from "./styled";

function NavLinks(): JSX.Element {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/banks">Bank card</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </NavList>
    </Nav>
  );
}

function ThemeSwitcher(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Input
        type="checkbox"
        id="theme-switcher"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <Label id="cy-theme-toggler" htmlFor="theme-switcher" />
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
