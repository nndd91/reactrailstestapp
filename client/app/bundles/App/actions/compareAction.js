export function addToComparePool(joke) {
  return dispatch => {
    dispatch({
      type: 'ADD_TO_COMPARE_POOL',
      payload: joke
    })
  }
}

export function removeFromComparePool(joke) {
  return dispatch => {
    dispatch({
      type: 'REMOVE_FROM_COMPARE_POOL',
      payload: joke
    })
  }
}

export function handleButtonForComparePool(joke) {
  return dispatch => {

  }
}
