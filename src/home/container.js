import {connect} from "react-redux"

import Home from "./view"
import { loadPage, movePageBy } from "./actions"
import { getSongs } from "../store/entities/song"

const mapStateToProps = ({
  home: {
    pages, currentPage, songsCount, maxPage, isLoading
  },
  entities: { songs }
}) => ({
  songs: getSongs(songs, pages[currentPage]),
  currentPage: currentPage,
  songsCount: songsCount,
  maxPage: maxPage,
  isLoading: isLoading
})

const mapDispatchToProps = {
  loadPage,
  onMoveOneLeftClick: () => movePageBy({steps: -1}),
  onMoveOneRightClick: () => movePageBy({steps: 1}),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
