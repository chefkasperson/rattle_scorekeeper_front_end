export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYERS":
      const players = action.players
      console.log(players)
      return players
    default:
      return state
  }
}