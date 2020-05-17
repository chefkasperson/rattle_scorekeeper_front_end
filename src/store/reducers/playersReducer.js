export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYERS":
      const players = action.players.players
      return [...state, ...players]
    case "ADD_PLAYER":
      return state.concat(action.player)
    default:
      return state
  }
}