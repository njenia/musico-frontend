import fetch from 'cross-fetch'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'

import { fetchSongs } from '../store/entities/song'
import { API_URL_FRAGMENT } from "../common/constants"


export const SET_PAGE_IS_LOADING = 'HOME/SET_PAGE_IS_LOADING'
export const SET_STATS_IS_LOADING = 'HOME/SET_STATS_IS_LOADING'
export const SET_PAGE_DATA = 'HOME/SET_PAGE_DATA'
export const SET_CURRENT_PAGE = 'HOME/SET_CURRENT_PAGE'
export const SET_STATS = 'HOME/SET_STATS'

export function setPageIsLoading({isPageLoading}) {
  return {
    type: SET_PAGE_IS_LOADING,
    isPageLoading
  }
}

export function setStatsIsLoading({isStatsLoading}) {
  return {
    type: SET_STATS_IS_LOADING,
    isStatsLoading
  }
}

export function setCurrentPage({page}) {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export function setPageData({ page, songIds }) {
  return {
    type: SET_PAGE_DATA,
    songIds,
    page
  }
}

export function setStats({ count, maxPage }) {
  return {
    type: SET_STATS,
    songsCount: count,
    maxPage
  }
}

export function loadPage(page) {
  return async (dispatch, getState) => {
    const { home: { pages } } = getState()
    if (isEmpty(pages[page])) {
      dispatch(setPageIsLoading({isPageLoading: true}))
      // Missing error handling
      const result = await dispatch(fetchSongs({page}))
      dispatch(setPageData({
        songIds: map(result.songs, 'id'),
        page
      }))
      dispatch(setCurrentPage({page}))

      await dispatch(fetchStatsIfNeeded())

      dispatch(setPageIsLoading({isPageLoading: false}))
    } else {
      dispatch(setCurrentPage({page}))
    }
  }
}

function fetchStatsIfNeeded() {
  return async (dispatch, getState) => {
    const { home: { songsCount } } = getState()
    if (isNil(songsCount)) {
      dispatch(setStatsIsLoading({isStatsLoading: true}))
      // Missing error handling
      const response = await fetch(`${API_URL_FRAGMENT}/songs/stats`)
      const result = await response.json()
      dispatch(setStats({
        count: result.count,
        maxPage: result.maxPage
      }))
      dispatch(setStatsIsLoading({isStatsLoading: false}))
    }
  }
}