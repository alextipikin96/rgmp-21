import React from "react";
import { useSelector } from "react-redux";
import "./ResultCount.scss";

export default () => {
  const movies = useSelector(state => state.movies.movies);

  return (
  <div className="ResultCount">
    {movies.length} movies found
  </div>
)};
