import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import handsReducer from './handsReducer'
import playersReducer from './playersReducer'

export default combineReducers({
  gamesReducer,
  handsReducer,
  playersReducer
}) 