import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import MovieContainer from "../MovieContainer";
import films from "../../static/movies";
import "./App.scss";

export default () => {
  const [movies, setMovies] = useState(films);
  const [movieId, setMovieId] = useState(null);

  const handleDeleteMovie = id => {
    const idx = movies.findIndex(movie => movie.id === id);
    const newMovieList = [
      ...movies.slice(0, idx),
      ...movies.slice(idx + 1)
    ];
    setMovies(newMovieList);
  };

  const handleSelectMovie = id => {
    setMovieId(id);
  };

  const handleCloseMovie = () => {
    setMovieId(null);
  };

  return (
    <div className="App">
      <Header
        movieId={movieId}
        movies={movies}
        closeMovie={handleCloseMovie}
      />
      <MovieContainer
        movies={movies}
        movieId={movieId}
        selectMovie={handleSelectMovie}
        deleteMovie={handleDeleteMovie}
      />
      <Footer />
    </div>
  );
};
