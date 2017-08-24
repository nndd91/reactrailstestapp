export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TAG' :
      return action.payload

    case 'REFRESH_TAGS' :
      let filteredList = action.payload
      let tags = {}

      filteredList.forEach((joke) => {
        if (!(joke.cat in tags)) {
          tags[joke.cat] = false
        }
      })
      return tags

    case 'TOGGLE_TAG' :
      return Object.assign({}, state,
        action.payload
      )

    default :
      return state
  }
}
