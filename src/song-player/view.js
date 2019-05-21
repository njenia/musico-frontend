import React from 'react'
import isEmpty from 'lodash/isEmpty'
import Typography from "@material-ui/core/Typography/Typography"
import {Link} from "@reach/router"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

class SongPlayer extends React.Component {
  componentDidMount() {
    const { songId, song, loadSong } = this.props
    if (isEmpty(song)) {
      loadSong(songId)
    }
    this.connectToSocket()
  }

  componentWillUnmount() {
    if (this.ws) {
      this.ws.onclose = () => {}
      this.ws.close()
    }
  }

  connectToSocket() {
    const { setSongCounter, songId, setError } = this.props

    // It's better to init the websocket when the user logs in to the system
    // keeping it alive for the whole lifetime of the session, and not only in this component.
    // going into and leaving the song player would send a message with the songId (instead of
    // communicating through connection and closing of the socket. The websocket would live in
    // a middleware and respond to actions (ENTER_SONG_PLAYER and LEAVE_SONG_PLAYER) and send messages
    // to the server accordingly.
    // I was out of time to change it after realizing the design flaw,
    // but decided to leave this real time feature as it is pretty cool

    const connect = () => {
      this.ws = new WebSocket(`ws://localhost:8080?songId=${songId}`)
      this.ws.onmessage = msg => setSongCounter({songCounter: msg.data})
      this.ws.onclose = () => {
        this.ws = null
        setError({errorMessage: "Connection disrupted, trying to reconnect"})
        setTimeout(connect, 2000)
      }
      this.ws.onopen = () => {
        setError({errorMessage: null})
      }
    }
    connect()
  }

  render() {
    const { song, songCounter, errorMessage, isLoading } = this.props
    return !isLoading && !isEmpty(song) ? (
      <React.Fragment>
        <Typography variant="h4">{song.title}</Typography>
        <Typography variant="subtitle1">{song.artist}</Typography>
        <audio controls src={song.url}/>
        <Typography variant="subtitle2">
          {errorMessage ? "Not updating real time stats because of connection issues" :
            `Number of people listening right now: ${songCounter}`}
        </Typography>
        <Link to="/">
          <Typography variant="caption">
            Back to library
          </Typography>
        </Link>
      </React.Fragment>
    ) : <CircularProgress />
  }
}

export default SongPlayer
