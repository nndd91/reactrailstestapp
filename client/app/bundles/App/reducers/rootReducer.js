import { combineReducers } from 'redux'
import ListOfJokes from './listOfJokesReducer'
import searchParams from './searchParamsReducer'
import FilteredList from './filteredListReducer'

const rootReducer = combineReducers({
  jokeList: ListOfJokes,
  searchParams: searchParams,
  FilteredList: FilteredList
})

export default rootReducer
