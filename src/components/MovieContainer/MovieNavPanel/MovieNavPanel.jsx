import React from "react";
import MovieCategories from "../MovieCategories";
import FilterPanel from "../FilterPanel";
/* import "./MovieNavPanel.scss"; */

 const MovieNavPanel = () => (
  <div className="MovieNavPanel">
    <MovieCategories />
    <FilterPanel />
  </div>
);

export default MovieNavPanel;
