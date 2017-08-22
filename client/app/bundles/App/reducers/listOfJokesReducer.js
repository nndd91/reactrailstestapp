export default function (state = [], action) {
  switch(action.type) {
    case 'FETCH_JOKE_LIST':
      console.log('Fetching joke list')
      let jokelist = action.payload.data.results
      console.log(jokelist)
      return jokelist
    default :
      return state
  }
}
