export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TAG' :
      return action.payload
      
    case 'REFRESH_TAGS' :
      let filteredList = action.payload
      console.log('filtered List is: ', filteredList)
      let tags = {}

      filteredList.forEach((joke) => {
        if (!(joke.cat in tags)) {
          tags[joke.cat] = false
        }
      })
      console.log(tags)
      return tags

    case 'TOGGLE_TAG' :
      let newState = state
      newState[action.payload] = !newState[action.payload]
      console.log('updated state is:', newState)
      return newState

    default :
      return state
  }
}
