export const addGame = game => ({type: "ADD_GAME", game})

export const createGame = (game) => {
  return dispatch => {
    const body = {
      game
    }
    return fetch('http://localhost:3003/api/v1/games', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(newGame => {
      if (newGame.error) {
        alert(newGame.error)
      } else {
        dispatch(addGame(newGame))
      }
    })
  }
}