import React from "react";

import image from "../assets/diagram-svgrepo-com 2.png";
import { HeaderContainer } from "./Header/styled";

export default function App() {
  return (
    <div>
      Currency tracker
      <HeaderContainer>Header</HeaderContainer>
      <img src={image} alt="pavilion" />
    </div>
  );
}
