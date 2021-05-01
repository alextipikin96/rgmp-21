import ACTIONS from "./types";

const initialState = {
  movies: [],
  processingMovie: {
    release_date: new Date('2020-10-10T03:24:00'),
    poster_path: "",
    title: "",
    overview: "",
    runtime: 0,
    genres: []
  },
  filterGenre: "all",
  sortBy: "%20",
  search: "%20",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case ACTIONS.ADD_MOVIE:
      return { ...state, movies: state.movies.concat([action.payload]) };
    case ACTIONS.EDIT_MOVIE:
      return { ...state, movies: updateMovies(state.movies, action.payload) }
    case ACTIONS.DELETE_MOVIE:
      return { ...state, movies: state.movies.filter(movie => movie.id !== action.payload) }
    case ACTIONS.GET_MOVIE_BY_ID:
      return { ...state, processingMovie: action.payload }
    case ACTIONS.SET_FILTER_GENRES:
      return { ...state, filterGenre: action.payload }
    case ACTIONS.SET_SORT_BY:
      return { ...state, sortBy: action.payload }
    case ACTIONS.SET_SEARCH_BY:
      return { ...state, search: action.payload }
    default:
      return state;
  }
}

export const updateMovies = (movies, updatedMovie) => {
  return movies.map(movie => {
    if (movie.id === updatedMovie.id) {
      movie = updatedMovie
    }
    return movie;
  })
}
