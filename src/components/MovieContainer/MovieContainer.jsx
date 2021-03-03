import React from "react";
import MovieList from "./MovieList"
import ErrorBoundary from "../ErrorBoundary";
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel"
import "./MovieContainer.scss";

export default ({ movies }) => (
  <div className="MovieContainer">
    <div className="MovieContainer-navigation">
      <NavBar />
      <FilterPanel />
    </div>
    <ErrorBoundary isEverythingOk={true}>
      <MovieList movies={movies} />
    </ErrorBoundary>
  </div>
);
