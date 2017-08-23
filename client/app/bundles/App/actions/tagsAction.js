export function addDisabledTags(tag) {
  return {
    type: 'ADD_NEW_TAG',
    payload: tag
  }
}

export function refreshTags(filteredList) {
  return {
    type: 'REFRESH_TAGS',
    payload: filteredList
  }
}

export function toggleTag(tag) {
  return {
    type: 'TOGGLE_TAG',
    payload: tag
  }
}
