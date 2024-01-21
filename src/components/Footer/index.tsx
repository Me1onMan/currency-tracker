import logo from "@assets/diagram-svgrepo-com-1.png";
import React from "react";
import { Link } from "react-router-dom";

import {
  Copyright,
  FooterContainer,
  FooterContent,
  FooterDescription,
  FooterMain,
  LinksContainer,
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

        <LinksContainer>
          <div>
            <p>General</p>
            <Link to="/contacts">Market</Link>
            <Link to="/contacts">Service</Link>
          </div>
          <div>
            <p>Product</p>
            <Link to="/contacts">Sparks</Link>
            <Link to="/contacts">Snaps</Link>
          </div>
          <div>
            <p>Community</p>
            <Link to="/contacts">Ideas</Link>
            <Link to="/contacts">Streams</Link>
          </div>
        </LinksContainer>
      </FooterMain>
      <Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;
