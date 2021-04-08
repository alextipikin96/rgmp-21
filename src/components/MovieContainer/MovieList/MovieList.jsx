import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import Spinner from "../../common/Spinner";
import "./MovieList.scss";

export default ({ movies }) => {
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Spinner />;
  }

  return (
    movies.length && (
      <ul className="MovieList">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    )
  );
};
