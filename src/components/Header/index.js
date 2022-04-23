import React from "react";
import { HeaderWrapper } from "./styles";
import copy from "./locales/copy.json";
import { MOVIE_DB_CONFIG } from "../../locales";

const Header = ({ backdrop }) => {
  return (
    backdrop.length && (
      <HeaderWrapper
        backgroundImage={`${MOVIE_DB_CONFIG.images.base_url}${MOVIE_DB_CONFIG.images.poster_sizes[6]}${backdrop}`}
      >
        <h1 className="header-title">{copy.title}</h1>
        <p className="header-body">{copy.content}</p>
      </HeaderWrapper>
    )
  );
};

export default Header;
