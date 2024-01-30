import React, { JSX } from "react";
import { Link } from "react-router-dom";
import {
  BANKS_ROUTE,
  CHART_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
} from "@constants/routes";

import { CloseButton, LinksContainer, MenuContainer } from "./styled";

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

interface IProps {
  handleClose: () => void;
}

function BurgerMenu({ handleClose }: IProps): JSX.Element {
  return (
    <MenuContainer>
      <CloseButton onClick={handleClose}>
        <span />
        <span />
      </CloseButton>
      <LinksContainer>
        {links.map((link) => (
          <Link to={link.to} onClick={handleClose} key={link.text}>
            {link.text}
          </Link>
        ))}
      </LinksContainer>
    </MenuContainer>
  );
}

export default BurgerMenu;
