import React from "react";
import "./FilterPanel.scss";

export default () => (
  <div className="FilterPanel">
    <span className="FilterPanel-sortby">SORT BY</span>
    <select className="FilterPanel-release">
      <option>RELEASE DATE</option>
      <option>TITLE</option>
      <option>MOVIE URL</option>
      <option>GENRE</option>
      <option>OVERVIEW</option>
      <option>RUNTIME</option>
    </select>
  </div>
);
