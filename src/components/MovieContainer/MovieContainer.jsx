import React from "react";
import MovieList from "./MovieList";
import ErrorBoundary from "../ErrorBoundary";
import ResultCount from "./ResultCount";
import MovieNavPanel from "./MovieNavPanel";
import "./MovieContainer.scss";

export default ({ movies }) => {
  return (
    <main className="MovieContainer">
      <MovieNavPanel />
      <ResultCount />
      <ErrorBoundary isEverythingOk={true}>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </main>
  );
};
