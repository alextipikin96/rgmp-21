import React from "react";
import "./Spinner.scss";

export default () => (
  <div className="loader">
    <div className="loader-indicator"></div>
    <span className="loader-text">Loading...</span>
  </div>
);
