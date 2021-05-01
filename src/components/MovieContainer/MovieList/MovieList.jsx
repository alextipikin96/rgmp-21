import React from "react";
import MovieCard from "../MovieCard";

const MovieList = ({ movies }) => {
  return movies.length ? (
    <ul className="MovieList">
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="noFound">No movie found</div>
  );
};

export default MovieList;
