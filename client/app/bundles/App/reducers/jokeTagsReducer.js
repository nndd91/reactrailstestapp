export default function (state = [], action) {
  switch(action.type) {
    case 'PUSH_JOKES_INTO_TAGS':
      console.log('Pushing Joke into Tags')
      return action.payload
    default :
      return state
  }
}
