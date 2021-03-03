import React from "react";
import Logo from "../Logo";
import "./Header.scss";

export default () => (
  <div className="Header">
    <div className="Header-image"></div>
    <div className="Header-content">
      <div className="top-panel">
        <div className="top-panel-label">
          <Logo />
        </div>
        <button className="btn-add-movie">+ADD MOVIE</button>
      </div>
      <div className="search-panel">
        <span className="search-panel-label">FIND YOUR MOVIE</span>
        <input
          className="search-panel-input"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="search-panel-button">SEARCH</button>
      </div>
    </div>
  </div>
);
