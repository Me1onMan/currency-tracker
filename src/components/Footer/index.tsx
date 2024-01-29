import React, { JSX } from "react";

import FooterContent from "./FooterContent";
import FooterLinks from "./FooterLinks";
import { Copyright, FooterContainer, FooterMain } from "./styled";

function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterContent />

        <FooterLinks />
      </FooterMain>
      <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;
