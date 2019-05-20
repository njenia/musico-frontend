import fetch from 'cross-fetch'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

import { setSongs } from '../store/entities/song'


export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_PAGE_DATA = 'SET_PAGE_DATA'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const MOVE_PAGE_BY = 'MOVE_PAGE_BY'

export function setIsLoading({isLoading}) {
  return {
    type: SET_IS_LOADING,
    isLoading
  }
}

export function setCurrentPage({page}) {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export function movePageBy({steps}) {
  return {
    type: MOVE_PAGE_BY,
    steps
  }
}

export function setPageData({ count, maxPage, page, songIds }) {
  return {
    type: SET_PAGE_DATA,
    songsCount: count,
    maxPage,
    songIds,
    page
  }
}

export function loadPage(page) {
  return (dispatch, getState) => {
    const { home: { pages } } = getState()
    if (isEmpty(pages[page])) {
      dispatch(setIsLoading({isLoading: true}))
      return fetch(`/api/songs?page=${page}`)
        .then(response => response.json())
        .then(result => {
          dispatch(setSongs({songs: result.songs}))
          dispatch(setPageData({
            count: result.count,
            maxPage: result.maxPage,
            page,
            songIds: map(result.songs, 'id')}))
          return dispatch(setIsLoading({isLoading: false}))
        })
    } else {
      return dispatch(setCurrentPage({page}))
    }
  }
}
