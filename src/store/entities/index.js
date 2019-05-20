import {combineReducers} from "redux"
import { songsReducer } from "./song"

export default combineReducers({
  songs: songsReducer
})
