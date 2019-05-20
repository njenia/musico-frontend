import React from 'react'
import {Link} from '@reach/router'

import SongItem from "./components/song-item"
import Pagination from "./components/pagination"

class Home extends React.Component {
  componentWillMount() {
    const { loadPage, currentPage } = this.props
    loadPage(currentPage || 0)
  }

  componentDidUpdate(prevProps) {
    const { loadPage, currentPage } = this.props
    if (currentPage !== prevProps.currentPage) {
      console.log('did UODATE')
      console.log(currentPage)
      console.log(prevProps.currentPage)
      loadPage(currentPage || 0)
    }
  }

  render() {
    const {songs, songsCount, currentPage, maxPage, onMoveOneLeftClick, onMoveOneRightClick} = this.props
    return maxPage != null ? (
      <React.Fragment>
        <div>Total songs: {songsCount}</div>
        {
          songs.map(song => <div key={song.id}>
            <Link to={`song/${song.id}`}>
              <SongItem artist={song.artist} title={song.title}/>
            </Link>
          </div>)
        }
        <Pagination
          maxPage={maxPage}
          currentPage={currentPage}
          onMoveOneLeftClick={onMoveOneLeftClick}
          onMoveOneRightClick={onMoveOneRightClick}
        />
      </React.Fragment>
    ) : null
  }
}

export default Home
