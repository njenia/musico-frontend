import fetch from "cross-fetch"

import { API_URL_FRAGMENT } from "../../../common/constants"
export const SET_SONGS = 'SONG/SET_SONGS'

export function setSongs({songs}) {
  return {
    type: SET_SONGS,
    songs
  }
}

export function fetchSong({id}) {
  return async dispatch => {
    // Missing error handling
    const response = await fetch(`${API_URL_FRAGMENT}/songs/${id}`)
    const result = await response.json()
    return dispatch(setSongs({songs: [result]}))
  }
}

export function fetchSongs({page}) {
  return async dispatch => {
    // Missing error handling
    const response = await fetch(`${API_URL_FRAGMENT}/songs?page=${page}`)
    const result = await response.json()
    dispatch(setSongs({songs: result.songs}))
    return result
  }
}