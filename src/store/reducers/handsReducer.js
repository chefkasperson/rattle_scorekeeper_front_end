export default (state = [], action) => {
  switch (action.type) {
    case "ADD_HAND":
      return state.concat(action.hand)
    default:
      return state
  }
}