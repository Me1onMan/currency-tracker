import React from "react";

import logo from "../../assets/diagram-svgrepo-com-1.png";
import {
  Copyright,
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterMain,
  LinksTable,
  Logo,
  LogoContainer,
  LogoName,
} from "./styled";

function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterContent>
          <LogoContainer>
            <Logo src={logo} alt="logo" />
            <LogoName>Modsen Currency Tracker</LogoName>
          </LogoContainer>
          <FooterDescription>
            Since then, the company has grown organically to. Starsup is the
            world&apos;s largest trading platform, with $12 billion worth of
            currency trading and 500,000 tickets sold daily to tens of thousands
            of traders worldwide.
          </FooterDescription>
        </FooterContent>

        <LinksTable>
          <thead>
            <tr>
              <td>General</td>
              <td>Product</td>
              <td>Community</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market</td>
              <td>Sparks</td>
              <td>Ideas</td>
            </tr>
            <tr>
              <td>Service</td>
              <td>Snaps</td>
              <td>Streams</td>
            </tr>
          </tbody>
        </LinksTable>
      </FooterMain>
      <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;
