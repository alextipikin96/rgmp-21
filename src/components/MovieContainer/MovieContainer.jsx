import React from "react";
import MovieList from "./MovieList"
import ErrorBoundary from "../ErrorBoundary";
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultCount from "./ResultCount";
import "./MovieContainer.scss";

export default ({ movies, showEditModal, showDeleteModal }) => {
  return (
    <div className="MovieContainer">
      <div className="MovieContainer-navigation">
        <NavBar />
        <FilterPanel />
      </div>
      <ResultCount movies={movies}/>
      <ErrorBoundary isEverythingOk={true}>
        <MovieList
          showEditModal={showEditModal}
          showDeleteModal={showDeleteModal}
          movies={movies} />
      </ErrorBoundary>
    </div>
  )

};
