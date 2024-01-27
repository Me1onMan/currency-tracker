import React, { JSX } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/diagram-svgrepo-com-1.png";
import {
  BANKS_ROUTE,
  CHART_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
} from "@constants/routes";
import { useTheme } from "@contexts/ThemeProvider";

import { Input, Label, Logo, Nav, NavbarContainer, NavList } from "./styled";

function NavLinks(): JSX.Element {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to={HOME_ROUTE}>Home</Link>
        </li>
        <li>
          <Link to={CHART_ROUTE}>Timeline</Link>
        </li>
        <li>
          <Link to={BANKS_ROUTE}>Bank card</Link>
        </li>
        <li>
          <Link to={CONTACTS_ROUTE}>Contacts</Link>
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
      <Logo src={logo} alt="Logo" title="Modsen currency tracker" />
      <NavLinks />
      <ThemeSwitcher />
    </NavbarContainer>
  );
}

export default Navbar;
