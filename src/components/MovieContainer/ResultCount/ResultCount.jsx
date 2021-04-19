import React from "react";
import { useSelector } from "react-redux";
import "./ResultCount.scss";

export default ({movies}) => {
  return (
  <div className="ResultCount">
    {movies.length} movies found
  </div>
)};
