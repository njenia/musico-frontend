import {fetchSong} from "../store/entities/song"


export const SET_IS_LOADING = 'SET_IS_LOADING'

export function setIsLoading({isLoading}) {
  return {
    type: SET_IS_LOADING,
    isLoading
  }
}

export function loadSong(id) {
  return dispatch => {
      dispatch(setIsLoading({isLoading: true}))
      dispatch(fetchSong({id}))
      return dispatch(setIsLoading({isLoading: false}))
  }
}
