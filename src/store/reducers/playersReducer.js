export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYERS":
      const players = action.players.players
      console.log(players.players)
      return [...state, ...players]
    case "ADD_PLAYER":
      console.log(state)
      return state.concat(action.player)
    default:
      return state
  }
}