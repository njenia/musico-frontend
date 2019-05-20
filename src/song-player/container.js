import {connect} from "react-redux"

import SongPlayer from "./view"
import {getSong} from "../store/entities/song"
import {loadSong} from "./actions"

const mapStateToProps = ({
  songPlayer: {
    song,
    isLoading
  },
  entities: { songs }
}, {
  songId
}) => ({
  isLoading,
  song: getSong(songs, songId)
})

const mapDispatchToProps = {
  loadSong
}

export const SongPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPlayer)
