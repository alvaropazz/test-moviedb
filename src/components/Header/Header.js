import React from "react";
import { HeaderWrapper } from "./styles";
import copy from "./locales/copy.json";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="header-title">{copy.title}</h1>
      <p className="header-body">{copy.content}</p>
    </HeaderWrapper>
  );
};

export default Header;
