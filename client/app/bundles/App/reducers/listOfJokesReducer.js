import axios from 'axios'
export default function (state = [], action) {
  switch(action.type) {
    case 'FETCH_JOKE_LIST':
      console.log('Fetching joke list')
      return action.payload.data.results
  }

  return state
}
