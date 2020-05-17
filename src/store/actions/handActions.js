export const addHand = hand => ({type: "ADD_HAND", hand})
const updateGame = (game) => ({type: "UPDATE_GAME", game})
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
    .then(game => {
      if (game.error) {
        alert("Sorry the data entered for this hand is invalid")
      } else {
        let hand = game.hands[game.hands.length - 1]
        dispatch(addHand(hand))
        dispatch(updateGame(game))
        return game
      }
    })
  }
}