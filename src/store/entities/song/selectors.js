import filter from 'lodash/filter'
import includes from 'lodash/includes'

export const getSong = (songs, songId) => songs[songId]
export const getSongs = (songs, songIds) => filter(songs, song => includes(songIds, song.id))