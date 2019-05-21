import { combineReducers } from 'redux'
import { homeReducer } from '../home'
import { songPlayerReducer } from '../song-player'
import entitiesReducer from './entities'

export default combineReducers({
  entities: entitiesReducer,
  home: homeReducer,
  songPlayer: songPlayerReducer
})