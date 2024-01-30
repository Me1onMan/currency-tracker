import React from "react";
import logo from "@assets/diagram-svgrepo-com-1.png";

import {
  ContentContainer,
  FooterDescription,
  Logo,
  LogoContainer,
  LogoName,
} from "./styled";

function FooterContent() {
  return (
    <ContentContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" title="Modsen currency tracker" />
        <LogoName>Modsen Currency Tracker</LogoName>
      </LogoContainer>
      <FooterDescription>
        Since then, the company has grown organically to. Starsup is the
        world&apos;s largest trading platform, with $12 billion worth of
        currency trading and 500,000 tickets sold daily to tens of thousands of
        traders worldwide.
      </FooterDescription>
    </ContentContainer>
  );
}

export default FooterContent;
