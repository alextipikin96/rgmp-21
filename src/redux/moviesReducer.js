import ACTIONS from "./types";

const initialState = {
  movies: [],
  error: null,
  processingMovie: {
    release_date: new Date(),
    poster_path: '',
    title: '',
    overview: '',
    runtime: 0,
    genres: []
  },
  filterGenre: 'all',
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
