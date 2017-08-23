import axios from 'axios'
import { updateFilterList } from './filteredListAction'

function fetchJokesList(searchParams = '') {
  //let url = 'https://icanhazdadjoke.com/search'
  let url = 'https://testapi123-f814c.firebaseio.com/jokes.json'
  let jokelist = [{'id': 1, 'joke': 'dhsahsa'}]

  // return function (dispatch) {
  //   axios.get(url, { headers: { 'Accept': 'application/json' }})
  //     .then((response) => {
  //       dispatch({
  //         type: 'FETCH_JOKE_LIST',
  //         payload: response.data
  //     })
  //   })
  // }
  //console.log(`${url}?term=${searchParams}`)
  //let response = axios.get(`${url}?term=${searchParams}`, { headers: { 'Accept': 'application/json' }})
  let response = axios.get(url)
  return {
    type: 'FETCH_JOKE_LIST',
    payload: response
  }
}

export function fetchJokes(searchParams = '') {
  return dispatch => {
    dispatch(fetchJokesList(searchParams))
    dispatch(updateFilterList([], ''))
  }
}
