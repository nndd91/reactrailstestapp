import axios from 'axios'
import { updateFilterList } from './filteredListAction'


export function fetchJokes(searchParams = '') {
  return dispatch => {
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
    axios.get(url).then((response) => {
      dispatch({
        type: 'FETCH_JOKE_LIST',
        payload: response
      })
      dispatch(updateFilterList(response.data, ''))
    })
  }
}
