import {connect} from "react-redux"

import Home from "./view"
import { loadPage, setCurrentPage } from "./actions"
import { getSongs } from "../store/entities/song"

const mapStateToProps = ({
  home: {
    pages, currentPage, songsCount, maxPage, isPageLoading, isStatsLoading
  },
  entities: { songs }
}) => ({
  songs: getSongs(songs, pages[currentPage]),
  currentPage,
  songsCount,
  maxPage,
  isStatsLoading,
  isPageLoading
})

const mapDispatchToProps = {
  loadPage,
  moveToPage: page => setCurrentPage({page}),
}

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
