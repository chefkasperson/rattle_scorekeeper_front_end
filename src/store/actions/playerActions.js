const loadPlayers = (players) => ({type: 'LOAD_PLAYERS', players})

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