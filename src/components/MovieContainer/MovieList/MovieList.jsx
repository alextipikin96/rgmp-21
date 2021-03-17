import React from "react";
import MovieCard from "../MovieCard";
import "./MovieList.scss";

export default ({ movies, showDeleteModal, showEditModal}) => (
  <ul className="MovieList">
    {movies.map(({ id, ...movie }) => (
      <li key={id}>
        <MovieCard
          showDeleteModal={showDeleteModal}
          showEditModal={showEditModal}
          {...movie}
        />
      </li>
    ))}
  </ul>
);
