export default function (state = [], action) {
  switch(action.type) {
    case 'UPDATE_SEARCH_PARAMS':
      console.log('Updating Search Params')
      return action.payload
    default :
      return state
  }
}
