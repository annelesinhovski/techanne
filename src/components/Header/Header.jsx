import React from "react";
import Social from "../Social/Social";
import { StyledHeader, RedesSociais } from "./Header.styles";

function Header() {
  return (
    <StyledHeader>
      <h1>Anne Lesinhovski</h1>
      <RedesSociais>
        <Social dark />
      </RedesSociais>
    </StyledHeader>
  );
}

export default Header;
