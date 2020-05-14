export default (state = [], action) => {
  switch (action.type) {
    case "ADD_GAME":
      return state.concat(action.game)
    default:
      return state
  }
}