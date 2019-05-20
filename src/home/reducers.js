import {SET_IS_LOADING, SET_CURRENT_PAGE, SET_PAGE_DATA, MOVE_PAGE_BY} from './actions'

const initialState = {
  isLoading: false,
  pages: {},
  currentPage: 0,
  maxPage: null,
  songsCount: null
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_PAGE_DATA:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.page]: action.songIds
        },
        songsCount: action.songsCount,
        maxPage: action.maxPage
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case MOVE_PAGE_BY:
      return {
        ...state,
        currentPage: state.currentPage + action.steps
      }
    default:
      return state
  }
}

export default homeReducer