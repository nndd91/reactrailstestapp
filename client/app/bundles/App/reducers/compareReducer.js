export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_COMPARE_POOL' :
      if (state.length < 4) {
        return[
          ...state, action.payload
        ]
      } else {
        return state
      }
    case 'REMOVE_FROM_COMPARE_POOL' :
      return state.filter(joke => joke.id !== action.payload.id)

    default :
      return state
  }
}
