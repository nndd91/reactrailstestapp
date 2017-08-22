import { combineReducers } from 'redux'
import ListOfJokes from './listOfJokesReducer'
import JokeTags from './jokeTagsReducer'
import FilteredList from './filteredListReducer'

const rootReducer = combineReducers({
  jokeList: ListOfJokes,
  jokeTags: JokeTags,
  FilteredList: FilteredList
})

export default rootReducer
