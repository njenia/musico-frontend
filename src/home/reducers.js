import { SET_PAGE_IS_LOADING, SET_STATS_IS_LOADING, SET_CURRENT_PAGE, SET_PAGE_DATA, SET_STATS } from './actions'

const initialState = {
  isPageLoading: null,
  isStatsLoading: null,
  pages: {},
  currentPage: 0,
  maxPage: null,
  songsCount: null
}
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_IS_LOADING:
      return {
        ...state,
        isPageLoading: action.isPageLoading
      }
    case SET_STATS_IS_LOADING:
      return {
        ...state,
        isStatsLoading: action.isStatsLoading
      }
    case SET_PAGE_DATA:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.page]: action.songIds
        }
      }
    case SET_STATS:
      return {
        ...state,
        songsCount: action.songsCount,
        maxPage: action.maxPage
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}
