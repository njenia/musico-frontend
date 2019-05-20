import keyBy from 'lodash/keyBy'
import merge from 'lodash/merge'

import { SET_SONGS } from './actions'

const initialState = {}
export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return merge({}, state, keyBy(action.songs, 'id'))
    default:
      return state
  }
}
