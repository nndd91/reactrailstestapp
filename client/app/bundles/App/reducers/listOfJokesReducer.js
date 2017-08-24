export default function (state = [], action) {
  switch(action.type) {
    case 'FETCH_JOKE_LIST':
      // let jokelist = action.payload.data.results
      let jokelist = action.payload.data
      return jokelist
    default :
      return state
  }
}
