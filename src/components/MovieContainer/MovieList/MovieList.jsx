import React from "react";
import MovieCard from "../MovieCard";
import "./MovieList.scss";

export default ({ movies }) => (
  <ul className="MovieList">
    {movies.map(({ id, ...movie }) => (
      <li key={id}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
