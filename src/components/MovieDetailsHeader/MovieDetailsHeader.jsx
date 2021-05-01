import React from "react";
import Logo from "../common/Logo";
//import searchIcon from "../../assets/icons/searchIcon.svg";

const MovieDetailsHeader = () => {
  return (
    <div className="top-panel">
      <Logo />
      <button className="btn-search">
        <img /* src={searchIcon} */ alt="" />
      </button>
    </div>
  );
};

export default MovieDetailsHeader;
