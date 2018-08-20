import * as Todos from 'core/providers/todos'

export const createTodoItem = (todoId, item) => ({
  type: 'CREATE_TODO_ITEM',
  todoId,
  item
})

export const createTodoItemSuccess = (todoId, item) => ({
  type: 'CREATE_TODO_ITEM_SUCCESS',
  todoId,
  item
})

export const getTodosItems = todoId => ({
  type: 'GET_TODOS_ITEMS',
  todoId
})

export const getTodosItemsSuccess = (todoId, items) => ({
  type: 'GET_TODOS_ITEMS_SUCCESS',
  todoId,
  items
})

export const getTodoItemId = (todoId, itemId) => ({
  type: 'GET_TODOS_ITEM',
  todoId,
  itemId
})

export const getTodoItemSuccess = (todoId, itemId) => ({
  type: 'GET_TODO_ITEM_SUCCESS',
  todoId,
  itemId
})

export const asyncCreateTodosItem = (todoId, item) => async (dispatch) => {
  dispatch(createTodoItem(todoId, item))
  await Todos.createTodoItem(todoId, item)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const asyncGetTodosItems = todoId => async (dispatch) => {
  dispatch(getTodosItems(todoId))
  await Todos.getTodoItems(todoId)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const asyncGetTodosItem = (todoId, itemId) => async (dispatch) => {
  dispatch(getTodoItemId(todoId, itemId))
  await Todos.getTodoItem(todoId, itemId)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
