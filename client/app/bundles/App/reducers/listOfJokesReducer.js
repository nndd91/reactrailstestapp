export default function (state = [], action) {
  switch(action.type) {
    case 'FETCH_JOKE_LIST':
      console.log('Fetching joke list')
      // let jokelist = action.payload.data.results
      let jokelist = action.payload.data
      console.log(jokelist)
      return jokelist
    default :
      return state
  }
}
