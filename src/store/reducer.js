const defaultState = {
  searchList: [1, 2, 3, 4]
}
// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
  return state;
}
