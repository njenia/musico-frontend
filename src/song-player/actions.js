import {fetchSong} from "../store/entities/song"


export const SET_IS_LOADING = 'SONG_PLAYER/SET_IS_LOADING'
export const SET_SONG_COUNTER = 'SONG_PLAYER/SET_SONG_COUNTER'
export const SET_ERROR= 'SONG_PLAYER/SET_ERROR'

export function setIsLoading({isLoading}) {
  return {
    type: SET_IS_LOADING,
    isLoading
  }
}

export function setSongCounter({songCounter}) {
  return {
    type: SET_SONG_COUNTER,
    songCounter
  }
}

export function setError({errorMessage}) {
  return {
    type: SET_ERROR,
    errorMessage
  }
}

export function loadSong(id) {
  return async dispatch => {
    dispatch(setIsLoading({isLoading: true}))
    // Missing error handling
    await dispatch(fetchSong({id}))
    dispatch(setIsLoading({isLoading: false}))
  }
}
