import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import Footer from "../Footer";
import MovieContainer from "../MovieContainer";
import Context from "../common/Context";
import { fetchMovies } from "../../redux/actions";
import "./App.scss";

export default () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [processingMovieId, setProcessingMovieId] = useState(0);
  const setMovieId = id => setProcessingMovieId(id);

  console.log(movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleCloseMovie = () => {
    setMovieId(null);
  };

  return (
    <div className="App">
      <Context.Provider value={{ setMovieId, processingMovieId }}>
        <Header movies={movies} closeMovie={handleCloseMovie} />
        <MovieContainer movies={movies} />
        <Footer />
      </Context.Provider>
    </div>
  );
};
