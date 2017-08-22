import axios from 'axios'

export function fetchJokes(searchParams = '') {
  let url = 'https://icanhazdadjoke.com/search'
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
  console.log(`${url}?term=${searchParams}`)
  let response = axios.get(`${url}?term=${searchParams}`, { headers: { 'Accept': 'application/json' }})
  return {
    type: 'FETCH_JOKE_LIST',
    payload: response
  }
}
