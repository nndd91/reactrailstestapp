export function pushJokesIntoTags (jokelist = []) {
  console.log('pushig jokes into tags')
  console.log(jokelist)
  return {
    type: 'PUSH_JOKES_INTO_TAGS',
    payload: jokelist
  }
}
