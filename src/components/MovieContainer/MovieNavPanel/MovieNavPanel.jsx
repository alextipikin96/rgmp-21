import React from "react";
import MovieCategories from "../MovieCategories";
import FilterPanel from "../FilterPanel";
import "./MovieNavPanel.scss";

export default () => (
  <div className="MovieNavPanel">
    <MovieCategories />
    <FilterPanel />
  </div>
);
