import { moviesReducer } from "./moviesReducer";
import ACTIONS from "./types";

describe("movie reducer", () => {
  let initialState;
  const emptyMovie = { release_date: new Date("2020-10-10T03:24:00"), poster_path: "", title: "", overview: "", runtime: 0, genres: [] };
  let testMovie;

  beforeEach(() => {
    initialState = {
      movies: [],
      processingMovie: emptyMovie,
      filterGenre: "all",
      sortBy: "",
      search: "",
    };

    testMovie = { id: 4, poster_path: "test/path", release_date: new Date("2020-10-10T03:24:00"), title: "testMovie" };
  });

  it("should return initial state", () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_MOVIES", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.FETCH_MOVIES, payload: [testMovie] }))
      .toEqual({
        movies: [testMovie],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "",
        search: "",
      });
  });

  it("should handle ADD_MOVIE", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.ADD_MOVIE, payload: testMovie }))
      .toEqual({
        movies: [testMovie],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "",
        search: "",
      });
  });

  it("should handle EDIT_MOVIE", () => {
    const newTestMovie = { ...testMovie, title: "newTestMovie" };

    expect(moviesReducer({
      movies: [testMovie],
      processingMovie: emptyMovie,
      filterGenre: "all",
      sortBy: "",
      search: "",
    },
      { type: ACTIONS.EDIT_MOVIE, payload: newTestMovie }))
      .toEqual({
        movies: [newTestMovie],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "",
        search: "",
      });
  });

  it("should handle DELETE_MOVIE", () => {
    expect(moviesReducer({
      movies: [testMovie],
      processingMovie: emptyMovie,
      filterGenre: "all",
      sortBy: "",
      search: "",
    },
      { type: ACTIONS.DELETE_MOVIE, payload: testMovie.id }))
      .toEqual({
        movies: [],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "",
        search: "",
      });
  });

  it("should handle GET_MOVIE_BY_ID", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.GET_MOVIE_BY_ID, payload: testMovie }))
      .toEqual({
        movies: [],
        processingMovie: testMovie,
        filterGenre: "all",
        sortBy: "",
        search: "",
      });
  });

  it("should handle SET_FILTER_GENRES", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.SET_FILTER_GENRES, payload: "horror" }))
      .toEqual({
        movies: [],
        processingMovie: emptyMovie,
        filterGenre: "horror",
        sortBy: "",
        search: "",
      });
  });

  it("should handle SET_SORT_BY", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.SET_SORT_BY, payload: "title" }))
      .toEqual({
        movies: [],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "title",
        search: "",
      });
  });

  it("should handle SET_SEARCH_BY", () => {
    expect(moviesReducer(initialState, { type: ACTIONS.SET_SEARCH_BY, payload: "search" }))
      .toEqual({
        movies: [],
        processingMovie: emptyMovie,
        filterGenre: "all",
        sortBy: "",
        search: "search",
      });
  });
});
