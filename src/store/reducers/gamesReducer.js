export default (state = [], action) => {
  switch (action.type) {
    case "ADD_GAME":
      return state.concat(action.game)
    case "LOAD_GAMES":
      return [...state, ...action.games.games]
    case "UPDATE_GAME":
      let idx = state.findIndex((game) => game.id == action.game.id)
      return [...state.slice(0, idx),
        action.game,
        ...state.slice(idx + 1)]
    default:
      return state
  }
}