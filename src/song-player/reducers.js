import { SET_IS_LOADING, SET_SONG_COUNTER, SET_ERROR } from './actions'

const initialState = {
  isLoading: false,
  songCounter: null,
  errorMessage: null
}

export const songPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_SONG_COUNTER:
      return {
        ...state,
        songCounter: action.songCounter
      }
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
