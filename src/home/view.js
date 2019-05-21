import React from 'react'
import List from "@material-ui/core/List/List"
import Typography from "@material-ui/core/Typography/Typography"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

import SongItem from "./components/song-item"
import Pagination from "./components/pagination"

class Home extends React.Component {
  componentDidMount() {
    const { loadPage, currentPage } = this.props

    loadPage(currentPage || 0)
  }

  componentDidUpdate(prevProps) {
    const { loadPage, currentPage } = this.props

    if (currentPage !== prevProps.currentPage) {
      loadPage(currentPage)
    }
  }

  render() {
    const {
      songs,
      songsCount,
      currentPage,
      maxPage,
      moveToPage,
      navigate,
      isStatsLoading,
      isPageLoading
    } = this.props
    return !isStatsLoading ? (
      <React.Fragment>
        <Typography variant="caption">Total songs: {songsCount}</Typography>
        { !isPageLoading ?
          <List>
          {
            songs.map(song => <div key={song.id}>
              <SongItem onSongClick={() => navigate(`song/${song.id}`)} artist={song.artist} title={song.title}/>
            </div>)
          }
          </List> : <CircularProgress /> }
        <Pagination
          maxPage={maxPage}
          currentPage={currentPage}
          moveToPage={moveToPage}
        />
      </React.Fragment>
    ) : <CircularProgress />
  }
}

export default Home
