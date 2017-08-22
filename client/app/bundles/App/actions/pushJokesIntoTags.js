export function pushJokesIntoTags (jokelist = []) {
  console.log(jokelist)
  return {
    type: 'PUSH_JOKES_INTO_TAGS',
    payload: jokelist
  }
}
