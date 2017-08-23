import { refreshTags } from './tagsAction'

export function updateFilterList(joke_list, searchParams) {

  let filteredList =
    joke_list.filter((joke) => {
      return (joke.joke.search(searchParams) >= 0 || joke.cat.match(searchParams))
    })

  return dispatch => {
    dispatch({
      type: 'FILTER_LIST',
      payload: filteredList
    })
    dispatch(refreshTags(filteredList))
  }
}
