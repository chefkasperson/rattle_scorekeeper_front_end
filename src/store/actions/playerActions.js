const loadPlayers = (players) => ({type: 'LOAD_PLAYERS', players})
const addPlayer = (player) => ({type: 'ADD_PLAYER', player})
export const fetchPlayers = () => {
  return dispatch => {
    return fetch("http://localhost:3003/api/v1/players")
      .then(r => r.json())
      .then(playerJSON => {
        if (playerJSON.error) {
          alert(playerJSON.error)
        } else {
          dispatch(loadPlayers(playerJSON))
        }
      })
  }
}

export const createPlayer = (player) => {
  return dispatch => {
    const body = {
      player
    }
    return fetch('http://localhost:3003/api/v1/players', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(newPlayer => {
      if (newPlayer.error) {
        alert(newPlayer.error)
      } else {
        dispatch(addPlayer(newPlayer))
        return newPlayer
      }
    })
  }
}