export const addHand = hand => ({type: "ADD_HAND", hand})

export const postHand = (hand) => {
  return dispatch => {
    const body = {
      hand
    }
    return fetch('http://localhost:3003/api/v1/hands', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(newHand => {
      if (newHand.error) {
        console.log(newHand)
        alert("Sorry the data entered for this hand is invalid")
      } else {
        console.log(newHand)
        dispatch(addHand(newHand))
        return newHand
      }
    })
  }
}