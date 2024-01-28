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

import {
  Input,
  Label,
  Logo,
  Nav,
  NavbarContainer,
  NavItem,
  NavList,
} from "./styled";

function NavLinks(): JSX.Element {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to={HOME_ROUTE}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to={CHART_ROUTE}>Timeline</Link>
        </NavItem>
        <NavItem>
          <Link to={BANKS_ROUTE}>Bank card</Link>
        </NavItem>
        <NavItem>
          <Link to={CONTACTS_ROUTE}>Contacts</Link>
        </NavItem>
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
