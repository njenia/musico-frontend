import React from 'react'
import isEmpty from 'lodash/isEmpty'

class SongPlayer extends React.Component {
  componentDidMount() {
    const { songId, song, loadSong } = this.props
    if (isEmpty(song)) {
      loadSong(songId)
    }
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    const {song} = this.props
    if (song) {
      console.log(song.filename)
      return (
      <React.Fragment>
        <h1>Song Player</h1>
        {(song ?
            <div>
              {`${song.artist} - ${song.title}`}
            </div>
            : null
        )}
        <audio controls src={song.url} />
      </React.Fragment>
    )
    }
    return null

  }
}

export default SongPlayer
