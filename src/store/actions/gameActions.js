
export const addGame = game => ({type: "ADD_GAME", game})
const loadGames = (games) => ({type: "LOAD_GAMES", games})
export const fetchGames = () => {
  return dispatch => {
    return fetch("http://localhost:3003/api/v1/games")
      .then(r => r.json())
      .then(gamesJSON => {
        console.log(gamesJSON)
        if (gamesJSON.error) {
          alert(gamesJSON.error)
        } else {
          dispatch(loadGames(gamesJSON))
        }
      })
  }
}
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
        console.log(newGame)
        dispatch(addGame(newGame))
        return newGame
      }
    })
  }
}