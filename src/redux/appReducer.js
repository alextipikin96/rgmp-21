import ACTIONS from "./types";

const initialState = {
  loading: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case ACTIONS.HIDE_LOADER:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}
