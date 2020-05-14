import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import handsReducer from './handsReducer'

export default combineReducers({
  gamesReducer,
  handsReducer
}) 