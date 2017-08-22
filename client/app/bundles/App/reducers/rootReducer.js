import { combineReducers } from 'redux'
import ListOfJokes from './listOfJokesReducer'
import JokeTags from './jokeTagsReducer'

const rootReducer = combineReducers({
  jokeList: ListOfJokes,
  jokeTags: JokeTags
})

export default rootReducer
