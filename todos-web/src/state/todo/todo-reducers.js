
const initialState = {
  items: []
}

export default (state = initialState, { todos, todo, type }) => ({
  CREATE_TODO_SUCCESS: {
    ...state,
    items: [...state.items, todo]
  },
  GET_TODOS_SUCCESS: {
    ...state,
    items: todos
  }
}[type] || state)
