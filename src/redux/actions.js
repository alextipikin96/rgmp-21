import axios from "axios";
import ACTIONS from "./types";

const apiUrl = "http://localhost:4000/movies";

export const showLoader = () => ({
  type: ACTIONS.SHOW_LOADER
});

export const hideLoader = () => ({
  type: ACTIONS.HIDE_LOADER
});

const fetchMoviesSuccess = movies => ({
  type: ACTIONS.FETCH_MOVIES,
  payload: movies
});

const getMovieSuccess = movies => ({
  type: ACTIONS.GET_MOVIE_BY_ID,
  payload: movies
});

const deleteMovieSuccess = id => ({
  type: ACTIONS.DELETE_MOVIE,
  payload: id
});

const addMovieSuccess = movie => ({
  type: ACTIONS.ADD_MOVIE,
  payload: movie
});

const editMovieSuccess = movie => ({
  type: ACTIONS.EDIT_MOVIE,
  payload: movie
});

const setFilterGenres = genre => ({
  type: ACTIONS.SET_FILTER_GENRES,
  payload: genre
});

export const fetchMovies = (genre = "all", sortBy = "") => dispatch => {
  dispatch(showLoader());
  dispatch(setFilterGenres(genre));
  let url = apiUrl;
  url += genre !== "all" ? `?filter=${genre}&` : "?";
  url += sortBy ? `sortBy=${sortBy}&` : "";
  axios.get(`${url}limit=100`)
    .then((response) => {
      let movies = response.data.data;

      if (sortBy) {
        movies = movies.sort((movieA, movieB) => {
          if (movieA[sortBy] > movieB[sortBy]) {
            return 1;
          } else if (movieA[sortBy] < movieB[sortBy]) {
            return -1;
          } else {
            return 0;
          }
        });
      }

      setTimeout(() => {
        dispatch(fetchMoviesSuccess(movies));
        dispatch(hideLoader());
      }, 1000)
    })
};

export const getMovieById = id => dispatch => {
  axios.get(`${apiUrl}/${id}`)
    .then((response) => {
      response.data.release_date = new Date(response.data.release_date);
      dispatch(getMovieSuccess(response.data));
    })
};

export const addMovie = movie => dispatch => {
  axios.post(apiUrl, movie)
    .then((response) => {
      if (response.data.id) {
        dispatch(addMovieSuccess(response.data))
      }
    })
};

export const deleteMovie = id => dispatch => {
  axios.delete(`${apiUrl}/${id}`)
    .then(() => {
      dispatch(deleteMovieSuccess(id))
    })
};

export const editMovie = movie => dispatch => {
  axios.put(apiUrl, movie)
    .then((response) => {
      if (response.data.id) {
        dispatch(editMovieSuccess(response.data))
      }
    })
};
