export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_NEW_TAG' :
      return action.payload
    default :
      return state
  }
}
