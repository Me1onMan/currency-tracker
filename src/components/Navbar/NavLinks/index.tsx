import React, { JSX } from "react";
import { Link } from "react-router-dom";
import {
  BANKS_ROUTE,
  CHART_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
} from "@constants/routes";

import { Nav, NavItem, NavList } from "./styled";

const links = [
  {
    to: HOME_ROUTE,
    text: "Home",
  },
  {
    to: CHART_ROUTE,
    text: "Timeline",
  },
  {
    to: BANKS_ROUTE,
    text: "Bank card",
  },
  {
    to: CONTACTS_ROUTE,
    text: "Contacts",
  },
];

export default function NavLinks(): JSX.Element {
  return (
    <Nav>
      <NavList>
        {links.map((link) => (
          <NavItem key={link.text}>
            <Link to={link.to}>{link.text}</Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}
