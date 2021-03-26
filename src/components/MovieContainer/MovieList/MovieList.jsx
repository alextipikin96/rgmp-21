import React from "react";
import MovieCard from "../MovieCard";
import "./MovieList.scss";

export default ({ movies, deleteMovie, selectMovie, openEditModal, openDeleteModal }) => (
  <ul className="MovieList">
    {movies.map(({ id, ...movie }) => (
      <li key={id}>
        <MovieCard
          openDeleteModal={openDeleteModal}
          openEditModal={openEditModal}
          deleteMovie={() => deleteMovie(id)}
          selectMovie={() => selectMovie(id)}
          {...movie}
        />
      </li>
    ))}
  </ul>
);
