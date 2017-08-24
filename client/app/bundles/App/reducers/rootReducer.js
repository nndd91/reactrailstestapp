import { combineReducers } from 'redux'
import ListOfJokes from './listOfJokesReducer'
import searchParams from './searchParamsReducer'
import FilteredList from './filteredListReducer'
import DisabledTags from './disabledTagsReducer'
import comparePool from './compareReducer'

const rootReducer = combineReducers({
  jokeList: ListOfJokes,
  searchParams: searchParams,
  filteredList: FilteredList,
  disabledTags: DisabledTags,
  comparePool: comparePool

})

export default rootReducer
