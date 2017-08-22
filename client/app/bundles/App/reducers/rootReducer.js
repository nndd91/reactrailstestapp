import { combineReducers } from 'redux'
import ListOfJokes from './listOfJokesReducer'
const rootReducer = combineReducers({
  jokeList: ListOfJokes
})

export default rootReducer
