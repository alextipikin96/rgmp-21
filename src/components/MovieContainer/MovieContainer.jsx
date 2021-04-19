import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import ErrorBoundary from "../ErrorBoundary";
import ResultCount from "./ResultCount";
import MovieNavPanel from "./MovieNavPanel";
import { fetchMovies } from "../../redux/actions";
import Spinner from "../common/Spinner";
import "./MovieContainer.scss";

export default () => {
  const loading = useSelector(state => state.app.loading);
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();
  const { category, sortBy, search } = useParams();

  useEffect(() => {
    if (!category && !sortBy && !search) {
      dispatch(fetchMovies());
    } else {
      dispatch(fetchMovies(category, sortBy, search));
    }
  }, [category, sortBy, search]);

  return (
    <main className="MovieContainer">
      <MovieNavPanel />
      <ResultCount movies={movies} />
      <ErrorBoundary isEverythingOk={true}>
        {loading ? <Spinner /> : <MovieList movies={movies} />}
      </ErrorBoundary>
    </main>
  );
};
