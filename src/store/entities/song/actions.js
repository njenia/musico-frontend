import fetch from "cross-fetch"

export const SET_SONGS = 'SET_SONGS'

export function setSongs({songs}) {
  return {
    type: SET_SONGS,
    songs
  }
}

export function fetchSong({id}) {
  return dispatch => {
    return fetch(`/api/songs/${id}`)
      .then(response => response.json())
      .then(result => {
        return dispatch(setSongs({songs: [result]}))
      })
  }
}
