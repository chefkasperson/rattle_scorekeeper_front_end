export default (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYERS":
      return action.players
    default:
      return state
  }
}