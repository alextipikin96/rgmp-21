import React from "react";
import MovieList from "./MovieList"
import ErrorBoundary from "../ErrorBoundary";
import NavBar from "./NavBar";
import FilterPanel from "./FilterPanel";
import ResultCount from "./ResultCount";
import "./MovieContainer.scss";

export default ({ movies, selectMovie, deleteMovie, openEditModal, openDeleteModal }) => {
  return (
    <main className="MovieContainer">
      <div className="Navigation">
        <NavBar />
        <FilterPanel />
      </div>
      <ResultCount movies={movies}/>
      <ErrorBoundary isEverythingOk={true}>
        <MovieList
          movies={movies}
          selectMovie={selectMovie}
          deleteMovie={deleteMovie}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      </ErrorBoundary>
    </main>
  )

};
