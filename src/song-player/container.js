import {connect} from "react-redux"

import SongPlayer from "./view"
import {getSong} from "../store/entities/song"
import {loadSong, setError, setSongCounter} from "./actions"

const mapStateToProps = ({
  songPlayer: {
    song,
    isLoading,
    songCounter,
    errorMessage
  },
  entities: { songs }
}, {
  songId
}) => ({
  isLoading,
  songCounter,
  errorMessage,
  song: getSong(songs, songId)
})

const mapDispatchToProps = {
  loadSong,
  setError,
  setSongCounter
}

export const SongPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPlayer)
