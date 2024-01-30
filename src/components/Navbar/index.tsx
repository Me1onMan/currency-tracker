import React, { JSX, useState } from "react";
import { createPortal } from "react-dom";
import logo from "@assets/diagram-svgrepo-com-1.png";

import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";
import { BurgerButton, Logo, NavbarContainer } from "./styled";
import ThemeSwitcher from "./ThemeSwitcher";

const modalContainer = document.getElementById("modal");

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <NavbarContainer>
        <Logo src={logo} alt="Logo" title="Modsen currency tracker" />
        <NavLinks />
        <ThemeSwitcher />
        <BurgerButton onClick={openMenu}>
          <span />
          <span />
          <span />
        </BurgerButton>
      </NavbarContainer>
      {isOpen &&
        createPortal(<BurgerMenu handleClose={closeMenu} />, modalContainer)}
    </>
  );
}

export default Navbar;
