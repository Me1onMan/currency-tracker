import logo from "@assets/diagram-svgrepo-com-1.png";
import React from "react";

import {
  DescriptionContainer,
  DescriptionText,
  HeaderContainer,
  HeaderH1,
  Logo,
} from "./styled";

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <DescriptionContainer>
        <HeaderH1>
          <span>Modsen Currency</span>
          <span>Tracker</span>
        </HeaderH1>
        <DescriptionText>
          Quotes for the dollar and other international currencies.
        </DescriptionText>
      </DescriptionContainer>
      <Logo src={logo} />
    </HeaderContainer>
  );
}

export default Header;
