import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import { fetchMovies, getMovieById } from "../../redux/actions";
import MovieContainer from "../MovieContainer";
import HeaderContainer from "../HeaderContainer";
import MovieDetails from "../MovieContainer/MovieDetails/MovieDetails";
import MovieDetailsHeader from "../MovieDetailsHeader";

export default () => {
  const dispatch = useDispatch();
  const { filterGenre, sortBy, search } = useSelector((state) => state.movies);
  const { id } = useParams();
  const currentMovie = useSelector((state) => state.movies.processingMovie);

  useEffect(() => {
    dispatch(getMovieById(id));
    dispatch(fetchMovies(filterGenre, sortBy, search));
  }, [id]);

  return (
    <>
      <HeaderContainer>
        <MovieDetailsHeader />
        <MovieDetails movie={currentMovie} />
      </HeaderContainer>
      <MovieContainer />
      <Footer />
    </>
  );
};
