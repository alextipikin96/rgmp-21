import React from "react";
import "./ResultCount.scss";

export default ({ movies }) => (
  <div className="ResultCount">
    {movies.length} movies found
  </div>
);
