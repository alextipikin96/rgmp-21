import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import ErrorBoundary from "../ErrorBoundary";
import ResultCount from "./ResultCount";
import MovieNavPanel from "./MovieNavPanel";
import { fetchMovies } from "../../redux/actions";
import Spinner from "../common/Spinner";

 const MovieContainer = () => {
  const loading = useSelector((state) => state.app.loading);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const { category, sortBy, search } = useRouter().query;

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

export default MovieContainer;
