export function updateFilterList(joke_list, searchParams) {

  let filteredList =
    joke_list.filter((joke) => {
      return joke.joke.search(searchParams) >= 0
    })

  return {
    type: 'FILTER_LIST',
    payload: filteredList
  }
}
